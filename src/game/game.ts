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
  debug()
}

const debug = () => {
  currentJam.timer = 240
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
  drawNewRound(player.status, currentJam)
}

export const playCard = (card: Card, sprite: Sprite) => {
  sprite.interactive = false
  cardMovementQueue.push({
    sprite: sprite,
    to: {
      position: { x: 600, y: 400 },
      scale: { x: 0.5, y: 0.35 }
    },
    destroy: true
  })
  cardPlayed.play()
  processCardEffect(card, player, currentJam)

  if (card.playerStatus.energy > 0 || card.playerStatus.health > 0) {

  } else {
    player.status.mind -= Math.random() * (card.time / 20)
    player.status.energy -= Math.random() * (card.time / 35)
    player.status.health -= Math.random() * (card.time / 60)
  }

  gameState = GameState.EFFECTS
}

export enum GameState {
  DRAWING, PLAYING, EFFECTS, RESOLUTION, LIMBO
}