import { Container, Sprite, Graphics, Text } from "pixi.js"
import { loader } from "../core/loader"
import { stage } from "../core/renderer"
import { menuColors, style } from "./style"
import { newGame } from "./game"

export const initMenu = () => {
  const container = new Container()
  showMenuContent(container)
  stage.addChild(container)

  return container
}

const showMenuContent = (container: Container) => {
  const logo = Sprite.from(loader.resources['ld_pixel_logo'].texture)
  logo.anchor.x = 0.5
  logo.position.x = window.innerWidth / 2
  logo.position.y = 120
  logo.scale.x = 5
  logo.scale.y = 5

  const g = new Graphics()
  g.beginFill(menuColors.primaryLight)
  g.drawRect(0, 0, window.innerWidth, window.innerHeight)
  g.endFill()

  const padding = 40

  const menuBgWidth = logo.width + padding * 2

  g.beginFill(menuColors.primary)
  g.drawRect(
    logo.position.x - logo.width / 2 - padding,
    logo.position.y - padding,
    menuBgWidth,
    window.innerHeight - logo.position.y * 2 + padding)
  g.endFill()

  const subtitle = new Text('game making simulator', { fontSize: 20, fill: 0xFFFFFF, fontFamily: style.fontFamily })
  subtitle.anchor.x = 0.5
  subtitle.position.x = window.innerWidth / 2
  subtitle.position.y = logo.position.y + logo.height + padding / 3

  const description = new Text(
    `
You are an aspiring game maker, teeming with energy and enthusiasm.

You think you're ready to test yourself and show the world how to make games, but do you have what it takes to make it?

You may have never made a game before, but you're ready to show the world what you're made of.
`,
    {
      fontSize: 24,
      fill: 0xFFFFFF,
      fontFamily: style.fontFamily,
      wordWrap: true,
      wordWrapWidth: menuBgWidth - padding * 2,
      align: 'center'
    })
  description.anchor.x = 0.5
  description.position.x = window.innerWidth / 2
  description.position.y = subtitle.position.y + padding * 2


  const startBtnContainer = new Container()

  const startBtn = new Graphics()
  startBtn.beginFill(menuColors.secondary)
  startBtn.drawRoundedRect(
    0,
    description.position.y + description.height + 60,
    menuBgWidth / 2,
    80,
    30)
  startBtn.endFill()
  startBtn.position.x = window.innerWidth / 2 - menuBgWidth / 4

  const start = new Text(`START`,
    {
      fontSize: 44,
      fontWeight: "bold",
      fill: 0x000000,
      fontFamily: style.fontFamily,
      wordWrap: true,
      wordWrapWidth: menuBgWidth - padding * 2,
      align: 'center'
    })
  start.anchor.x = 0.5
  start.position.x = window.innerWidth / 2
  start.position.y = description.position.y + description.height + 60 + 20

  startBtnContainer.interactive = true
  startBtnContainer.buttonMode = true

  startBtnContainer.on('pointerdown', () => {
    newGame()
  })

  container.addChild(g)
  container.addChild(logo)
  container.addChild(subtitle)
  container.addChild(description)
  startBtnContainer.addChild(startBtn)
  startBtnContainer.addChild(start)
  container.addChild(startBtnContainer)
}
