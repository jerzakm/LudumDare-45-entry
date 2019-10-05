import { initMenu } from "./menu"
import { Container, Sprite } from "pixi.js"
import { GameJam } from "./jam/GameJam"
import { makeGameUi } from "./ui/uiController"
import { Player } from "./player/Player"
import { statUpdater } from "./ui/statBars"
import { loader } from "../core/loader"
import { stage } from "../core/renderer"
import { drawCards, Card } from "./cards/cards"
import { renderPlayerHand, cardMovementRender, cardMovementQueue } from "./cards/playerHand"

let menu: Container
let currentJam: GameJam
export let player: Player

export let gameState: GameState

export const startGame = () => {
  menu = initMenu()
  player = new Player('Marcin Jerzak')
  return { gameLoop, renderLoop }
}

export const newGame = () => {
  menu.destroy()
  currentJam = new GameJam()
  makeGameUi(currentJam)
  gameState = GameState.DRAWING
}

const gameLoop = (delta: number) => {
  switch (gameState) {
    case GameState.DRAWING:
      newDraw()
      renderPlayerHand(currentJam)
      gameState = GameState.PLAYING
      break
    case GameState.PLAYING:
      break
    case GameState.EFFECTS:
      break
    case GameState.RESOLUTION:
      break
  }
}

const renderLoop = (delta: number) => {
  if (statUpdater) {
    statUpdater()
  }
  cardMovementRender(delta)
}

const newDraw = () => {
  currentJam.playerHand = drawCards(player.status, currentJam)
}

export const playCard = (card: Card, sprite: Sprite) => {
  sprite.interactive = false
  cardMovementQueue.push({
    sprite: sprite,
    to: {
      position: { x: 600, y: 500 },
      scale: { x: 0.5, y: 0.5 }
    },
    destroy: true
  })
}

export enum GameState {
  DRAWING, PLAYING, EFFECTS, RESOLUTION
}