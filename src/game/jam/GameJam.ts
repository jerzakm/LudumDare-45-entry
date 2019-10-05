import { Card } from "../cards/cards"
import { jamNameList } from "./jamNameList"

export class GameJam {
  theme: string
  number: number
  timer: number
  playerGame: PlayerGameStats
  playerHand: Card[]
  playedCards: Card[]
  practiceRound = 5


  constructor(number = 45) {
    this.theme = this.selectTheme()
    this.number = number
    this.timer = 48 * 60

    this.playerGame = {
      playable: 0,
      fun: 0,
      theme: 0,
      graphics: 0,
      sound: 0,
      innovation: 0
    }

    this.playerHand = []
    this.playedCards = []
  }

  private selectTheme = () => {
    let theme = 'Start with nothing'

    if (this.number > 45) {
      theme = jamNameList[Math.floor(Math.random() * jamNameList.length)]
    }
    return theme
  }
}


export interface PlayerGameStats {
  playable: number
  fun: number
  theme: number
  graphics: number
  sound: number
  innovation: number
}