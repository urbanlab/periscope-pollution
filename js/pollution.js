AFRAME.registerComponent('pollution', {
  schema: {
    count: {type: 'int', default: 100 },
    multiplier: {type: 'float', default: 1 },
    speed: {type: 'float', default: .05 }
  },
  init() {
    console.log("hello pollution");

    this.clocks = [
      new THREE.Clock(),
      new THREE.Clock(),
      new THREE.Clock()
    ];

    // console.log(this);

    this.particleGroups = [
      new SPE.Group({
          texture: {
              value: THREE.ImageUtils.loadTexture('./img/particule-cov.png?123')
          },
          // blending: THREE.AdditiveBlending,
          maxParticleCount : 10000
          // fog: true
      }),

      new SPE.Group({
          texture: {
              value: THREE.ImageUtils.loadTexture('./img/particule-fine.png?123')
          },
          // blending: THREE.AdditiveBlending,
          maxParticleCount : 5000
          // fog: true
      }),

      new SPE.Group({
          texture: {
              value: THREE.ImageUtils.loadTexture('./img/particule-dioxydedazote.png?123')
          },
          // blending: THREE.AdditiveBlending,
          maxParticleCount : 5000
          // fog: true
      })
    ];

    var emitterSettings = {
      maxAge: {
          value: 3
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
      // color: {
      //     value: [ new THREE.Color('white'), new THREE.Color("hsl(0, 10%, 10%)") ]
      // },
      size: {
          value: 1
      },
      activeMultiplier: this.data.multiplier,
      particleCount: this.data.count
    }

    this.emitters = [
      new SPE.Emitter(emitterSettings),
      new SPE.Emitter(emitterSettings),
      new SPE.Emitter(emitterSettings)
    ];

    for (var i = 0; i < this.particleGroups.length; i++) {
      this.el.sceneEl.object3D.add(this.particleGroups[i].mesh);
      this.particleGroups[i].addEmitter( this.emitters[i] );
    }

    // catch events
    var self = this;

    this.el.addEventListener('pollutionFadeOut', function () {
      self.fadeOut()
    })

    this.el.addEventListener('pollutionFadeIn', function () {
      self.fadeIn(3000)
    })

  },
  fadeIn() {
    var self = this
    var interval = setInterval(function () {
      self.data.multiplier += self.data.speed

      if (self.data.multiplier > 1) {
        self.data.multiplier = 1
        clearInterval(interval)
        self.el.emit('pollutionReady');
      }
      self.update()
    }, 500);
  },
  fadeOut() {
    var self = this
    var interval = setInterval(function () {
      self.data.multiplier -= self.data.speed
      if (self.data.multiplier < 0) {
        clearInterval(interval)
        self.el.emit('pollutionFinished');
      }
      self.update()
    }, 500);
  },
  update(oldData) {
    console.log("updated")

    for (var i = 0; i < this.emitters.length; i++) {
      this.emitters[i].activeMultiplier = this.data.multiplier
    }

  },
  tick() {
    for (var i = 0; i < this.particleGroups.length; i++) {
      this.particleGroups[i].tick(this.clocks[i].getDelta());
    }
  }
});
