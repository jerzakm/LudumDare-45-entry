import { Card } from "./cards"

export const sleepCard = () => {
  const card = new Card('card_sleep')
  card.playerStatus.health = 5
  card.playerStatus.energy = 10
  card.playerStatus.mind = 5
  card.time = 360
  return card
}

export const pixelPractice = () => {
  const card = new Card('card_pixelPractice')
  card.playerSkills.art = Math.floor(Math.random() * 3)
  return card
}

export const soundPractice = () => {
  const card = new Card('card_soundPractice')
  card.playerSkills.sound = Math.floor(Math.random() * 3)
  return card
}

export const levelProcGen = () => {
  const card = new Card('card_levelGen')
  card.gameStatus.innovation = Math.floor(Math.random() * 2)
  card.gameStatus.playable = Math.floor(Math.random() * 1)
  card.time = 240
  return card
}

export const simplePhysics = () => {
  const card = new Card('card_simplePhysics')
  card.gameStatus.playable = 1
  card.time = 30
  return card
}

export const mechanicsBalancing = () => {
  const card = new Card('card_mechanicsBalancing')
  card.gameStatus.playable = 1
  card.gameStatus.fun = Math.floor(Math.random() * 2)
  card.time = 60
  return card
}

export const krazyIdea = () => {
  const card = new Card('card_krazyIdea')
  card.gameStatus.playable = -2
  card.gameStatus.fun = Math.floor(Math.random() * 8) + 1
  card.time = 180
  return card
}
