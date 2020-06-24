export default class Door extends Entity {
  openClip = new AudioClip('sounds/open.mp3')
  closeClip = new AudioClip('sounds/close.mp3')
  open: boolean = false

  constructor(
    pos: TranformConstructorArgs,
    messageBus: MessageBus,
    open?: boolean
  ) {
    super()
    this.addComponent(new Transform(pos))
    engine.addEntity(this)

    const animator = new Animator()
    const closeClip = new AnimationState('Close', { looping: false })
    const openClip = new AnimationState('Open', { looping: false })
    animator.addClip(closeClip)
    animator.addClip(openClip)
    this.addComponent(animator)
    openClip.stop()

    this.addComponent(new GLTFShape('models/Door_Fantasy.glb'))

    if (open) {
      this.open = open
    }
  }

  toggle(value: boolean, playSound = true) {
    if (this.open === value) return
    this.open = value

    if (playSound) {
      const source = new AudioSource(value ? this.openClip : this.closeClip)
      this.addComponentOrReplace(source)
      source.playing = true
    }

    const animator = this.getComponent(Animator)
    const openClip = animator.getClip('Open')
    const closeClip = animator.getClip('Close')
    openClip.stop()
    closeClip.stop()
    const clip = value ? openClip : closeClip
    clip.play()
  }
}
