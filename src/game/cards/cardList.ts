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

export const makeNoise = () => {
  const card = new Card('card_makeNoise')
  card.gameStatus.sound = Math.random()
  card.playerSkills.sound = Math.random() ** 4
  card.time = 60
  return card
}

export const walkInAPark = () => {
  const card = new Card('card_walkInAPark')
  card.playerStatus.mind = 2 + Math.random() * 2
  card.gameStatus.theme = (Math.random() ** 1.5) * 3
  card.playerSkills.organization = Math.random() * 0.5
  card.time = 60
  return card
}

export const askAFriend = () => {
  const card = new Card('card_askFriend')
  card.gameStatus.theme = Math.random() * 2
  card.playerSkills.popularity = Math.random() * 0.2
  card.playerStatus.mind = Math.random() * 0.4
  card.time = 60
  return card
}

export const make3dModels = () => {
  const card = new Card('card_3dModel')
  card.gameStatus.graphics = (Math.random() ** 2) * 2
  card.playerSkills.art = Math.random() * 0.2
  card.time = 120
  return card
}

export const takeANap = () => {
  const card = new Card('card_nap')
  card.playerStatus.energy = Math.random() * 3
  card.playerStatus.health = Math.random() * 3
  card.time = 30 + (Math.floor(Math.random() * 3) * 30)
  return card
}

export const cardJoe = () => {
  const card = new Card('card_joe')
  card.playerStatus.energy = 1
  card.time = 30
  return card
}

export const kevinDialogue = () => {
  const card = new Card('card_kevinDialogue')
  card.gameStatus.playable = Math.random()
  card.gameStatus.fun = Math.random()
  card.playerSkills.popularity = 0.1
  card.playerSkills.gameDesign = 0.1
  card.time = 60
  return card
}

export const cowbell = () => {
  const card = new Card('card_cowbell')
  card.gameStatus.sound = Math.random() * 2
  card.playerSkills.sound = 0.1
  card.time = 60
  return card
}

export const quillCard = () => {
  const card = new Card('card_quill')
  card.playerSkills.popularity = Math.random()
  card.time = 60
  return card
}

export const sheSaid = () => {
  const card = new Card('card_quill')
  card.gameStatus.fun = Math.random() > 0.5 ? Math.random() * 3 : Math.random() * -2
  card.playerSkills.gameDesign = 0.05
  card.playerSkills.popularity = 0.05
  card.playerStatus.mind = 1
  card.time = 60
  return card
}

export const cardTiled = () => {
  const card = new Card('card_quill')
  card.playerSkills.gameDesign = Math.random() * 0.3
  card.gameStatus.graphics = Math.random()
  card.gameStatus.playable = Math.random() * 2
  card.time = 120
  return card
}

export const cardRelease = () => {
  const card = new Card('card_quill')
  card.gameStatus.playable = Math.random()
  card.time = 30
  card.release = true
  return card
}

//card_tiled