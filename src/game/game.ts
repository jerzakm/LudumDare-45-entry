import { initMenu } from "./menu"
import { Container } from "pixi.js"
import { GameJam } from "./jam/GameJam"
import { makeGameUi } from "./ui/uiController"
import { Player } from "./player/Player"

const MAX_CARDS = 4

let menu: Container
let currentJam: GameJam
export let player: Player

export const startGame = () => {
  menu = initMenu()
  player = new Player('Marcin Jerzak')
  return { gameLoop, renderLoop }
}

export const newGame = () => {
  menu.destroy()
  currentJam = new GameJam()
  makeGameUi(currentJam)
}

const gameLoop = (delta: number) => {

}

const renderLoop = (delta: number) => {

}

const drawCards = () => {

}

const playCards = () => {

}

enum GameState {
  DRAWING, PLAYING, EFFECTS, RESOLUTION
}