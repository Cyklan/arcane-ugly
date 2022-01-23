import { model, Schema } from "mongoose";
import Character from "../../model/Character";

export interface Player {
  displayName: string;
  character: Character;
}

const schema = new Schema<Player>({
  displayName: { type: String, required: true },
  character: { type: Schema.Types.Mixed, ref: "Character", required: true },
});
export { schema };

const PlayerModel = model<Player>("Player", schema);

export default PlayerModel;
