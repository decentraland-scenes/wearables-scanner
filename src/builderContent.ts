import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import Script1 from '../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item'
import Script2 from '../1dc0345a-f5dd-43b6-bf14-30e7752101b4/src/item'

export function buildScene() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  _scene.addComponentOrReplace(transform)

  const cornerStoneBrickWall = new Entity('cornerStoneBrickWall')
  engine.addEntity(cornerStoneBrickWall)
  cornerStoneBrickWall.setParent(_scene)
  const transform2 = new Transform({
    position: new Vector3(14.232542037963867, 0, 10.096558570861816),
    rotation: new Quaternion(
      4.440892627896218e-16,
      0.7071068286895752,
      -8.429369557916289e-8,
      -0.7071068286895752
    ),
    scale: new Vector3(1.0000152587890625, 1, 1.0000152587890625),
  })
  cornerStoneBrickWall.addComponentOrReplace(transform2)
  const gltfShape = new GLTFShape(
    'models/Module_Stone_Curve_01/Module_Stone_Curve_01.glb'
  )
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  cornerStoneBrickWall.addComponentOrReplace(gltfShape)

  const cornerStoneBrickWall2 = new Entity('cornerStoneBrickWall2')
  engine.addEntity(cornerStoneBrickWall2)
  cornerStoneBrickWall2.setParent(_scene)
  cornerStoneBrickWall2.addComponentOrReplace(gltfShape)
  const transform3 = new Transform({
    position: new Vector3(2.5367984771728516, 0, 10.069063186645508),
    rotation: new Quaternion(
      1.693082319850249e-14,
      0.9999898672103882,
      -1.1920805320642103e-7,
      -0.004503994714468718
    ),
    scale: new Vector3(1.0000159740447998, 1, 1.0000159740447998),
  })
  cornerStoneBrickWall2.addComponentOrReplace(transform3)

  const cornerStoneBrickWall3 = new Entity('cornerStoneBrickWall3')
  engine.addEntity(cornerStoneBrickWall3)
  cornerStoneBrickWall3.setParent(_scene)
  cornerStoneBrickWall3.addComponentOrReplace(gltfShape)
  const transform4 = new Transform({
    position: new Vector3(2.5367984771728516, 0, 2.069063186645508),
    rotation: new Quaternion(
      -9.888260508664334e-16,
      0.7071068286895752,
      -8.429368847373553e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.0000181198120117, 1, 1.0000181198120117),
  })
  cornerStoneBrickWall3.addComponentOrReplace(transform4)

  const cornerStoneBrickWall4 = new Entity('cornerStoneBrickWall4')
  engine.addEntity(cornerStoneBrickWall4)
  cornerStoneBrickWall4.setParent(_scene)
  cornerStoneBrickWall4.addComponentOrReplace(gltfShape)
  const transform5 = new Transform({
    position: new Vector3(14.232542037963867, 0, 2.0965585708618164),
    rotation: new Quaternion(
      4.56593745492141e-15,
      0,
      -3.238694636572572e-15,
      -1
    ),
    scale: new Vector3(1.0000114440917969, 1, 1.0000114440917969),
  })
  cornerStoneBrickWall4.addComponentOrReplace(transform5)

  const stoneBrickWall = new Entity('stoneBrickWall')
  engine.addEntity(stoneBrickWall)
  stoneBrickWall.setParent(_scene)
  const transform6 = new Transform({
    position: new Vector3(10.822892189025879, 0, 2.072402000427246),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.122812271118164, 1, 0.9999998807907104),
  })
  stoneBrickWall.addComponentOrReplace(transform6)
  const gltfShape2 = new GLTFShape(
    'models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb'
  )
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  stoneBrickWall.addComponentOrReplace(gltfShape2)

  const stoneBrickThreshold = new Entity('stoneBrickThreshold')
  engine.addEntity(stoneBrickThreshold)
  stoneBrickThreshold.setParent(_scene)
  const transform8 = new Transform({
    position: new Vector3(10.5, 0, 9.413106918334961),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  stoneBrickThreshold.addComponentOrReplace(transform8)
  const gltfShape3 = new GLTFShape(
    'models/Module_Stone_Straight_Door_01/Module_Stone_Straight_Door_01.glb'
  )
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  stoneBrickThreshold.addComponentOrReplace(gltfShape3)

  const towerRoof = new Entity('towerRoof')
  engine.addEntity(towerRoof)
  towerRoof.setParent(_scene)
  const transform9 = new Transform({
    position: new Vector3(
      8.370111465454102,
      3.3169188499450684,
      5.924097061157227
    ),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.67344331741333, 1, 1.2725991010665894),
  })
  towerRoof.addComponentOrReplace(transform9)
  const gltfShape4 = new GLTFShape('models/Roof_01/Roof_01.glb')
  gltfShape4.withCollisions = true
  gltfShape4.isPointerBlocker = true
  gltfShape4.visible = true
  towerRoof.addComponentOrReplace(gltfShape4)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape5 = new GLTFShape(
    'models/FloorFantasyRocks_03/FloorFantasyRocks_03.glb'
  )
  gltfShape5.withCollisions = true
  gltfShape5.isPointerBlocker = true
  gltfShape5.visible = true
  entity.addComponentOrReplace(gltfShape5)
  const transform10 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  entity.addComponentOrReplace(transform10)

  const signpostGolden = new Entity('signpostGolden')
  engine.addEntity(signpostGolden)
  signpostGolden.setParent(_scene)
  const transform11 = new Transform({
    position: new Vector3(6.374037265777588, 0, 3.6893038749694824),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  signpostGolden.addComponentOrReplace(transform11)

  const channelId = Math.random().toString(16).slice(2)
  const channelBus = new MessageBus()

  const script1 = new Script1()
  const script2 = new Script2()
  script1.init()
  script2.init()
  script2.spawn(
    signpostGolden,
    { text: 'VIP Lounge', fontSize: 20 },
    createChannel(channelId, signpostGolden, channelBus)
  )
}
