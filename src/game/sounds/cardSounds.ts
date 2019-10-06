import { Howl } from 'howler'

export const cardHover = new Howl({
  src: ['assets/card_hover.wav'],
  volume: 0.3
})

export const statTickSound = new Howl({
  src: ['assets/statTick.wav'],
  volume: 0.1
})

export const cardPlayed = new Howl({
  src: ['assets/card_played.wav'],
  volume: 0.45
})

export const newGameSound = new Howl({
  src: ['assets/newGame.wav'],
  volume: 0.35
})

export const newJamHover = new Howl({
  src: ['assets/newJamHover.wav'],
  volume: 0.35
})

export const theme = new Howl({
  src: ['assets/theme.wav'],
  volume: 0.22,
  loop: true
})

export const releaseSound = new Howl({
  src: ['assets/release.wav'],
  volume: 1.0
})