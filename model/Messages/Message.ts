export default interface Message {
  type: "chat" | "command" | "update";
  data: any;
}