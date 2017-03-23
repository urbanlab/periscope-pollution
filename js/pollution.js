AFRAME.registerComponent('pollution', {
  schema: {
    count: {type: 'int', default: 100 },
    multiplier: {type: 'float', default: 1 }
  },
  init() {

    this.emitterAdded = false;
    this.clock = new THREE.Clock();

    // console.log(this.data.multiplier);
    console.log("hello pollution");
    this.emitter = new SPE.Emitter({
          maxAge: {
              value: 2
          },
  		position: {
              value: new THREE.Vector3(0, 0, -50),
              spread: new THREE.Vector3( 0, 0, 0 )
          },

  		acceleration: {
              value: new THREE.Vector3(0, -10, 0),
              spread: new THREE.Vector3( 10, 0, 10 )
          },

      velocity: {
              value: new THREE.Vector3(0, 25, 0),
              spread: new THREE.Vector3(10, 7.5, 10)
          },

          color: {
              value: [ new THREE.Color('white'), new THREE.Color('red') ]
          },

          size: {
              value: 1
          },
      activeMultiplier: this.data.multiplier,
      particleCount: this.data.count,
      maxAge: 3 //{ value : 3 }
    });

    this.particleGroup = new SPE.Group({
        texture: {
            value: THREE.ImageUtils.loadTexture('../img/star2.png')
        },
        blending: THREE.AdditiveBlending
    });

    this.el.sceneEl.object3D.add(this.particleGroup.mesh);
    this.particleGroup.addEmitter( this.emitter );

  },
  update(oldData) {
    console.log("updated")

    this.emitter.activeMultiplier = this.data.multiplier

  },
  tick() {
      this.particleGroup.tick(this.clock.getDelta());
  }
});
