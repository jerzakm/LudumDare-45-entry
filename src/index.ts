import "../src/_scss/main.scss"
import * as Stats from 'stats.js'
import { renderer, initRenderer, ticker } from "./core/renderer"

initRenderer()

var stats = new Stats.default()
stats.showPanel(0)
document.body.appendChild(stats.dom)


ticker.add((delta) => {
  stats.begin()
  stats.end()
})