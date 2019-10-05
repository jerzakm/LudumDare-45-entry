import { PlayerStatus, PlayerSkills } from "../player/Player";
import { PlayerGameStats } from "../jam/GameJam";

interface Card {
  sprite: string
  playerStatus: PlayerStatus
  playerSkills: PlayerSkills
  gameStatus: PlayerGameStats
  time: number
  prompts?: string[]
}