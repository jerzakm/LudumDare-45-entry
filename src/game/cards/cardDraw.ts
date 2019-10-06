import { sleepCard, pixelPractice, soundPractice, levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea, joinCommunity, meaningOfLife, characterArt, happyTrees, marieCondo, makeNoise, walkInAPark, askAFriend } from "./cardList"
import { Player } from "../player/Player"
import { GameJam } from "../jam/GameJam"
import { Card } from "./cards"

export const drawNewCard = (player: Player, jam: GameJam) => {
  const random = Math.random()

  const tired = (1.15 - (player.status.health + player.status.energy + player.status.mind) / 30) ** 2

  let card: any = levelProcGen()

  let rolled = false

  while (jam.timer < card.time || !rolled) {
    if (random > 1 - tired) {
      card = tiredCards[Math.floor(Math.random() * tiredCards.length)]()
    } else {
      card = gameMakingCards[Math.floor(Math.random() * gameMakingCards.length)]()
    }
    if (jam.practiceRound > 0) {
      card = practiceCards[Math.floor(Math.random() * practiceCards.length)]()
      jam.practiceRound -= 1
    }

    rolled = true
  }

  //   console.log(
  //     `rnd: ${random}
  // tired: ${tired}
  // practiceRnd: ${jam.practiceRound}
  //   `)

  return card
}


const tiredCards: any[] = [sleepCard]
const practiceCards: any[] = [pixelPractice, soundPractice, joinCommunity]
const gameMakingCards: any[] = [
  levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea, meaningOfLife, characterArt, happyTrees, marieCondo,
  makeNoise, walkInAPark, askAFriend
]