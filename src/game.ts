import { Category } from './wearables'
import utils from '../node_modules/decentraland-ecs-utils/index'
import { WearablesScanner } from './scanner'
import { buildScene } from './builderContent'
import Door from './door'

export let sceneMessageBus = new MessageBus()

buildScene()

const door = new Door(
  {
    position: new Vector3(9.275432586669922, 0, 9.929542541503906),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  },
  sceneMessageBus
)

let scanner = new WearablesScanner(
  { position: new Vector3(7, 0, 11) },
  Category.Eyewear,
  sceneMessageBus,
  () => {
    sceneMessageBus.emit('openDoor', {})
    door.addComponentOrReplace(
      new utils.Delay(5000, () => {
        sceneMessageBus.emit('closeDoor', {})
      })
    )
  },
  () => {
    sceneMessageBus.emit('closeDoor', {})
  }
)

sceneMessageBus.on('scanning', () => {
  scanner.scan()
})

sceneMessageBus.on('scanapprove', () => {
  scanner.approve()
})

sceneMessageBus.on('scanreject', () => {
  scanner.reject()
})
