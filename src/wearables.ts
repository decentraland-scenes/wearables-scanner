import * as cryptoUtils from '../node_modules/decentraland-crypto-utils/avatar/index'
import * as wearables from '../node_modules/decentraland-crypto-utils/wearable/index'

export async function checkWearableCategory(category: Category) {
  let wearablesList = await wearables.getListOfWearables()
  let equipped = await cryptoUtils.equipedItems()

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
