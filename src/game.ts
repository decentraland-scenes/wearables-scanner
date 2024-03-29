import * as utils from '@dcl/ecs-scene-utils'
import { WearablesScanner } from './scanner'
import { buildScene } from './builderContent'
import Door from './door'

export const sceneMessageBus = new MessageBus()

buildScene()

const door = new Door(
  new GLTFShape('models/Door_Fantasy.glb'),
  {
    position: new Vector3(9.275432586669922, 0, 9.929542541503906),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  },
  'Open',
  'Close'
)

const scanner = new WearablesScanner(
  { position: new Vector3(7, 0, 11) },
  'urn:decentraland:off-chain:base-avatars:thug_life',
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

sceneMessageBus.on('openDoor', () => {
  if (!door.isOpen) {
    door.toggle(true)
  }
})
sceneMessageBus.on('closeDoor', () => {
  if (door.isOpen) {
    door.toggle(false)
  }
})
