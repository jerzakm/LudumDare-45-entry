import { GameJam } from "./GameJam";
import { Player } from "../player/Player";
import { cardContainer } from "../ui/uiController";
import { Container, Graphics, Text, Sprite } from "pixi.js";
import { style } from "../style";
import { loader } from "../../core/loader";
import { soundPractice } from "../cards/cardList";
import { newGameSound, newJamHover } from "../sounds/cardSounds";
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
}