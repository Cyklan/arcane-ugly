import { NextApiRequest, NextApiResponse } from "next";
import Room from "../../db/model/Room";
import { connect } from "mongoose";
import { v4 } from "uuid";

interface ResponseData {
  roomCode: string;
  playerId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  connect(process.env.MONGO_URI!);
  const room = await Room.create({})

  res.status(200).send({ roomCode: room.roomCode, playerId: v4() });
}