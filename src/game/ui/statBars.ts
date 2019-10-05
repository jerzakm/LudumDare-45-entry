import { PlayerSkills, PlayerStatus } from "../player/Player";
import { PlayerGameStats } from "../jam/GameJam";
import { Container, Graphics } from "pixi.js";

export const initStatBars = (container: Container, playerSkills: PlayerSkills, playerStatus: PlayerStatus, playerGameStats: PlayerGameStats) => {
  const g = new Graphics()

  g.beginFill(0xDE76A5)
  g.drawRect(1380, 200, 200, 8)

  container.addChild(g)
}