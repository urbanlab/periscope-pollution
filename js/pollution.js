AFRAME.registerComponent('pollution', {
  schema: {
    count: {type: 'int', default: 100 },
    multiplier: {type: 'float', default: 1 }
  },
  init() {
    console.log("hello pollution");

    this.emitterAdded = false;
    this.clock = new THREE.Clock();

    // console.log(this);

    this.emitter = new SPE.Emitter({
      maxAge: {
          value: .5
      },
      position: {
          value: new THREE.Vector3(0, 10, -10),
          spread: new THREE.Vector3( 100, 150, -130 )
      },
      acceleration: {
          value: new THREE.Vector3(0, -1, 0),
          spread: new THREE.Vector3( 10, 0, 10 )
      },
      velocity: {
          value: new THREE.Vector3(0, -1, -1),
          spread: new THREE.Vector3(.2, .5, .10)
      },
      color: {
          value: [ new THREE.Color('gray'), new THREE.Color('black') ]
      },
      size: {
          value: 1
      },
      activeMultiplier: this.data.multiplier,
      particleCount: this.data.count
    });

    this.particleGroup = new SPE.Group({
        texture: {
            value: THREE.ImageUtils.loadTexture('../img/star2.png')
        },
        blending: THREE.AdditiveBlending,
        maxParticleCount : 20000,
        fog: true
    });

    this.el.sceneEl.object3D.add(this.particleGroup.mesh);
    this.particleGroup.addEmitter( this.emitter );


    // catch events
    var self = this;

    this.el.addEventListener('pollutionFadeOut', function () {
      self.fadeOut()
    })

    this.el.addEventListener('pollutionFadeIn', function () {
      self.fadeIn()
    })

  },
  fadeIn() {
    var self = this
    var interval = setInterval(function () {
      self.data.multiplier += .1
      if (self.data.multiplier > 1) {
        self.data.multiplier = 1
        clearInterval(interval)
      }
      self.update()
    }, 300);
  },
  fadeOut() {
    var self = this
    var interval = setInterval(function () {
      self.data.multiplier -= .1
      self.update()
      if (self.data.multiplier < 0) clearInterval(interval)
    }, 300);
  },
  update(oldData) {
    console.log("updated")

    this.emitter.activeMultiplier = this.data.multiplier

  },
  tick() {
      this.particleGroup.tick(this.clock.getDelta());
  }
});
