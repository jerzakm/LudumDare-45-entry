import { Card } from "./cards"
import { player } from "../game"

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
  card.playerSkills.coding += 0.15 * Math.random()
  card.time = 240
  return card
}

export const simplePhysics = () => {
  const card = new Card('card_simplePhysics')
  card.gameStatus.playable = 0.9
  card.playerSkills.coding += 0.05 * Math.random()
  card.time = 30
  return card
}

export const mechanicsBalancing = () => {
  const card = new Card('card_mechanicsBalancing')
  card.gameStatus.playable = 1
  card.gameStatus.fun = Math.floor(Math.random() * 2)
  card.playerSkills.gameDesign += 0.05 * Math.random()
  card.time = 60
  return card
}

export const krazyIdea = () => {
  const card = new Card('card_krazyIdea')
  card.gameStatus.playable = -2.5
  card.gameStatus.fun = Math.floor(Math.random() * 6) + 1
  card.time = 180
  return card
}

export const joinCommunity = () => {
  const card = new Card('card_conference')
  card.playerSkills.coding = Math.random() * 0.3
  card.playerSkills.gameDesign = Math.random() * 0.6
  card.playerSkills.organization = Math.random() * 0.4
  card.playerSkills.popularity = Math.random() * 0.5
  card.time = 0
  return card
}

export const meaningOfLife = () => {
  const card = new Card('card_themeMeaning')
  card.gameStatus.theme = Math.random() ** 2 + 1
  card.gameStatus.innovation = Math.random()
  card.time = 60
  return card
}

export const marieCondo = () => {
  const card = new Card('card_marieCondo')
  card.gameStatus.playable = Math.random()
  card.playerSkills.organization = Math.random() ** 2
  card.time = 30
  return card
}

export const characterArt = () => {
  const card = new Card('card_characterArt')
  card.gameStatus.graphics = 1 + Math.random() ** 2
  card.playerSkills.organization
  card.time = 180
  return card
}

export const happyTrees = () => {
  const card = new Card('card_happyTrees')
  card.gameStatus.graphics = Math.random() * 2
  card.playerSkills.art = Math.random() ** 2
  card.time = 120
  return card
}

//card_characterArt