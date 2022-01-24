import Message from "./Message";

export default interface ChatMessage extends Message {
  type: "chat";
  data: {
    text: string;
    sender: string;
  }
}