import "../src/_scss/main.scss"
import * as Stats from 'stats.js'
import { renderer, initRenderer, ticker } from "./core/renderer"
import { loadAssets } from "./core/loader"
import { startGame, newGame } from "./game/game"
import { theme } from "./game/sounds/cardSounds"
import { stageScale } from "./game/ui/uiController"



const initialize = async () => {
  var stats = new Stats.default()
  stats.showPanel(0)
  // document.body.appendChild(stats.dom)
  initRenderer()
  await loadAssets()
  const game = startGame()
  theme.play()

  ticker.add((delta) => {
    stats.begin()
    game.gameLoop(delta)
    game.renderLoop(delta)
    stats.end()
  })

  window.onresize = stageScale
}
initialize()