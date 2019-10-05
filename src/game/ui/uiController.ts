import { GameJam } from "../jam/GameJam";
import { Container, Graphics, Sprite, Text } from "pixi.js";
import { colorScheme, style } from "../style";
import { stage } from "../../core/renderer";
import { loader } from "../../core/loader";

export let timeLeftCounter: Text

export const makeGameUi = (jam: GameJam): Container => {
  const gameUi = new Container()

  makeBackground(gameUi)
  makeTitle(gameUi, jam)
  makeTimer(gameUi, jam)
  makeAvatar(gameUi)
  stage.addChild(gameUi)
  return gameUi
}

const makeBackground = (container: Container) => {
  const bg = new Graphics()
  bg.beginFill(colorScheme.background)
  bg.drawRect(0, 0, window.innerWidth, window.innerHeight)
  bg.endFill()

  const bgImage = Sprite.from(loader.resources['desk_night'].texture)

  const scale = window.innerHeight / bgImage.height
  bgImage.scale.x = scale
  bgImage.scale.y = scale

  container.addChild(bg)
  container.addChild(bgImage)
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
  timeLeftCounter = new Text(`23h 30min `,
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
}

export const updateTimeLeftCounter = (jam: GameJam) => {
  const hours = Math.floor(jam.timer / 60)
  const minutes = jam.timer % 60
  if (timeLeftCounter) {
    timeLeftCounter.text = `${hours} hours${minutes == 0 ? '' : `${minutes} minutes`}`
  }
}