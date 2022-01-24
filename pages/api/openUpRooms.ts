// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import getCurrentChannels from "../../ably/getCurrentChannels";
import Room from "../../db/model/Room";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET_KEY}`) {
    res.status(401).end();
    return;
  }

  getCurrentChannels()
    .then((channels) => {
      connect(process.env.MONGO_URI!).then(() => {
        Room.find().then((rooms) => {
          rooms
            .filter((room) => !(room.roomCode in channels))
            .forEach((room) => {
              room.delete();
            });
        });
      });
    }).then(() => {
      res.status(200).end();
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
}
