import { NextApiRequest, NextApiResponse } from "next";
import Room from "../../db/model/Room";
import { connect } from "mongoose";
import { v4 } from "uuid";

interface ResponseData {
  roomCode: string;
  playerId: string;
}

const limiter = require("lambda-rate-limiter")({
  interval: 60 * 1000,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  limiter
    .check(1, req.socket.remoteAddress)
    .then(async () => {
      connect(process.env.MONGO_URI!);
      const room = await Room.create({});

      res.status(200).send({ roomCode: room.roomCode, playerId: v4() });
    })
    .catch(() => {
      res.status(429).end();
    });
}
