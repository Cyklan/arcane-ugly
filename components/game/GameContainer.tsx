import { useChannel } from "../../hooks/useChannel";

export default function GameContainer() {
  useChannel("abc123", (message) => {});
  
  return <div>Spiel Pog</div>
}