import { Card } from "./cards"

export const cardList = () => {
  const cards: Card[] = []

  const sleep: Card = {
    sprite: 'card_sleep',
    playerStatus: {
      health: 5,
      energy: 10,
      mind: 5
    },
    time: 360
  }
  cards.push(sleep)



  return cards
}