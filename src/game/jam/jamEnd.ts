import { GameJam, PlayerGameStats } from "./GameJam";
import { Player } from "../player/Player";
import { cardContainer } from "../ui/uiController";
import { Container, Graphics, Text, Sprite } from "pixi.js";
import { style } from "../style";
import { loader } from "../../core/loader";
import { soundPractice } from "../cards/cardList";
import { newGameSound, newJamHover, releaseSound } from "../sounds/cardSounds";
import { newGame } from "../game";

export const jamEnd = (jam: GameJam, player: Player, container: Container) => {
  cardContainer.removeChildren()

  player.status.energy = 10
  player.status.health = 10
  player.status.mind = 10

  const g = new Graphics

  g.beginFill(0x574476)
  g.drawRect(0, 0, 1320, 1080)
  g.endFill()

  g.lineStyle(12, 0xFCBD90)
  g.beginFill(0xF9E6A9)
  g.drawRoundedRect(280, 100, 800, 600, 15)
  g.endFill()
  container.addChild(g)


  const timeLeftText = new Text(`Jam is over!`,
    {
      fontSize: 40,
      fontWeight: "bold",
      fill: 0x574476,
      fontFamily: style.fontFamily
    })
  timeLeftText.position.y = 130
  timeLeftText.position.x = 680
  timeLeftText.anchor.x = 0.5
  container.addChild(timeLeftText)

  const anotherBtn = Sprite.from(loader.resources['another'].texture)
  anotherBtn.anchor.x = 0.5
  anotherBtn.anchor.y = 0.5
  anotherBtn.position.x = 680
  anotherBtn.position.y = 610
  anotherBtn.interactive = true
  anotherBtn.buttonMode = true

  anotherBtn.on('pointerover', () => {
    anotherBtn.texture = loader.resources['anotherHover'].texture
    anotherBtn.scale.x = 1.3
    anotherBtn.scale.y = 1.3
    newJamHover.play()
  })

  anotherBtn.on('pointerout', () => {
    anotherBtn.texture = loader.resources['another'].texture
    anotherBtn.scale.x = 1
    anotherBtn.scale.y = 1
  })

  anotherBtn.on('pointerdown', () => {
    newGameSound.play()
    container.removeChildren()
    newGame(jam.number + 1)
  })

  container.addChild(anotherBtn)

  const resolution = jamResolution(player, jam)
  resolution.anchor.x = 0.5
  resolution.position.x = 680
  resolution.position.y = 200
  container.addChild(resolution)

}

const jamResolution = (player: Player, jam: GameJam) => {

  if (jam.releaseReady) {
    releaseSound.play()
  }

  const contestants = Math.floor(Math.random() * 2000 + 500 * player.skills.popularity * Math.random() + 500)

  const gs = jam.playerGame
  const playerScore: JamEndScore = {
    contestants: contestants,
    peopleVoted: Math.max(10, Math.floor(contestants * 0.01 + Math.random() * player.skills.popularity * 10)),
    innovation: Math.min(((player.skills.gameDesign + player.skills.coding) * gs.innovation) / 18, 10),
    fun: (gs.fun + gs.playable) / 2,
    theme: (gs.theme + player.skills.organization) / 2,
    graphics: Math.min((gs.graphics + player.skills.art + player.skills.organization / 2) / 2.2, 10),
    audio: Math.min((gs.sound + player.skills.sound + player.skills.organization / 2) / 2.2, 10),
    humor: Math.min((gs.fun + gs.theme + player.skills.popularity / 5) / 2),
    mood: Math.min(((gs.fun + gs.playable) * player.status.mind / 18)),
    overall: 0,
    released: jam.releaseReady
  }
  playerScore.overall = (playerScore.innovation + playerScore.fun + playerScore.theme + playerScore.graphics + playerScore.audio + playerScore.humor + playerScore.mood) / 7

  const scores = genAndCompareNpcScores(contestants, playerScore)

  const resultString =
    `Congratulations!

You managed to make a game in 48 hours. ${contestants.toFixed(0)} other jammers did so too.

Here are your results:

Innovation:   ${playerScore.innovation.toFixed(1)}  - #${scores.innovation}
Fun:          ${playerScore.fun.toFixed(1)}  - #${scores.fun}
Theme:        ${playerScore.theme.toFixed(1)}  - #${scores.theme}
Graphics:     ${playerScore.graphics.toFixed(1)}  - #${scores.graphics}
Audio:        ${playerScore.audio.toFixed(1)}  - #${scores.audio}
Humor:        ${playerScore.humor.toFixed(1)}  - #${scores.humor}
Mood:         ${playerScore.mood.toFixed(1)}  - #${scores.mood}

OVERALL:      ${playerScore.overall.toFixed(1)}  - #${scores.overall}
`

  const timeLeftText = new Text(jam.releaseReady ? resultString : `You didn't manage to release a playable game. Better luck next time!`,
    {
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x574476,
      fontFamily: style.fontFamily,
      wordWrap: true,
      wordWrapWidth: 600,
    })


  return timeLeftText
}

interface JamEndScore {
  contestants: number
  peopleVoted: number
  innovation: number
  fun: number
  theme: number
  graphics: number
  audio: number
  humor: number
  mood: number
  overall: number
  released: boolean
}

const genAndCompareNpcScores = (qty: number, playerScore: JamEndScore) => {
  const scores: JamEndScore[] = []

  for (let i = 0; i < qty; i++) {
    const gs: PlayerGameStats = {
      fun: Math.random() * 10,
      graphics: Math.random() * 10,
      innovation: Math.random() * 10,
      playable: Math.random() * 10,
      sound: Math.random() * 10,
      theme: Math.random() * 10
    }

    const player = new Player(`npc${i}`)
    player.skills.art = Math.random() * 9
    player.skills.coding = Math.random() * 9
    player.skills.gameDesign = Math.random() * 9
    player.skills.organization = Math.random() * 9
    player.skills.popularity = Math.random() * 9
    player.skills.sound = Math.random() * 9

    player.status.energy = Math.random() * 6
    player.status.health = Math.random() * 6
    player.status.mind = Math.random() * 6
    const playerScore: JamEndScore = {
      contestants: 0,
      peopleVoted: 0,
      innovation: ((player.skills.gameDesign + player.skills.coding) * gs.innovation) / 20,
      fun: (gs.fun + gs.playable) / 2,
      theme: (gs.theme + player.skills.organization) / 2,
      graphics: (gs.graphics + player.skills.art + player.skills.organization / 2) / 2.5,
      audio: (gs.sound + player.skills.sound + player.skills.organization / 2) / 2.5,
      humor: (gs.fun + gs.theme + player.skills.popularity / 5) / 2.2,
      mood: ((gs.fun + gs.playable) * player.status.mind / 19),
      overall: 0,
      released: true
    }
    playerScore.overall = (playerScore.innovation + playerScore.fun + playerScore.theme + playerScore.graphics + playerScore.audio + playerScore.humor + playerScore.mood) / 7

    scores.push(playerScore)
  }


  const playerPlace: JamEndScore = {
    contestants: 0,
    peopleVoted: 0,
    innovation: 0,
    fun: 0,
    theme: 0,
    graphics: 0,
    audio: 0,
    humor: 0,
    mood: 0,
    overall: 0,
    released: playerScore.released,
  }

  scores.push(playerScore)

  scores.sort((a, b) => a.innovation > b.innovation ? -1 : 1)
  playerPlace.innovation = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.fun > b.fun ? -1 : 1)
  playerPlace.fun = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.theme > b.theme ? -1 : 1)
  playerPlace.theme = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.graphics > b.graphics ? -1 : 1)
  playerPlace.graphics = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.audio > b.audio ? -1 : 1)
  playerPlace.audio = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.humor > b.humor ? -1 : 1)
  playerPlace.humor = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.mood > b.mood ? -1 : 1)
  playerPlace.mood = scores.findIndex(o => o == playerScore) + 1

  scores.sort((a, b) => a.overall > b.overall ? -1 : 1)
  playerPlace.overall = scores.findIndex(o => o == playerScore) + 1


  console.log(scores)
  console.log(playerPlace)

  return playerPlace
}