AFRAME.registerComponent('pollution', {
  schema: {
    count: {type: 'int', default: 100 },
    multiplier: {type: 'float', default: 1 },
    speed: {type: 'float', default: .05 }
  },
  init() {
    console.log("hello pollution");

    // console.log(this);

    var loader1 = new THREE.TextureLoader();
    var loader2 = new THREE.TextureLoader();
    var loader3 = new THREE.TextureLoader();
    var loader4 = new THREE.TextureLoader();

    this.clocks = [
      new THREE.Clock(),
      new THREE.Clock(),
      new THREE.Clock(),
      new THREE.Clock()
    ];

    // console.log(this);

    this.particleGroups = [
      new SPE.Group({
          texture: {
              value: loader1.load('./img/11.png?123')
          },
          // blending: THREE.AdditiveBlending,
          maxParticleCount : 10000,
          colorize :false
          // fog: true
      }),

      new SPE.Group({
          texture: {
              value: loader2.load('./img/12.png?123')
          },
          // blending: THREE.AdditiveBlending,
          colorize :false,
          maxParticleCount : 10000
          // fog: true
      }),

      new SPE.Group({
          texture: {
              value: loader3.load('./img/2.png?123')
          },
          // blending: THREE.AdditiveBlending,
          colorize :false,
          maxParticleCount : 10000
          // fog: true
      }),

      new SPE.Group({
          texture: {
              value: loader4.load('./img/4.png?123')
          },
          // blending: THREE.AdditiveBlending,
          colorize :false,
          maxParticleCount : 10000
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
      // opacity: {
      //     value: [ 1, 1, 0 ]
      // },
      color: {
          value: [ new THREE.Color(0xFF0000), new THREE.Color(0xFF0000) ]
      },
      size: {
          value: 0.5
      },
      activeMultiplier: this.data.multiplier,
      particleCount: this.data.count
    }

    this.emitters = [
      new SPE.Emitter(emitterSettings),
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
  // fadeIn() {
  //   var self = this
  //   var sceneEl = document.getElementById("sceneRoom")
  //   var interval = setInterval(function () {
  //     self.data.multiplier += self.data.speed
  //     console.log(self.data.multiplier);
  //     if (self.data.multiplier >= 1) {
  //       self.data.multiplier = 1
  //       clearInterval(interval)
  //       console.log(self);
  //       sceneEl.emit('pollutionReady');
  //     }
  //     self.update()
  //   }, 500);
  // },
  // fadeOut() {
  //   var self = this
  //   var sceneEl = document.getElementById("sceneRoom")
  //   var interval = setInterval(function () {
  //     self.data.multiplier -= 0.1
  //     if (self.data.multiplier < .2) {
  //       clearInterval(interval)
  //       sceneEl.emit('pollutionFinished');
  //     }
  //     self.update()
  //   }, 500);
  // },
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
