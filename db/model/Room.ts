import { model, Schema } from "mongoose";
import { Player } from "./Player";

interface Room {
  roomCode: string;
  players?: Player[];
  createdAt: Date;
}

const schema = new Schema<Room>({
  roomCode: { type: String, required: true },
  players: { type: [Schema.Types.ObjectId], ref: "Player" },
  createdAt: { type: Date, required: true }
})

export default model<Room>("Room", schema);