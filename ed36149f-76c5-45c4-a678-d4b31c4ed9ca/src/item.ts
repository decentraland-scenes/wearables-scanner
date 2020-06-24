export type Props = {
  onClick?: Actions
  onOpen?: Actions
  onClose?: Actions
 onClickText?: string
}

export default class Button implements IScript<Props> {
  openClip = new AudioClip('ed36149f-76c5-45c4-a678-d4b31c4ed9ca/sounds/open.mp3')
  closeClip = new AudioClip('ed36149f-76c5-45c4-a678-d4b31c4ed9ca/sounds/close.mp3')

  active: Record<string, boolean> = {}

  init() {}

  toggle(entity: Entity, value: boolean, playSound = true) {
    if (this.active[entity.name] === value) return

    if (playSound) {
      const source = new AudioSource(value ? this.openClip : this.closeClip)
      entity.addComponentOrReplace(source)
      source.playing = true
    }

    const animator = entity.getComponent(Animator)
    const openClip = animator.getClip('Open')
    const closeClip = animator.getClip('Close')
    openClip.stop()
    closeClip.stop()
    const clip = value ? openClip : closeClip
    clip.play()

    this.active[entity.name] = value
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const door = new Entity(host.name + '-button')
    door.setParent(host)

    const animator = new Animator()
    const closeClip = new AnimationState('Close', { looping: false })
    const openClip = new AnimationState('Open', { looping: false })
    animator.addClip(closeClip)
    animator.addClip(openClip)
    door.addComponent(animator)
    openClip.stop()

    door.addComponent(new GLTFShape('ed36149f-76c5-45c4-a678-d4b31c4ed9ca/models/Door_Fantasy.glb'))

    door.addComponent(
      new OnPointerDown(() => {
        channel.sendActions(props.onClick)
      },
        {
          button: ActionButton.POINTER,
          hoverText: props.onClickText,
          distance: 6
        }))

    this.active[door.name] = false

    // handle actions
    channel.handleAction('open', ({ sender }) => {
	  if(!this.active[door.name]){
		this.toggle(door, true)
	  }    
      if (sender === channel.id) {
        channel.sendActions(props.onOpen)
      }
    })
    channel.handleAction('close', ({ sender }) => {
		if(this.active[door.name]){
			this.toggle(door, false)
		  } 		
      if (sender === channel.id) {
        channel.sendActions(props.onClose)
      }
    })
    channel.handleAction('toggle', ({ sender }) => {
      const newValue = !this.active[door.name]
      this.toggle(door, newValue)
      if (sender === channel.id) {
        channel.sendActions(newValue ? props.onOpen : props.onClose)
      }
    })

    // sync initial values
    channel.request<boolean>('isOpen', isOpen =>
      this.toggle(door, isOpen, false)
    )
    channel.reply<boolean>('isOpen', () => this.active[door.name])
  }
}
