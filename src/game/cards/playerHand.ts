import { Sprite } from "pixi.js";
import { loader } from "../../core/loader";
import { GameJam } from "../jam/GameJam";
import { cardContainer } from "../ui/uiController";
import { GlowFilter, DropShadowFilter } from 'pixi-filters'
import { gameState, GameState, playCard } from "../game";
import { Vector } from "matter-js";
import { cardHover } from "../sounds/cardSounds";

export const renderPlayerHand = (jam: GameJam) => {
  let i = 0;

  while (i < jam.playerHand.length) {
    const card = jam.playerHand[i]
    const sprite = jam.playerHand[i].sprite
    cardContainer.addChild(sprite)
    sprite.position.x = ((i) * sprite.width * 0.7) + 30 * (i) + 40 + sprite.width / 2
    sprite.anchor.x = 0.5
    sprite.anchor.y = 1
    sprite.zIndex = i

    sprite.filters = [new DropShadowFilter({ blur: 8, alpha: 0.6, distance: 10, rotation: 220 })]

    const oy = 1000
    sprite.position.y = oy
    i++

    sprite.interactive = true
    sprite.buttonMode = true

    let previousZ = 0
    let canResize = true
    sprite.on('pointerover', () => {
      if (sprite.scale.x < 1.5 && canResize) {
        previousZ = sprite.zIndex * 1.0
        sprite.scale.x = 1.3
        sprite.scale.y = 1.3
        sprite.zIndex = 9000
      }
      cardHover.play()
    })
    sprite.on('pointerout', () => {
      sprite.zIndex = previousZ
      cardContainer.sortChildren()
      sprite.scale.x = 1.0
      sprite.scale.y = 1.0
    })

    sprite.on('pointerdown', () => {
      if (gameState == GameState.PLAYING) {
        playCard(card, sprite)
      }
    })
  }
}

export const cardMovementQueue: CardAnim[] = []

export const cardMovementRender = (delta: number) => {
  if (cardMovementQueue.length > 0) {
    const s = cardMovementQueue[0].sprite
    const to = cardMovementQueue[0].to
    let animDone = false
    if (to.position) {
      s.position.x = s.position.x + (to.position.x - s.position.x) / 50
      s.position.y = s.position.y + (to.position.y - s.position.y) / 30
      if ((Math.abs(s.position.x - to.position.x) < 18) && Math.abs(s.position.y - to.position.y) < 18) {
        animDone = true
      }
    }
    if (to.scale) {
      s.scale.x = s.scale.x + (to.scale.x - s.scale.x) / 20
      s.scale.y = s.scale.y + (to.scale.y - s.scale.y) / 20
    }

    if (animDone) {
      s.destroy()
      cardMovementQueue.shift()
    }
  }
}

interface CardAnim {
  sprite: Sprite
  to: CardRenderState
  destroy: boolean
}

interface CardRenderState {
  position?: Vector
  scale?: Vector
}