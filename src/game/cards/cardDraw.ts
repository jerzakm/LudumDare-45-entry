import { sleepCard, pixelPractice, soundPractice, levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea } from "./cardList"
import { Player } from "../player/Player"
import { GameJam } from "../jam/GameJam"
import { Card } from "./cards"

export const drawNewCard = (player: Player, jam: GameJam) => {
  const random = Math.random()

  const tired = ((20 - (player.status.health + player.status.energy)) ** 2) / 20

  let card: any = levelProcGen()

  while (jam.timer < card.time) {
    if (random < tired) {
      card = tiredCards[Math.floor(Math.random() * tiredCards.length)]()
    } else {
      card = gameMakingCards[Math.floor(Math.random() * gameMakingCards.length)]()
    }
    if (jam.practiceRound > 0) {
      card = practiceCards[Math.floor(Math.random() * practiceCards.length)]()
      jam.practiceRound -= 1
    }
  }

  //   console.log(
  //     `rnd: ${random}
  // tired: ${tired}
  // practiceRnd: ${jam.practiceRound}
  //   `)

  return card
}


const tiredCards: any[] = [sleepCard]
const practiceCards: any[] = [pixelPractice, soundPractice]
const gameMakingCards: any[] = [levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea]