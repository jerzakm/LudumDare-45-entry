import { initMenu } from "./menu"
import { Container, Sprite } from "pixi.js"
import { GameJam } from "./jam/GameJam"
import { makeGameUi, updateTimeLeftCounter } from "./ui/uiController"
import { Player } from "./player/Player"
import { statUpdater } from "./ui/statBars"
import { loader } from "../core/loader"
import { stage } from "../core/renderer"
import { drawCards as drawNewRound, Card, processCardEffect } from "./cards/cards"
import { renderPlayerHand, cardMovementRender, cardMovementQueue } from "./cards/playerHand"
import { cardPlayed } from "./sounds/cardSounds"
import { jamEnd } from "./jam/jamEnd"
import { ZoomBlurFilter } from "pixi-filters"

let menu: Container
let currentJam: GameJam
let currentJamContainer: Container
export let player: Player

export let gameState: GameState

export const startGame = () => {
  menu = initMenu()
  player = new Player('Marcin Jerzak')
  return { gameLoop, renderLoop }
}

export const newGame = (jamNumber = 45) => {
  menu.destroy()
  currentJam = new GameJam(jamNumber)
  currentJamContainer = makeGameUi(currentJam)
  gameState = GameState.DRAWING
  // debug()
}

const debug = () => {
  currentJam.timer = 60
  currentJam.practiceRound = 0
  updateTimeLeftCounter(currentJam)
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
      jamEnd(currentJam, player, currentJamContainer)
      gameState = GameState.LIMBO
      break
    case GameState.LIMBO:
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
      scale: { x: 0.5, y: 0.35 }
    },
    destroy: true
  })
  processCardEffect(card, player, currentJam)
  cardPlayed.play()

  gameState = GameState.EFFECTS
}

export enum GameState {
  DRAWING, PLAYING, EFFECTS, RESOLUTION, LIMBO
}