import { Loader } from "pixi.js";

export const loader = Loader.shared;


export const loadAssets = () => {
  return new Promise((resolve, reject) => {
    try {
      loader
        .add('desk_night', 'assets/desk_night.png')
        .add('ld_pixel_logo', 'assets/ld_pixel_logo.png')
        .load(() => {
          resolve()
        })
    } catch (e) {
      console.log(e)
    }
  });
}