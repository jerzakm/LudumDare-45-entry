import { GameJam } from "../jam/GameJam";
import { Container, Graphics, Sprite, Text } from "pixi.js";
import { colorScheme, style } from "../style";
import { stage } from "../../core/renderer";
import { loader } from "../../core/loader";
import { player } from "../game";
import { initStatBars } from "./statBars";

export let timeLeftCounter: Text

export const makeGameUi = (jam: GameJam): Container => {
  const gameUi = new Container()

  makeBackground(gameUi)
  makeTitle(gameUi, jam)
  makeTimer(gameUi, jam)
  makeAvatar(gameUi)
  makeStatBarLabels(gameUi)
  initStatBars(gameUi, player.skills, player.status, jam.playerGame)
  stage.addChild(gameUi)
  return gameUi
}

const makeBackground = (container: Container) => {
  const bg = new Graphics()
  bg.beginFill(colorScheme.background)
  bg.drawRect(0, 0, window.innerWidth, window.innerHeight)
  bg.endFill()
  const bgSuper = new Graphics()
  bgSuper.beginFill(colorScheme.background)
  bgSuper.drawRect(window.innerWidth - 600, 0, 600, window.innerHeight)
  bgSuper.endFill()

  const bgImage = Sprite.from(loader.resources['desk_night'].texture)

  const scale = window.innerHeight / bgImage.height
  bgImage.scale.x = scale
  bgImage.scale.y = scale

  container.addChild(bg)
  container.addChild(bgImage)
  container.addChild(bgSuper)
}

const makeTitle = (container: Container, jam: GameJam) => {
  const s = Sprite.from(loader.resources['titleTimerBg'].texture)
  s.scale.x = 2
  s.scale.y = 2
  s.position.x = 20
  s.position.y = 10
  container.addChild(s)



  const ldTheme = new Text(`${jam.theme} `,
    {
      fontSize: 20,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily,
      wordWrapWidth: 400,
      wordWrap: true
    })
  ldTheme.position.y = 50 - ldTheme.height / 2
  ldTheme.position.x = 250 - ldTheme.width / 3
  container.addChild(ldTheme)

  const ldNumber = new Text(`
LD
${jam.number}`,
    {
      fontSize: 36,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily
    })
  ldNumber.position.y = -20
  ldNumber.position.x = 40
  container.addChild(ldNumber)
}

const makeTimer = (container: Container, jam: GameJam) => {
  timeLeftCounter = new Text(`error `,
    {
      fontSize: 26,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily
    })
  timeLeftCounter.position.y = 110
  timeLeftCounter.position.x = 285
  timeLeftCounter.anchor.x = 0.5
  container.addChild(timeLeftCounter)

  const timeLeftText = new Text(`Time Left: `,
    {
      fontSize: 16,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily
    })
  timeLeftText.position.y = 92
  timeLeftText.position.x = 285
  timeLeftText.anchor.x = 0.5
  container.addChild(timeLeftText)

  updateTimeLeftCounter(jam)
}

const makeAvatar = (container: Container) => {
  const avatar = Sprite.from(loader.resources['avatar'].texture)
  avatar.anchor.x = 1.0
  avatar.position.x = window.innerWidth - 20
  avatar.position.y = 20
  container.addChild(avatar)

  const avatarStatLabels = Sprite.from(loader.resources['avatarStatLabels'].texture)
  avatarStatLabels.anchor.x = 0
  avatarStatLabels.position.x = window.innerWidth - 600 + 20
  avatarStatLabels.position.y = 30 + avatar.height / 4
  avatarStatLabels.scale.x = 1.6
  avatarStatLabels.scale.y = 1.6
  container.addChild(avatarStatLabels)

  const timeLeftText = new Text(`${player.name}`,
    {
      fontSize: 30,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily,
      wordWrap: true,
      wordWrapWidth: 300
    })
  timeLeftText.position.y = 50
  timeLeftText.position.x = window.innerWidth - 300
  timeLeftText.anchor.x = 1.0
  container.addChild(timeLeftText)
}

const makeStatBarLabels = (container: Container) => {
  const frame = Sprite.from(loader.resources['statFrames'].texture)
  frame.anchor.x = 1.0
  frame.x = window.innerWidth - 20
  frame.y = 340
  container.addChild(frame)
}

export const updateTimeLeftCounter = (jam: GameJam) => {
  const hours = Math.floor(jam.timer / 60)
  const minutes = jam.timer % 60
  if (timeLeftCounter) {
    timeLeftCounter.text = `${hours} hours${minutes == 0 ? '' : `${minutes} minutes`}`
  }
}