import { Loader } from "pixi.js";

export const loader = Loader.shared;


export const loadAssets = () => {
  return new Promise((resolve, reject) => {
    try {
      loader
        .add('desk_night', 'assets/desk_night.png')
        .add('ld_pixel_logo', 'assets/ld_pixel_logo.png')
        .add('titleTimerBg', 'assets/titleTimerBg.png')
        .add('avatar', 'assets/avatar.png')
        .add('statFrames', 'assets/statFrames.png')
        .add('avatarStatLabels', 'assets/avatarStatLabels.png')
        .add('card_sleep', 'assets/card_sleep.png')
        .add('card_pixelPractice', 'assets/card_pixelPractice.png')
        .add('card_soundPractice', 'assets/card_soundPractice.png')
        .add('card_levelGen', 'assets/card_levelGen.png')
        .add('card_simplePhysics', 'assets/card_simplePhysics.png')
        .add('card_mechanicsBalancing', 'assets/card_mechanicsBalancing.png')
        .add('card_krazyIdea', 'assets/card_krazyIdea.png')
        .add('another', 'assets/another.png')
        .add('anotherHover', 'assets/anotherHover.png')
        .load(() => {
          resolve()
        })
    } catch (e) {
      console.log(e)
    }
  });
}