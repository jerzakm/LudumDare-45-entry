export class Player {
  name: string
  skills: IPlayerSkills

  constructor(name: string, skills = defaultPlayerSkills()) {
    this.name = name
    this.skills = skills
  }
}


const defaultPlayerSkills = (): IPlayerSkills => {
  return {
    gameDesign: 3,
    coding: 3,
    art: 3,
    sound: 3,
    writing: 3,
    popularity: 3,
    organization: 3
  }
}


/**
 * @interface IPlayerSkills
 * All skills integers from 0 to 10
 */
export interface IPlayerSkills {
  gameDesign: number
  coding: number
  art: number
  sound: number
  writing: number
  popularity: number
  organization: number
}