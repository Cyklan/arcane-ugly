import { NextApiRequest, NextApiResponse } from "next";
import Character from "../../model/Character";
import PlayerModel from "../../db/model/Player";
import Room from "../../db/model/Room";
import { connect } from "mongoose";

interface ResponseData {
  roomCode: string;
  playerId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const character = req.body.character as Character;
  const displayName = req.body.displayName as string;

  connect(process.env.MONGO_URI!);

  const player = await PlayerModel.create({
    displayName, 
    character
  })

  const room = await Room.create({
    players: [player],
    createdAt: new Date(),
  })

  res.status(200).send({ roomCode: room.roomCode, playerId: player._id.toString() });
}