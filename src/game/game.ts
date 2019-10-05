import { initMenu } from "./menu"
import { Container, Sprite } from "pixi.js"
import { GameJam } from "./jam/GameJam"
import { makeGameUi } from "./ui/uiController"
import { Player } from "./player/Player"
import { statUpdater } from "./ui/statBars"
import { loader } from "../core/loader"
import { stage } from "../core/renderer"
import { drawCards as drawNewRound, Card, processCardEffect } from "./cards/cards"
import { renderPlayerHand, cardMovementRender, cardMovementQueue } from "./cards/playerHand"
import { cardPlayed } from "./sounds/cardSounds"

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
      if (currentJam.timer <= 0) {
        gameState = GameState.RESOLUTION
      } else if (cardMovementQueue.length > 0) {

      }
      else {
        gameState = GameState.DRAWING
      }
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
  currentJam.playerHand = drawNewRound(player.status, currentJam)
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
  processCardEffect(card, player, currentJam)
  cardPlayed.play()

  gameState = GameState.EFFECTS
}

export enum GameState {
  DRAWING, PLAYING, EFFECTS, RESOLUTION
}