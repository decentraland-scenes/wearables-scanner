import * as crypto from '@dcl/crypto-scene-utils'

export async function checkWearableCategory(category: Category) {
  let wearablesList = await crypto.wearable.getListOfWearables()
  let equipped = await crypto.avatar.equipedItems()

  log(wearablesList, equipped)

  for (let item of equipped) {
    for (let wearablesCollection of wearablesList) {
      for (let wearable of wearablesCollection.wearables) {
        if (item === wearable.id) {
          if (wearable.category == category) {
            log('found matching wearable! ', item)
            return true
          } else {
            continue
          }
        }
      }
    }
  }
  log('no matching wearables')
  return false
}

export enum Category {
  BodyShape = 'body_shape',
  Earring = 'earring',
  Empty = '',
  Eyebrows = 'eyebrows',
  Eyes = 'eyes',
  Eyewear = 'eyewear',
  FacialHair = 'facial_hair',
  Feet = 'feet',
  Hair = 'hair',
  Hat = 'hat',
  Head = 'head',
  Helmet = 'helmet',
  LowerBody = 'lower_body',
  Mask = 'mask',
  Mouth = 'mouth',
  Tiara = 'tiara',
  TopHead = 'top_head',
  UpperBody = 'upper_body',
}
