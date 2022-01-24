import { model, Schema } from "mongoose";

interface Room {
  roomCode: string;
}

const schema = new Schema<Room>({
  roomCode: {
    type: String,
    required: true,
    unique: true,
    default: () => Math.random().toString(36).substring(2, 8),
  },
});

export default model<Room>("Room", schema);
