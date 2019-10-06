import { sleepCard, pixelPractice, soundPractice, levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea, joinCommunity, meaningOfLife, characterArt, happyTrees, marieCondo, makeNoise, walkInAPark, askAFriend, takeANap, kevinDialogue, quillCard, sheSaid, cardTiled, cardRelease, cardBroccoli, cardJoe, cardPlate, make3dModels } from "./cardList"
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

  if (player.status.health < 1 || player.status.energy < 1) {
    card = sleepCard()
  }

  if (jam.timer <= 240) {
    let release = false
    for (const card of jam.playerHand) {

      if (card.release) {
        release = true
      }
    }
    release ? false : card = cardRelease()
    if (jam.timer <= 30) {
      card = cardRelease()
    }
  }

  return card
}


const tiredCards: any[] = [sleepCard, takeANap, walkInAPark, cardJoe]
const practiceCards: any[] = [pixelPractice, soundPractice, joinCommunity]
const gameMakingCards: any[] = [
  levelProcGen, simplePhysics, mechanicsBalancing, krazyIdea, meaningOfLife, characterArt, happyTrees, marieCondo,
  makeNoise, walkInAPark, askAFriend, kevinDialogue, quillCard, sheSaid, cardTiled, cardBroccoli, cardJoe, cardPlate, make3dModels
]