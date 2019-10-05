import { Card } from "../cards/cards"

export class Player {
  name: string
  skills: PlayerSkills
  status: PlayerStatus


  constructor(name: string, skills = defaultPlayerSkills()) {
    this.name = name
    this.skills = skills
    this.status = {
      health: 10,
      energy: 10,
      mind: 10
    }
  }
}


const defaultPlayerSkills = (): PlayerSkills => {
  return {
    gameDesign: 0,
    coding: 0,
    art: 0,
    sound: 0,
    popularity: 0,
    organization: 0
  }
}


/**
 * @interface IPlayerSkills
 * All skills integers from 0 to 10
 */
export interface PlayerSkills {
  gameDesign: number
  coding: number
  art: number
  sound: number
  popularity: number
  organization: number
}

export interface PlayerStatus {
  health: number
  energy: number
  mind: number
}