import { initMenu } from "./menu"
import { Container } from "pixi.js"
import { GameJam } from "./jam/GameJam"
import { makeGameUi } from "./ui/uiController"

let menu: Container
let currentJam: GameJam

export const startGame = () => {
  menu = initMenu()
  return { gameLoop, renderLoop }
}

export const newGame = () => {
  menu.destroy()
  currentJam = new GameJam()
  makeGameUi()
}

const gameLoop = (delta: number) => {

}

const renderLoop = (delta: number) => {

}