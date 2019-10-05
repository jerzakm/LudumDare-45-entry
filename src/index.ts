import "../src/_scss/main.scss"
import * as Stats from 'stats.js'
import { renderer, initRenderer, ticker } from "./core/renderer"
import { loadAssets } from "./core/loader"
import { startGame } from "./game/game"



const initialize = async () => {
  var stats = new Stats.default()
  stats.showPanel(0)
  document.body.appendChild(stats.dom)
  initRenderer()
  await loadAssets()
  const game = startGame()

  ticker.add((delta) => {
    stats.begin()
    game.gameLoop(delta)
    game.renderLoop(delta)
    stats.end()
  })
}

initialize()