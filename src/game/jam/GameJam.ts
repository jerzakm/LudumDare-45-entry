export class GameJam {
  theme: string
  timer: number

  constructor() {
    this.theme = themeSelector()
    this.timer = 48 * 60
  }
}


const themeSelector = () => {
  return 'Random game jam theme!'
}