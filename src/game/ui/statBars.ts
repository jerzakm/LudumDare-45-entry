import { PlayerSkills, PlayerStatus } from "../player/Player";
import { PlayerGameStats } from "../jam/GameJam";
import { Container, Graphics } from "pixi.js";

const playerStatBarWidth = 200
const skillBarWidth = 330

export let statUpdater: any

export const initStatBars = (container: Container, playerSkills: PlayerSkills, playerStatus: PlayerStatus, playerGameStats: PlayerGameStats) => {
  const g = new Graphics()


  container.addChild(g)

  const update = () => {
    g.clear()
    //PLAYER STATS
    g.beginFill(0xDE76A5)
    g.drawRect(1430, 132, (playerStatus.health / 10) * playerStatBarWidth + 3, 16)

    g.beginFill(0xFCF4D5)
    g.drawRect(1430, 160, (playerStatus.energy / 10) * playerStatBarWidth + 3, 16)

    g.beginFill(0x51C0DA)
    g.drawRect(1430, 188, (playerStatus.mind / 10) * playerStatBarWidth + 3, 16)

    //PLAYER SKILLS
    g.beginFill(0xFC9977)
    g.drawRect(1535, 364, (playerSkills.gameDesign / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xFCBD90)
    g.drawRect(1535, 395, (playerSkills.coding / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xA3D96A)
    g.drawRect(1535, 426, (playerSkills.art / 10) * skillBarWidth + 6, 24)

    g.beginFill(0x57CFC9)
    g.drawRect(1535, 458, (playerSkills.sound / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xFAE6AA)
    g.drawRect(1535, 489, (playerSkills.organization / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xBE57C2)
    g.drawRect(1535, 520, (playerSkills.popularity / 10) * skillBarWidth + 6, 24)

    //GAME STATS
    g.beginFill(0xFC9977)
    g.drawRect(1535, 677, (playerGameStats.playable / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xFCBD90)
    g.drawRect(1535, 677 + (1 * 32), (playerGameStats.fun / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xA3D96A)
    g.drawRect(1535, 677 + (2 * 32), (playerGameStats.theme / 10) * skillBarWidth + 6, 24)

    g.beginFill(0x57CFC9)
    g.drawRect(1535, 677 + (3 * 32), (playerGameStats.graphics / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xFAE6AA)
    g.drawRect(1535, 677 + (4 * 32), (playerGameStats.sound / 10) * skillBarWidth + 6, 24)

    g.beginFill(0xBE57C2)
    g.drawRect(1535, 677 + (5 * 32), (playerGameStats.innovation / 10) * skillBarWidth + 6, 24)
  }
  statUpdater = update
}
