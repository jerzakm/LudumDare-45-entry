import { PlayerSkills, PlayerStatus } from "../player/Player";
import { PlayerGameStats } from "../jam/GameJam";
import { Container, Graphics } from "pixi.js";
import { cardHover, statTickSound } from "../sounds/cardSounds";

const playerStatBarWidth = 200
const skillBarWidth = 330

export let statUpdater: any

export const initStatBars = (container: Container, playerSkills: PlayerSkills, playerStatus: PlayerStatus, playerGameStats: PlayerGameStats) => {
  const g = new Graphics()


  container.addChild(g)

  let currentBarState = {
    playerSkills: {
      gameDesign: 0,
      coding: 0,
      art: 0,
      sound: 0,
      organization: 0,
      popularity: 0
    },
    playerStatus: {
      health: 0,
      energy: 0,
      mind: 0
    },
    playerGameStats: {
      playable: 0,
      fun: 0,
      theme: 0,
      graphics: 0,
      sound: 0,
      innovation: 0
    }
  }

  let lastSound = 0

  const update = (delta: number) => {
    g.clear()

    const diffList = []

    const growthDivider = 50

    // const copyDiv = playerStatus.energy - currentBarState.playerStatus.energy
    // diffList.push(copyDiv)
    // copyDiv < 0.1 ? currentBarState.playerStatus.energy : false
    // copyDiv != 0 ? currentBarState.playerStatus.energy += copyDiv / growthDivider : false

    //PLAYER STATS
    const healthDiff = playerStatus.health - currentBarState.playerStatus.health
    diffList.push(healthDiff)
    healthDiff < 0.1 ? currentBarState.playerStatus.health : false
    healthDiff != 0 ? currentBarState.playerStatus.health += healthDiff / growthDivider : false
    g.beginFill(0xDE76A5)
    g.drawRect(1430, 132, (currentBarState.playerStatus.health / 10) * playerStatBarWidth + 3, 16)

    const energyDiff = playerStatus.energy - currentBarState.playerStatus.energy
    diffList.push(energyDiff)
    energyDiff < 0.1 ? currentBarState.playerStatus.energy : false
    energyDiff != 0 ? currentBarState.playerStatus.energy += energyDiff / growthDivider : false
    g.beginFill(0xFCF4D5)
    g.drawRect(1430, 160, (currentBarState.playerStatus.energy / 10) * playerStatBarWidth + 3, 16)

    const mindDiv = playerStatus.mind - currentBarState.playerStatus.mind
    diffList.push(mindDiv)
    mindDiv < 0.1 ? currentBarState.playerStatus.mind : false
    mindDiv != 0 ? currentBarState.playerStatus.mind += mindDiv / growthDivider : false
    g.beginFill(0x51C0DA)
    g.drawRect(1430, 188, (currentBarState.playerStatus.mind / 10) * playerStatBarWidth + 3, 16)

    //PLAYER SKILLS
    const gdDiff = playerSkills.gameDesign - currentBarState.playerSkills.gameDesign
    diffList.push(gdDiff)
    gdDiff < 0.1 ? currentBarState.playerSkills.gameDesign : false
    gdDiff != 0 ? currentBarState.playerSkills.gameDesign += gdDiff / growthDivider : false
    g.beginFill(0xFC9977)
    g.drawRect(1535, 364, (currentBarState.playerSkills.gameDesign / 10) * skillBarWidth + 6, 24)


    const codingDiff = playerSkills.coding - currentBarState.playerSkills.coding
    diffList.push(codingDiff)
    codingDiff < 0.1 ? currentBarState.playerSkills.coding : false
    codingDiff != 0 ? currentBarState.playerSkills.coding += codingDiff / growthDivider : false
    g.beginFill(0xFCBD90)
    g.drawRect(1535, 395, (currentBarState.playerSkills.coding / 10) * skillBarWidth + 6, 24)

    const artDiff = playerSkills.art - currentBarState.playerSkills.art
    diffList.push(artDiff)
    artDiff < 0.1 ? currentBarState.playerSkills.art : false
    artDiff != 0 ? currentBarState.playerSkills.art += artDiff / growthDivider : false
    g.beginFill(0xA3D96A)
    g.drawRect(1535, 426, (currentBarState.playerSkills.art / 10) * skillBarWidth + 6, 24)

    const soundDiff = playerSkills.sound - currentBarState.playerSkills.sound
    diffList.push(soundDiff)
    soundDiff < 0.1 ? currentBarState.playerSkills.sound : false
    soundDiff != 0 ? currentBarState.playerSkills.sound += soundDiff / growthDivider : false
    g.beginFill(0x57CFC9)
    g.drawRect(1535, 458, (currentBarState.playerSkills.sound / 10) * skillBarWidth + 6, 24)

    const orgDiff = playerSkills.organization - currentBarState.playerSkills.organization
    diffList.push(orgDiff)
    orgDiff < 0.1 ? currentBarState.playerSkills.organization : false
    orgDiff != 0 ? currentBarState.playerSkills.organization += orgDiff / growthDivider : false
    g.beginFill(0xFAE6AA)
    g.drawRect(1535, 489, (currentBarState.playerSkills.organization / 10) * skillBarWidth + 6, 24)

    const popDiff = playerSkills.popularity - currentBarState.playerSkills.popularity
    diffList.push(popDiff)
    popDiff < 0.1 ? currentBarState.playerSkills.popularity : false
    popDiff != 0 ? currentBarState.playerSkills.popularity += popDiff / growthDivider : false
    g.beginFill(0xBE57C2)
    g.drawRect(1535, 520, (currentBarState.playerSkills.popularity / 10) * skillBarWidth + 6, 24)

    //GAME STATS

    const playableDiff = playerGameStats.playable - currentBarState.playerGameStats.playable
    diffList.push(playableDiff)
    playableDiff < 0.1 ? currentBarState.playerGameStats.playable : false
    playableDiff != 0 ? currentBarState.playerGameStats.playable += playableDiff / growthDivider : false
    g.beginFill(0xFC9977)
    g.drawRect(1535, 677, (currentBarState.playerGameStats.playable / 10) * skillBarWidth + 6, 24)

    const funDiff = playerGameStats.fun - currentBarState.playerGameStats.fun
    diffList.push(funDiff)
    funDiff < 0.1 ? currentBarState.playerGameStats.fun : false
    funDiff != 0 ? currentBarState.playerGameStats.fun += funDiff / growthDivider : false
    g.beginFill(0xFCBD90)
    g.drawRect(1535, 677 + (1 * 32), (currentBarState.playerGameStats.fun / 10) * skillBarWidth + 6, 24)

    const themeDiff = playerGameStats.theme - currentBarState.playerGameStats.theme
    diffList.push(themeDiff)
    themeDiff < 0.1 ? currentBarState.playerGameStats.theme : false
    themeDiff != 0 ? currentBarState.playerGameStats.theme += themeDiff / growthDivider : false
    g.beginFill(0xA3D96A)
    g.drawRect(1535, 677 + (2 * 32), (currentBarState.playerGameStats.theme / 10) * skillBarWidth + 6, 24)

    const graphDiff = playerGameStats.graphics - currentBarState.playerGameStats.graphics
    diffList.push(graphDiff)
    graphDiff < 0.1 ? currentBarState.playerGameStats.graphics : false
    graphDiff != 0 ? currentBarState.playerGameStats.graphics += graphDiff / growthDivider : false
    g.beginFill(0x57CFC9)
    g.drawRect(1535, 677 + (3 * 32), (currentBarState.playerGameStats.graphics / 10) * skillBarWidth + 6, 24)

    const gameSoundDiff = playerGameStats.sound - currentBarState.playerGameStats.sound
    diffList.push(gameSoundDiff)
    gameSoundDiff < 0.1 ? currentBarState.playerGameStats.sound : false
    gameSoundDiff != 0 ? currentBarState.playerGameStats.sound += gameSoundDiff / growthDivider : false
    g.beginFill(0xFAE6AA)
    g.drawRect(1535, 677 + (4 * 32), (currentBarState.playerGameStats.sound / 10) * skillBarWidth + 6, 24)

    const innovationDiff = playerGameStats.innovation - currentBarState.playerGameStats.innovation
    diffList.push(innovationDiff)
    innovationDiff < 0.1 ? currentBarState.playerGameStats.innovation : false
    innovationDiff != 0 ? currentBarState.playerGameStats.innovation += innovationDiff / growthDivider : false
    g.beginFill(0xBE57C2)
    g.drawRect(1535, 677 + (5 * 32), (currentBarState.playerGameStats.innovation / 10) * skillBarWidth + 6, 24)


    lastSound += delta
    let playsound = false
    diffList.map(d => Math.abs(d) > 0.2 ? playsound = true : null)
    if (playsound && lastSound > 3) {
      statTickSound.play()
      lastSound = 0
    }
  }
  statUpdater = update
}
