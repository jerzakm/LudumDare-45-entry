export class GameJam {
  theme: string
  number: number
  timer: number
  playerGame: PlayerGameStats

  constructor() {
    this.theme = themeSelector()
    this.number = 45
    this.timer = 48 * 60

    this.playerGame = {
      playable: 0,
      fun: 0,
      theme: 0,
      graphics: 0,
      sound: 0,
      innovation: 0
    }
  }
}


const themeSelector = () => {
  return 'Start with nothing'
}


export interface PlayerGameStats {
  playable: number
  fun: number
  theme: number
  graphics: number
  sound: number
  innovation: number
}