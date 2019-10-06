import { Howl } from 'howler'

export const cardHover = new Howl({
  src: ['assets/card_hover.wav'],
  volume: 0.3
})

export const cardPlayed = new Howl({
  src: ['assets/card_played.wav'],
  volume: 0.5
})

export const newGameSound = new Howl({
  src: ['assets/newGame.wav'],
  volume: 0.5
})

export const newJamHover = new Howl({
  src: ['assets/newJamHover.wav'],
  volume: 0.5
})

export const theme = new Howl({
  src: ['assets/theme.wav'],
  volume: 0.0,
  loop: true
})