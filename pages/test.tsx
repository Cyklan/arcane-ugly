import { Types } from "ably";
import { NextPage } from "next";
import { useChannel } from "../hooks/useChannel";

const Test: NextPage = () => {
  const channelData = useChannel("poggers", (message) => {});

  const channel: Types.RealtimeChannelPromise = channelData[0] as Types.RealtimeChannelPromise;

  return <div>{channel.name}: {channel.state}</div>;
};

export default Test;
