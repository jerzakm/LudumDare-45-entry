import { GameJam } from "../jam/GameJam";
import { Container, Graphics } from "pixi.js";
import { colorScheme } from "../style";
import { stage } from "../../core/renderer";

export const makeGameUi = (): Container => {
  const gameUi = new Container()

  makeBackground(gameUi)
  stage.addChild(gameUi)
  return gameUi
}

const makeBackground = (container: Container) => {
  const bg = new Graphics()
  bg.beginFill(colorScheme.background)
  bg.drawRect(0, 0, window.innerWidth, window.innerHeight)
  bg.endFill()
  container.addChild(bg)
}