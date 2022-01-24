import { NextPage } from "next";
import dynamic from "next/dynamic";

const GameContainerNoSSR = dynamic(
  () => import("../components/game/GameContainer"),
  { ssr: false }
);

const Test: NextPage = () => {
  return <GameContainerNoSSR />;
};

export default Test;
