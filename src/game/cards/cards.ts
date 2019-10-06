import { PlayerStatus, PlayerSkills, Player } from "../player/Player";
import { PlayerGameStats, GameJam } from "../jam/GameJam";
import { updateTimeLeftCounter, cardContainer } from "../ui/uiController";
import { cardMovementQueue } from "./playerHand";
import { Sprite } from "pixi.js";
import { loader } from "../../core/loader";
import { drawNewCard } from "./cardDraw";
import { player } from "../game";
import { releaseSound } from "../sounds/cardSounds";

export const MAX_CARDS = 5

export class Card {
  sprite: Sprite
  playerStatus: PlayerStatus
  playerSkills: PlayerSkills
  gameStatus: PlayerGameStats
  time: number
  prompts?: string[]
  release: boolean

  constructor(sprite: string) {
    this.release = false
    this.sprite = Sprite.from(loader.resources[`${sprite}`].texture)
    this.playerStatus = {
      health: 0,
      mind: 0,
      energy: 0
    }
    this.playerSkills = {
      gameDesign: 0,
      coding: 0,
      art: 0,
      sound: 0,
      popularity: 0,
      organization: 0
    }
    this.time = 0
    this.gameStatus = {
      playable: 0,
      fun: 0,
      theme: 0,
      graphics: 0,
      sound: 0,
      innovation: 0
    }
  }
}

export const drawCards = (playerStatus: PlayerStatus, jam: GameJam) => {
  const drawnHand: Card[] = []

  discardOldHand(jam)

  while (drawnHand.length < MAX_CARDS) {
    const card = drawNewCard(player, jam)
    drawnHand.push(card)
    jam.playerHand.push(card)
  }

  return drawnHand
}

const discardOldHand = (jam: GameJam) => {
  while (jam.playerHand.length > 0) {
    jam.playerHand.shift()
  }
  for (const card of cardContainer.children) {
    card.destroy()
  }
}

export const processCardEffect = (card: Card, player: Player, jam: GameJam) => {
  if (card.gameStatus) {
    jam.playerGame.fun += card.gameStatus.fun
    jam.playerGame.graphics += card.gameStatus.graphics
    jam.playerGame.innovation += card.gameStatus.innovation
    jam.playerGame.playable += card.gameStatus.playable
    jam.playerGame.sound += card.gameStatus.sound
    jam.playerGame.theme += card.gameStatus.theme

    jam.playerGame.fun >= 10 ? jam.playerGame.fun = 10 : false
    jam.playerGame.graphics >= 10 ? jam.playerGame.graphics = 10 : false
    jam.playerGame.innovation >= 10 ? jam.playerGame.innovation = 10 : false
    jam.playerGame.playable >= 10 ? jam.playerGame.playable = 10 : false
    jam.playerGame.sound >= 10 ? jam.playerGame.sound = 10 : false
    jam.playerGame.theme >= 10 ? jam.playerGame.theme = 10 : false
  }

  if (card.playerSkills) {
    player.skills.art += card.playerSkills.art
    player.skills.coding += card.playerSkills.coding
    player.skills.gameDesign += card.playerSkills.gameDesign
    player.skills.organization += card.playerSkills.organization
    player.skills.popularity += card.playerSkills.popularity
    player.skills.sound += card.playerSkills.sound

    player.skills.art >= 10 ? player.skills.art = 10 : false
    player.skills.coding >= 10 ? player.skills.coding = 10 : false
    player.skills.gameDesign >= 10 ? player.skills.gameDesign = 10 : false
    player.skills.organization >= 10 ? player.skills.organization = 10 : false
    player.skills.popularity >= 10 ? player.skills.popularity = 10 : false
    player.skills.sound >= 10 ? player.skills.sound = 10 : false
  }

  if (card.playerStatus) {
    player.status.energy += card.playerStatus.energy
    player.status.health += card.playerStatus.health
    player.status.mind += card.playerStatus.mind
    player.status.energy >= 10 ? player.status.energy = 10 : false
    player.status.health >= 10 ? player.status.health = 10 : false
    player.status.mind >= 10 ? player.status.mind = 10 : false
  }

  if (card.time) {
    jam.timer -= card.time
    updateTimeLeftCounter(jam)
  }

  if (card.release) {
    jam.releaseReady = true
    jam.timer = 0
  }
}