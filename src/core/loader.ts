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
        .add('another', 'assets/another.png')
        .add('anotherHover', 'assets/anotherHover.png')
        .add('card_sleep', 'assets/card_sleep.png')
        .add('card_pixelPractice', 'assets/card_pixelPractice.png')
        .add('card_soundPractice', 'assets/card_soundPractice.png')
        .add('card_levelGen', 'assets/card_levelGen.png')
        .add('card_simplePhysics', 'assets/card_simplePhysics.png')
        .add('card_mechanicsBalancing', 'assets/card_mechanicsBalancing.png')
        .add('card_krazyIdea', 'assets/card_krazyIdea.png')
        .add('card_conference', 'assets/card_conference.png')
        .add('card_themeMeaning', 'assets/card_themeMeaning.png')
        .add('card_marieCondo', 'assets/card_marieCondo.png')
        .add('card_characterArt', 'assets/card_characterArt.png')
        .add('card_happyTrees', 'assets/card_happyTrees.png')
        .add('card_makeNoise', 'assets/card_makeNoise.png')
        .add('card_walkInAPark', 'assets/card_walkInAPark.png')
        .add('card_askFriend', 'assets/card_askFriend.png')
        .add('card_3dModel', 'assets/card_3dModel.png')
        .add('card_nap', 'assets/card_nap.png')
        .add('card_joe', 'assets/card_joe.png')
        .add('card_kevinDialogue', 'assets/card_kevinDialogue.png')
        .add('card_cowbell', 'assets/card_cowbell.png')
        .add('card_quill', 'assets/card_quill.png')
        .add('card_sheSaid', 'assets/card_sheSaid.png')
        .add('card_tiled', 'assets/card_tiled.png')
        .add('card_release', 'assets/card_release.png')
        .add('card_broccoli', 'assets/card_broccoli.png')
        .add('card_ldCommunity', 'assets/card_ldCommunity.png')
        .add('card_plate', 'assets/card_plate.png')
        .load(() => {
          resolve()
        })
    } catch (e) {
      console.log(e)
    }
  });
}