import { model, Schema } from "mongoose";
import { schema as playerSchema, Player } from "./Player";

interface Room {
  roomCode: string;
  players?: Player[];
  createdAt: Date;
}

const schema = new Schema<Room>({
  roomCode: { 
    type: String, 
    required: true, 
    unique: true,
    default: () => Math.random().toString(36).substring(2, 8)
  },
  players: { type: [playerSchema], ref: "Player" },
  createdAt: { type: Date, required: true },
});

export default model<Room>("Room", schema);
