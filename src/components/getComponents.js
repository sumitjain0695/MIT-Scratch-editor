import React from "react";
import Repeat from "./control/Repeat";
import Wait from "./control/Wait";
import BroadcastMessage from "./events/broadcast";
import Hide from "./looks/Hide";
import HideMessage from "./looks/HideMessage";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Show from "./looks/Show";
import Size from "./looks/Size";
import Think from "./looks/Think";
import ThinkWithTimer from "./looks/ThinkWithTimer";
import GotoXY from "./motion/Goto";
import Move from "./motion/Move";
import MoveY from "./motion/MoveY";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <Move comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;

    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "SHOW":
      return <Show comp_id={id} />;

    case "HIDE":
      return <Hide comp_id={id} />;

    case "BROADCAST":
      return <BroadcastMessage comp_id={id} />;

    case "WAIT":
      return <Wait comp_id={id} />;

    case "REPEAT":
      return <Repeat comp_id={id} />;

    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;

    default:
      return React.null;
  }
};
