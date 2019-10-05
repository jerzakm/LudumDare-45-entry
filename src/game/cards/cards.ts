import { PlayerStatus, PlayerSkills } from "../player/Player";
import { PlayerGameStats, GameJam } from "../jam/GameJam";
import { cardList } from "./cardList";

export const MAX_CARDS = 5

export interface Card {
  sprite: string
  playerStatus?: PlayerStatus
  playerSkills?: PlayerSkills
  gameStatus?: PlayerGameStats
  time?: number
  prompts?: string[]
}

export const drawCards = (playerStatus: PlayerStatus, jam: GameJam) => {
  const drawnHand: Card[] = []

  const c = cardList()

  while (drawnHand.length < MAX_CARDS) {
    const random = Math.floor(Math.random() * c.length)
    drawnHand.push(c[random])
  }

  return drawnHand
}