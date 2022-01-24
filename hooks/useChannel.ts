import Ably from "ably/promises";
import { useEffect } from "react";

const ably = new Ably.Realtime.Promise({
  authUrl: process.env.HOST + "/api/createTokenRequest",
});

export function useChannel(
  channelName: string,
  callbackOnMessage: (message: any) => void
) {
  const channel = ably.channels.get(channelName);
  useEffect(() => {
    channel.subscribe((msg) => callbackOnMessage(msg));

    return () => channel.unsubscribe();
  });

  return [channel, ably];
}
