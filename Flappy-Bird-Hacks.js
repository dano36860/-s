javascript:(function() {

  function loadSweetAlert() {
    return new Promise((resolve, reject) => {
      if (typeof Swal !== 'undefined') {
        resolve(Swal);
        return;
      }

      let bird;

if (typeof Bird === 'function') {
    bird = Bird;
  }

      const styleEl = document.createElement('link');
      styleEl.rel = 'stylesheet';
      styleEl.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/dist/sweetalert2.min.css';
      document.head.appendChild(styleEl);

      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/dist/sweetalert2.all.min.js';
      scriptEl.onload = () => resolve(Swal);
      scriptEl.onerror = reject;
      document.head.appendChild(scriptEl);
    });
  }

  const FlappyHacks = {
    _activeHacks: {},
    _swalLoaded: false,

    _initSwal: async function() {
      if (!this._swalLoaded) {
        try {
          this._swal = await loadSweetAlert();
          this._swalLoaded = true;
        } catch (err) {
          console.error("Failed to load SweetAlert2:", err);
        }
      }
      return this._swalLoaded;
    },

    async _getSwalInput(title, text, inputPlaceholder, defaultValue, inputType = 'number') {
      if (!await this._initSwal()) {
        console.error("SweetAlert not available, using prompt instead");
        return prompt(text, defaultValue);
      }

      const result = await this._swal.fire({
        title,
        text,
        input: inputType,
        inputPlaceholder,
        inputValue: defaultValue,
        showCancelButton: true,
        confirmButtonText: 'Apply',
        cancelButtonText: 'Cancel',
        inputValidator: (value) => {
          if (!value) {
            return 'Please enter a value';
          }
          if (inputType === 'number' && isNaN(parseFloat(value))) {
            return 'Please enter a valid number';
          }
        }
      });

      if (result.isConfirmed) {
        if (inputType === 'number') {
          return parseFloat(result.value);
        }
        return result.value;
      }
      return null;
    },

_registerHack: function(name, disableFunction) {
      this._activeHacks[name] = disableFunction;
      console.log(`✅ ${name} enabled`);;
    },

    _unregisterHack: function(name) {
      if (this._activeHacks[name]) {
        this._activeHacks[name]();
        delete this._activeHacks[name];
        console.log(`❌ ${name} disabled`);
      }
    },

    _listAvailableFunctions: function() {
      console.log('\n======= FLAPPY BIRD HACKS =======');

      console.log('\n📊 STATUS:');
      if (Object.keys(this._activeHacks).length === 0) {
        console.log('No hacks currently active');
      } else {
        console.log('Active hacks:');
        Object.keys(this._activeHacks).forEach(hack => {
          console.log(`- ${hack}`);
        });
      }

      console.log('\n🛡️ INVINCIBILITY HACKS:');
      console.log('- FlappyHacks.GodMode() - Make bird invincible to pipes');
      console.log('- FlappyHacks.GodModeOff() - Disable God Mode');
      console.log('- FlappyHacks.GhostMode() - Make bird pass through pipes');
      console.log('- FlappyHacks.GhostModeOff() - Disable Ghost Mode');
      console.log('- FlappyHacks.Invincibility() - Complete invincibility with bounce');
      console.log('- FlappyHacks.InvincibilityOff() - Disable Invincibility');
      console.log('- FlappyHacks.NoPipes() - Remove all pipes from the game');
      console.log('- FlappyHacks.NoPipesOff() - Bring pipes back');

      console.log('\n🐦 BIRD CONTROLS:');
      console.log('- FlappyHacks.NoGravity() - Remove gravity effect');
      console.log('- FlappyHacks.NoGravityOff() - Restore gravity');
      console.log('- FlappyHacks.SuperJump(multiplier) - Increase jump power');
      console.log('- FlappyHacks.SuperJumpOff() - Normal jump power');
      console.log('- FlappyHacks.KeyboardControl() - Control with arrow keys');
      console.log('- FlappyHacks.KeyboardControlOff() - Disable keyboard control');

      console.log('\n🎮 GAME SPEED:');
      console.log('- FlappyHacks.SlowMotion(factor) - Slow down game speed');
      console.log('- FlappyHacks.SlowMotionOff() - Normal game speed');
      console.log('- FlappyHacks.SetScrollSpeed(speed) - Change terrain scroll speed');
      console.log('- FlappyHacks.ResetScrollSpeed() - Reset scroll speed');

      console.log('\n📈 SCORE HACKS:');
      console.log('- FlappyHacks.SetScore(score) - Set current score');
      console.log('- FlappyHacks.SetBestScore(score) - Set best score');

      console.log('\n🦅 VISUAL BIRD HACKS:');
      console.log('- FlappyHacks.SetBirdSize(size) - Change bird size');
      console.log('- FlappyHacks.PulseBirdSize(min, max, speed) - Pulse between sizes');
      console.log('- FlappyHacks.GrowShrinkBirdSize(start, end, duration) - Grow and shrink');
      console.log('- FlappyHacks.StopBirdSizeAnimations() - Stop size animations');
      console.log('- FlappyHacks.ResetBirdSize() - Reset to original size');

      console.log('\n🔄 TELEPORTATION:');
      console.log('- FlappyHacks.TeleportBird(x, y) - Teleport to coordinates');
      console.log('- FlappyHacks.CircleTeleport(interval, radius) - Teleport in circle');
      console.log('- FlappyHacks.ZigzagTeleport(interval, distance) - Teleport in zigzag');
      console.log('- FlappyHacks.RandomTeleport(interval, minX, maxX, minY, maxY) - Random teleport');
      console.log('- FlappyHacks.StopTeleport() - Stop teleport animation');
      console.log('- FlappyHacks.ResetBirdPosition() - Reset to original position');

      console.log('\n===================================');
    },

    GodMode: function() {
      if (this._activeHacks.GodMode) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      const originalDie = bird.script.bird.die;

      bird.script.bird.die = function() {
      };

      this._registerHack("GodMode", function() {

        if (bird && bird.script && bird.script.bird) {
          bird.script.bird.die = originalDie;
        }
      });
    },

    GodModeOff: function() {
      this._unregisterHack("GodMode");
    },

    SetScore: async function(score) {

      if (score === undefined) {
        score = await this._getSwalInput(
          'Set Score',
          'Enter the score you want:',
          'Score',
          100
        );

        if (score === null) return; 
      }

      if (isNaN(score)) {
        return console.error("Please provide a valid number for the score");
      }

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      app.fire("game:resetscore");

      for (let i = 0; i < score; i++) {
        app.fire("game:addscore");
      }

      console.log(`Score set to ${score}`);
    },

    SetBestScore: async function(score) {

      if (score === undefined) {
        score = await this._getSwalInput(
          'Set Best Score',
          'Enter the best score you want:',
          'Best Score',
          9999
        );

        if (score === null) return; 
      }

      if (isNaN(score)) {
        return console.error("Please provide a valid number for the best score");
      }

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      function storageAvailable(type) {
        try {
          const storage = window[type];
          const x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return false;
        }
      }

      if (storageAvailable("localStorage")) {
        localStorage.setItem("Flappy Bird Best Score", score.toString());

        try {
          app.fire("ui:showscoreboard", 0, score);
        } catch (e) {
          console.log("Could not update scoreboard UI directly");
        }

        console.log(`Best score set to ${score}`);
      } else {
        console.error("LocalStorage is not available");
      }
    },

    _originalScrollSpeeds: {},

    SetScrollSpeed: async function(speed) {

      if (speed === undefined) {
        speed = await this._getSwalInput(
          'Set Scroll Speed',
          'Enter the scroll speed (0.1-5, normal is 1):',
          'Speed',
          2
        );

        if (speed === null) return; 
      }

      speed = Math.max(0.1, Math.min(5, speed));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const scrollEntities = app.root.findByTag("scroll");
      if (!scrollEntities || scrollEntities.length === 0) {
        return console.error("No scroll entities found!");
      }

      if (Object.keys(this._originalScrollSpeeds).length === 0) {
        scrollEntities.forEach(entity => {
          if (entity.script && entity.script.scroll) {
            this._originalScrollSpeeds[entity.name] = entity.script.scroll.speed;
          }
        });
      }

      scrollEntities.forEach(entity => {
        if (entity.script && entity.script.scroll) {
          const originalSpeed = this._originalScrollSpeeds[entity.name] || 1;
          entity.script.scroll.speed = originalSpeed * speed;
        }
      });

      console.log(`Scroll speed set to ${speed}x`);
    },

    ResetScrollSpeed: function() {
      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const scrollEntities = app.root.findByTag("scroll");
      if (!scrollEntities || scrollEntities.length === 0) {
        return console.error("No scroll entities found!");
      }

      scrollEntities.forEach(entity => {
        if (entity.script && entity.script.scroll && this._originalScrollSpeeds[entity.name]) {
          entity.script.scroll.speed = this._originalScrollSpeeds[entity.name];
        }
      });

      console.log("Scroll speed reset to original");
    },

    SlowMotion: async function(slowFactor) {
      if (this._activeHacks.SlowMotion) {
        this.SlowMotionOff(); 
      }

      if (slowFactor === undefined) {
        slowFactor = await this._getSwalInput(
          'Slow Motion',
          'Enter the slow motion factor (0.1-1, lower = slower):',
          'Factor',
          0.5
        );

        if (slowFactor === null) return; 
      }

      slowFactor = Math.max(0.1, Math.min(1, slowFactor));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const originalTimeScale = app.timeScale || 1;

      let originalTweenUpdate = null;
      if (typeof TWEEN !== 'undefined' && TWEEN.update) {
        originalTweenUpdate = TWEEN.update;

        TWEEN.update = function(time) {
          return originalTweenUpdate.call(this, time ? time * slowFactor : undefined);
        };
      }

      const scrollEntities = app.root.findByTag("scroll");
      const originalSpeeds = {};

      scrollEntities.forEach(entity => {
        if (entity.script && entity.script.scroll) {
          originalSpeeds[entity.name] = entity.script.scroll.speed;
          entity.script.scroll.speed *= slowFactor;
        }
      });

      app.timeScale = slowFactor;

      this._registerHack("SlowMotion", function() {

        scrollEntities.forEach(entity => {
          if (entity.script && entity.script.scroll && originalSpeeds[entity.name]) {
            entity.script.scroll.speed = originalSpeeds[entity.name];
          }
        });

        app.timeScale = originalTimeScale;

        if (originalTweenUpdate) {
          TWEEN.update = originalTweenUpdate;
        }
      });

      console.log(`Slow motion enabled (${slowFactor * 100}% speed)`);
    },

    SlowMotionOff: function() {
      this._unregisterHack("SlowMotion");
    },

    NoGravity: function() {
      if (this._activeHacks.NoGravity) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      const originalGravity = bird.script.bird.gravity;

      bird.script.bird.gravity = 0;

      this._registerHack("NoGravity", function() {
        if (bird && bird.script && bird.script.bird) {
          bird.script.bird.gravity = originalGravity;
        }
      });
    },

    NoGravityOff: function() {
      this._unregisterHack("NoGravity");
    },

    SuperJump: async function(jumpMultiplier) {
      if (this._activeHacks.SuperJump) {
        this.SuperJumpOff(); 
      }

      if (jumpMultiplier === undefined) {
        jumpMultiplier = await this._getSwalInput(
          'Super Jump',
          'Enter the jump power multiplier (1.2-5, normal is 1):',
          'Multiplier',
          2
        );

        if (jumpMultiplier === null) return; 
      }

      jumpMultiplier = Math.max(1.2, Math.min(5, jumpMultiplier));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      const originalFlapVelocity = bird.script.bird.flapVelocity;

      bird.script.bird.flapVelocity = originalFlapVelocity * jumpMultiplier;

      this._registerHack("SuperJump", function() {
        if (bird && bird.script && bird.script.bird) {
          bird.script.bird.flapVelocity = originalFlapVelocity;
        }
      });

      console.log(`Super jump enabled (${jumpMultiplier}x jump power)`);
    },

    SuperJumpOff: function() {
      this._unregisterHack("SuperJump");
    },

    GhostMode: function() {
      if (this._activeHacks.GhostMode) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      const originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;
      const originalDie = bird.script.bird.die;

      let originalOpacity = 1;
      if (bird.sprite) {
        originalOpacity = bird.sprite.opacity;

        bird.sprite.opacity = 0.5;
      }

      bird.script.bird.circleRectangleIntersect = function() {
        return false;
      };

      bird.script.bird.die = function(t) {

        if (!t) {
          originalDie.call(bird.script.bird, t);
        }
      };

      this._registerHack("GhostMode", function() {
        if (bird && bird.script && bird.script.bird) {
          bird.script.bird.circleRectangleIntersect = originalCircleRectangleIntersect;
          bird.script.bird.die = originalDie;

          if (bird.sprite) {
            bird.sprite.opacity = originalOpacity;
          }
        }
      });
    },

    GhostModeOff: function() {
      this._unregisterHack("GhostMode");
    },

    KeyboardControl: function() {
      if (this._activeHacks.KeyboardControl) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      const originalFlap = bird.script.bird.flap;
      const originalUpdate = bird.script.bird.update;
      const originalGravity = bird.script.bird.gravity;

      const keys = {
        up: false,
        down: false,
        left: false,
        right: false
      };

      const settings = {
        horizontalSpeed: 1.5,  
        verticalSpeed: 1.0,    
        noGravity: true,       
        autoFlap: false,       
        autoFlapInterval: null 
      };

      if (settings.noGravity) {

        bird.script.bird.gravity = 0;
      }

      function onKeyDown(e) {

        if (e.keyCode === 38) {           
          keys.up = true;
        } else if (e.keyCode === 40) {    
          keys.down = true;
        } else if (e.keyCode === 37) {    
          keys.left = true;
        } else if (e.keyCode === 39) {    
          keys.right = true;
        } else if (e.keyCode === 32) {    
          originalFlap.call(bird.script.bird);
        }
      }

      function onKeyUp(e) {
        if (e.keyCode === 38) keys.up = false;
        else if (e.keyCode === 40) keys.down = false;
        else if (e.keyCode === 37) keys.left = false;
        else if (e.keyCode === 39) keys.right = false;
      }

      if (bird.script.bird.state === "getready") {

        app.fire("game:play");
      }

      bird.script.bird.update = function(dt) {

        if (!settings.noGravity) {

          originalUpdate.call(this, dt);
        } else {

          if (!this.paused && this.state === "play") {

            const position = bird.getPosition();
            if (position.y <= this.lowestHeight) {
              this.die(false);
            }

            if (this.state === "play") {
              const circle = {
                x: position.x,
                y: position.y,
                r: this.radius
              };

              for (let i = 0; i < this.pipes.length; i++) {
                const pipe = this.pipes[i];
                const aabb = pipe.sprite._meshInstance.aabb;
                const min = aabb.getMin();
                const max = aabb.getMax();

                const rect = {
                  x: min.x,
                  y: min.y,
                  w: max.x - min.x,
                  h: pipe.name === "Pipe Top" ? 1000 : max.y - min.y
                };

                if (this.circleRectangleIntersect(circle, rect)) {
                  this.die(true);
                }
              }
            }
          }
        }

        if (this.paused || this.state === "dead") return;

        const position = bird.getPosition().clone();

        if (keys.left) {
          position.x -= settings.horizontalSpeed * dt;
        }
        if (keys.right) {
          position.x += settings.horizontalSpeed * dt;
        }

        if (keys.up) {
          position.y += settings.verticalSpeed * dt;
        }
        if (keys.down) {
          position.y -= settings.verticalSpeed * dt;
        }

        bird.setPosition(position);

        if (keys.up) {
          bird.setLocalEulerAngles(0, 0, -20); 
        } else if (keys.down) {
          bird.setLocalEulerAngles(0, 0, 20);  
        } else {
          bird.setLocalEulerAngles(0, 0, 0);   
        }

        if (bird.sprite && bird.sprite.speed === 0) {
          bird.sprite.speed = 1;
        }
      };

      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);

      this._registerHack("KeyboardControl", function() {

        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);

        bird.script.bird.flap = originalFlap;
        bird.script.bird.update = originalUpdate;
        bird.script.bird.gravity = originalGravity;

        if (settings.autoFlapInterval) {
          clearInterval(settings.autoFlapInterval);
        }
      });

      console.log("Keyboard control enabled!");
      console.log("Controls:");
      console.log("- Up Arrow: Fly upward");
      console.log("- Down Arrow: Fly downward");
      console.log("- Left Arrow: Fly left");
      console.log("- Right Arrow: Fly right");
      console.log("- Space: Flap (original control)");
    },

    KeyboardControlOff: function() {
      this._unregisterHack("KeyboardControl");
    },

    NoPipes: function() {
      if (this._activeHacks.NoPipes) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const pipeEntities = app.root.findByTag("pipe");
      if (!pipeEntities || pipeEntities.length === 0) {
        return console.error("No pipes found!");
      }

      const originalState = {};
      pipeEntities.forEach(pipe => {
        originalState[pipe.name] = {
          enabled: pipe.enabled,
          position: pipe.getLocalPosition().clone()
        };
      });

      pipeEntities.forEach(pipe => {

        pipe.setLocalPosition(100, 100, 100);
      });

      let pipeScroll = null;

      const allEntities = [];

      function collectEntities(entity) {
        allEntities.push(entity);
        for (let i = 0; i < entity.children.length; i++) {
          collectEntities(entity.children[i]);
        }
      }

      collectEntities(app.root);

      for (let i = 0; i < allEntities.length; i++) {
        const entity = allEntities[i];
        if (entity.script && entity.script.scroll) {

          if (entity.name.toLowerCase().includes("pipe")) {
            pipeScroll = entity.script.scroll;
            break;
          }
        }
      }

      const bird = app.root.findByName("Bird");

      let originalCircleRectangleIntersect = null;
      let originalUpdate = null;

      if (bird && bird.script && bird.script.bird) {

        originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;

        bird.script.bird.circleRectangleIntersect = function() {
          return false;
        };
      }

      const originalFire = app.fire;

      app.fire = function(eventName, ...args) {

        if (eventName === "pipes:start" || eventName === "pipes:cycle") {
          console.log(`Blocked pipe event: ${eventName}`);
          return;
        }

        return originalFire.call(this, eventName, ...args);
      };

      if (pipeScroll) {
        pipeScroll.frozen = true;
      }

      this._registerHack("NoPipes", function() {

        pipeEntities.forEach(pipe => {
          if (originalState[pipe.name]) {
            pipe.enabled = originalState[pipe.name].enabled;
            pipe.setLocalPosition(originalState[pipe.name].position);
          }
        });

        app.fire = originalFire;

        if (pipeScroll) {
          pipeScroll.frozen = false;
        }

        if (bird && bird.script && bird.script.bird) {
          if (originalCircleRectangleIntersect) {
            bird.script.bird.circleRectangleIntersect = originalCircleRectangleIntersect;
          }
          if (originalUpdate) {
            bird.script.bird.update = originalUpdate;
          }
        }
      });

      console.log("Pipes removed! No more pipes will appear.");
    },

    NoPipesOff: function() {
      this._unregisterHack("NoPipes");
    },

    _birdSizeChanger: null,

    SetBirdSize: async function(scaleFactor) {

      if (scaleFactor === undefined) {
        scaleFactor = await this._getSwalInput(
          'Set Bird Size',
          'Enter the size multiplier (0.1-10, normal is 1):',
          'Size',
          2
        );

        if (scaleFactor === null) return; 
      }

      if (!this._birdSizeChanger) {
        this._initBirdSizeChanger();
      }

      if (this._birdSizeChanger) {
        this._birdSizeChanger.setSize(scaleFactor);
      }
    },

    PulseBirdSize: async function(minScale, maxScale, speed) {

      if (minScale === undefined || maxScale === undefined || speed === undefined) {

        minScale = await this._getSwalInput(
          'Pulse Bird Size - Min Size',
          'Enter the minimum size (0.1-1):',
          'Min Size',
          0.8
        );
        if (minScale === null) return; 

        maxScale = await this._getSwalInput(
          'Pulse Bird Size - Max Size',
          'Enter the maximum size (1-5):',
          'Max Size',
          1.2
        );
        if (maxScale === null) return; 

        speed = await this._getSwalInput(
          'Pulse Bird Size - Speed',
          'Enter the pulse speed in ms (100-2000):',
          'Speed (ms)',
          1000
        );
        if (speed === null) return; 
      }

      if (!this._birdSizeChanger) {
        this._initBirdSizeChanger();
      }

      if (this._birdSizeChanger) {
        this._birdSizeChanger.startPulsing(minScale, maxScale, speed);
      }
    },

    GrowShrinkBirdSize: async function(startScale, endScale, duration) {

      if (startScale === undefined || endScale === undefined || duration === undefined) {

        startScale = await this._getSwalInput(
          'Grow/Shrink Bird - Start Size',
          'Enter the starting size (0.1-1):',
          'Start Size',
          0.2
        );
        if (startScale === null) return; 

        endScale = await this._getSwalInput(
          'Grow/Shrink Bird - End Size',
          'Enter the maximum size (1-5):',
          'End Size',
          3
        );
        if (endScale === null) return; 

        duration = await this._getSwalInput(
          'Grow/Shrink Bird - Duration',
          'Enter the animation duration in ms (500-5000):',
          'Duration (ms)',
          2000
        );
        if (duration === null) return; 
      }

      if (!this._birdSizeChanger) {
        this._initBirdSizeChanger();
      }

      if (this._birdSizeChanger) {
        this._birdSizeChanger.startGrowShrink(startScale, endScale, duration);
      }
    },

    StopBirdSizeAnimations: function() {
      if (this._birdSizeChanger) {
        this._birdSizeChanger.stopAnimations();
      }
    },

    ResetBirdSize: function() {
      if (this._birdSizeChanger) {
        this._birdSizeChanger.reset();
      }
    },

    _initBirdSizeChanger: function() {
      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird) {
        return console.error("Bird not found!");
      }

      const originalScale = bird.getLocalScale().clone();
      let originalRadius = null;

      if (bird.script && bird.script.bird) {
        originalRadius = bird.script.bird.radius;
      }

      let pulseInterval = null;
      let growShrinkInterval = null;

      const setBirdSize = function(scaleFactor) {

        scaleFactor = Math.max(0.1, Math.min(10, scaleFactor));

        bird.setLocalScale(
          originalScale.x * scaleFactor,
          originalScale.y * scaleFactor,
          originalScale.z * scaleFactor
        );

        if (bird.script && bird.script.bird && originalRadius !== null) {
          bird.script.bird.radius = originalRadius * scaleFactor;
        }

        console.log(`Bird size set to ${Math.round(scaleFactor * 100)}% of original`);
        return scaleFactor;
      };

      const startPulsing = function(minScale = 0.8, maxScale = 1.2, speed = 1000) {

        stopAnimations();

        minScale = Math.max(0.1, minScale);
        maxScale = Math.min(5, maxScale);
        speed = Math.max(100, speed);

        let increasing = true;
        let currentScale = 1;
        const step = 0.05;

        pulseInterval = setInterval(() => {
          if (increasing) {
            currentScale += step;
            if (currentScale >= maxScale) {
              currentScale = maxScale;
              increasing = false;
            }
          } else {
            currentScale -= step;
            if (currentScale <= minScale) {
              currentScale = minScale;
              increasing = true;
            }
          }

          setBirdSize(currentScale);
        }, speed / 20); 

        console.log(`Bird pulsing animation started (${minScale}x to ${maxScale}x at ${speed}ms interval)`);
      };

      const startGrowShrink = function(startScale = 0.2, endScale = 3, duration = 2000, loop = true) {

        stopAnimations();

        startScale = Math.max(0.1, Math.min(5, startScale));
        endScale = Math.max(0.1, Math.min(5, endScale));
        duration = Math.max(500, duration);

        let startTime = Date.now();

        growShrinkInterval = setInterval(() => {
          const elapsed = (Date.now() - startTime) % duration;
          const progress = elapsed / duration;

          if (progress <= 0.5) {

            const scale = startScale + (endScale - startScale) * (progress * 2);
            setBirdSize(scale);
          } else {

            const scale = endScale - (endScale - startScale) * ((progress - 0.5) * 2);
            setBirdSize(scale);
          }

          if (!loop && elapsed < 20) { 
            stopAnimations();
            setBirdSize(startScale);
          }
        }, 16); 

        console.log(`Bird grow/shrink animation started (${startScale}x to ${endScale}x over ${duration}ms${loop ? ", looping" : ""})`);
      };

      const stopAnimations = function() {
        if (pulseInterval) {
          clearInterval(pulseInterval);
          pulseInterval = null;
        }

        if (growShrinkInterval) {
          clearInterval(growShrinkInterval);
          growShrinkInterval = null;
        }
      };

      this._birdSizeChanger = {

        setSize: setBirdSize,

        tiny: () => setBirdSize(0.3),
        small: () => setBirdSize(0.5),
        normal: () => setBirdSize(1.0),
        large: () => setBirdSize(2.0),
        giant: () => setBirdSize(4.0),

        startPulsing,
        startGrowShrink,
        stopAnimations,

        reset: function() {
          stopAnimations();
          bird.setLocalScale(originalScale.x, originalScale.y, originalScale.z);

          if (bird.script && bird.script.bird && originalRadius !== null) {
            bird.script.bird.radius = originalRadius;
          }

          console.log("Bird size reset to original");
        }
      };

      console.log("Bird size changer initialized");
      console.log("Available functions:");
      console.log("- FlappyHacks.SetBirdSize(2) - Set to 2x size");
      console.log("- FlappyHacks.PulseBirdSize(0.8, 1.2, 1000) - Pulse between sizes");
      console.log("- FlappyHacks.GrowShrinkBirdSize(0.5, 2, 2000) - Grow and shrink");
      console.log("- FlappyHacks.StopBirdSizeAnimations() - Stop animations");
      console.log("- FlappyHacks.ResetBirdSize() - Reset to original size");
    },

    _teleporter: null,

    TeleportBird: async function(x, y) {

      if (x === undefined || y === undefined) {

        x = await this._getSwalInput(
          'Teleport Bird - X Coordinate',
          'Enter the X coordinate (-3 to 3):',
          'X',
          0
        );
        if (x === null) return; 

        y = await this._getSwalInput(
          'Teleport Bird - Y Coordinate',
          'Enter the Y coordinate (-3 to 3):',
          'Y',
          0
        );
        if (y === null) return; 
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.teleportTo(x, y, 0);
      }
    },

    CircleTeleport: async function(interval, radius, centerX, centerY) {

      if (interval === undefined || radius === undefined) {

        interval = await this._getSwalInput(
          'Circle Teleport - Interval',
          'Enter the teleport interval in ms (50-500):',
          'Interval (ms)',
          100
        );
        if (interval === null) return; 

        radius = await this._getSwalInput(
          'Circle Teleport - Radius',
          'Enter the circle radius (0.1-2):',
          'Radius',
          0.5
        );
        if (radius === null) return; 

        centerX = await this._getSwalInput(
          'Circle Teleport - Center X',
          'Enter the center X coordinate (optional):',
          'Center X',
          0
        );
        if (centerX === null) centerX = 0; 

        centerY = await this._getSwalInput(
          'Circle Teleport - Center Y',
          'Enter the center Y coordinate (optional):',
          'Center Y',
          0
        );
        if (centerY === null) centerY = 0; 
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.startCircleTeleport(interval, radius, centerX, centerY);
      }
    },

    ZigzagTeleport: async function(interval, distance) {

      if (interval === undefined || distance === undefined) {

        interval = await this._getSwalInput(
          'Zigzag Teleport - Interval',
          'Enter the teleport interval in ms (100-1000):',
          'Interval (ms)',
          500
        );
        if (interval === null) return; 

        distance = await this._getSwalInput(
          'Zigzag Teleport - Distance',
          'Enter the zigzag distance (0.1-2):',
          'Distance',
          0.5
        );
        if (distance === null) return; 
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.startZigzagTeleport(interval, distance);
      }
    },

    RandomTeleport: async function(interval, minX, maxX, minY, maxY) {

      if (interval === undefined) {

        interval = await this._getSwalInput(
          'Random Teleport - Interval',
          'Enter the teleport interval in ms (100-2000):',
          'Interval (ms)',
          1000
        );
        if (interval === null) return; 

        if (await this._getSwalInput(
          'Random Teleport - Boundaries',
          'Do you want to customize the teleport boundaries?',
          'Type "yes" or "no"',
          'no',
          'text'
        ) === 'yes') {

          minX = await this._getSwalInput(
            'Random Teleport - Min X',
            'Enter the minimum X coordinate:',
            'Min X',
            -1
          );
          if (minX === null) minX = -1; 

          maxX = await this._getSwalInput(
            'Random Teleport - Max X',
            'Enter the maximum X coordinate:',
            'Max X',
            1
          );
          if (maxX === null) maxX = 1; 

          minY = await this._getSwalInput(
            'Random Teleport - Min Y',
            'Enter the minimum Y coordinate:',
            'Min Y',
            -0.5
          );
          if (minY === null) minY = -0.5; 

          maxY = await this._getSwalInput(
            'Random Teleport - Max Y',
            'Enter the maximum Y coordinate:',
            'Max Y',
            0.5
          );
          if (maxY === null) maxY = 0.5; 
        } else {

          minX = -1;
          maxX = 1;
          minY = -0.5;
          maxY = 0.5;
        }
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.startRandomTeleport(interval, minX, maxX, minY, maxY);
      }
    },

    StopTeleport: function() {
      if (this._teleporter) {
        this._teleporter.stopTeleportAnimation();
      }
    },

    ResetBirdPosition: function() {
      if (this._teleporter) {
        this._teleporter.reset();
      }
    },

    _initTeleporter: function() {
      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird) {
        return console.error("Bird not found!");
      }

      const originalPosition = bird.getPosition().clone();

      let teleportInterval = null;

      const teleportTo = function(x, y, z) {

        const currentPos = bird.getPosition().clone();

        bird.setPosition(x, y, z);

        console.log(`Bird teleported from (${currentPos.x.toFixed(2)}, ${currentPos.y.toFixed(2)}, ${currentPos.z.toFixed(2)}) to (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
      };

      const teleportOffset = function(offsetX, offsetY, offsetZ) {
        const currentPos = bird.getPosition().clone();
        teleportTo(
          currentPos.x + offsetX,
          currentPos.y + offsetY,
          currentPos.z + offsetZ
        );
      };

      const startRandomTeleport = function(interval = 1000, minX = -1, maxX = 1, minY = -0.5, maxY = 0.5) {

        stopTeleportAnimation();

        interval = Math.max(100, interval);

        teleportInterval = setInterval(() => {

          const randomX = Math.random() * (maxX - minX) + minX;
          const randomY = Math.random() * (maxY - minY) + minY;

          teleportTo(randomX, randomY, 0);
        }, interval);

        console.log(`Random teleport started (interval: ${interval}ms, x: ${minX} to ${maxX}, y: ${minY} to ${maxY})`);
      };

      const startZigzagTeleport = function(interval = 500, distance = 0.5) {

        stopTeleportAnimation();

        interval = Math.max(100, interval);
        distance = Math.max(0.1, Math.min(2, distance));

        let direction = 1; 

        teleportInterval = setInterval(() => {

          teleportOffset(direction * distance, direction * 0.2, 0);

          direction *= -1;
        }, interval);

        console.log(`Zigzag teleport started (interval: ${interval}ms, distance: ${distance})`);
      };

      const startCircleTeleport = function(interval = 100, radius = 0.5, centerX = 0, centerY = 0) {

        stopTeleportAnimation();

        interval = Math.max(50, interval);
        radius = Math.max(0.1, Math.min(2, radius));

        let angle = 0;
        const angleStep = 10 * (Math.PI / 180); 

        teleportInterval = setInterval(() => {

          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          teleportTo(x, y, 0);

          angle += angleStep;
          if (angle >= 2 * Math.PI) {
            angle -= 2 * Math.PI;
          }
        }, interval);

        console.log(`Circle teleport started (interval: ${interval}ms, radius: ${radius}, center: (${centerX}, ${centerY}))`);
      };

      const stopTeleportAnimation = function() {
        if (teleportInterval) {
          clearInterval(teleportInterval);
          teleportInterval = null;
          console.log("Teleport animation stopped");
        }
      };

      this._teleporter = {
        teleportTo,
        teleportOffset,
        startRandomTeleport,
        startZigzagTeleport,
        startCircleTeleport,
        stopTeleportAnimation,
        reset: function() {
          stopTeleportAnimation();
          bird.setPosition(originalPosition.x, originalPosition.y, originalPosition.z);
          console.log("Bird position reset to original");
        }
      };

      console.log("Teleport functions initialized");
      console.log("Available functions:");
      console.log("- FlappyHacks.TeleportBird(x, y) - Teleport to specific coordinates");
      console.log("- FlappyHacks.CircleTeleport(100, 0.5) - Teleport in circle pattern");
      console.log("- FlappyHacks.ZigzagTeleport(500, 0.5) - Teleport in zigzag pattern");
      console.log("- FlappyHacks.RandomTeleport(1000) - Teleport randomly");
      console.log("- FlappyHacks.StopTeleport() - Stop teleport animation");
      console.log("- FlappyHacks.ResetBirdPosition() - Reset to original position");
    },

    Invincibility: function() {
      if (this._activeHacks.Invincibility) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird script not found!");
      }

      const originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;
      const originalDie = bird.script.bird.die;
      const originalUpdate = bird.script.bird.update;

      let effectInterval = null;
      const originalOpacity = bird.sprite ? bird.sprite.opacity : 1;
      let blinkState = true;

      function startBlinkEffect() {

        stopBlinkEffect();

        effectInterval = setInterval(() => {
          blinkState = !blinkState;
          if (bird.sprite) {
            bird.sprite.opacity = blinkState ? 1 : 0.5;
          }
        }, 300); 
      }

      function stopBlinkEffect() {
        if (effectInterval) {
          clearInterval(effectInterval);
          effectInterval = null;

          if (bird.sprite) {
            bird.sprite.opacity = originalOpacity;
          }
        }
      }

      bird.script.bird.circleRectangleIntersect = function() {
        return false; 
      };

      bird.script.bird.die = function() {
        console.log("Bird would have died, but invincibility prevented it!");

      };

      bird.script.bird.update = function(dt) {

        if (!this.paused) {
          const position = bird.getPosition();

          if (this.state === "play") {

            this.velocity -= this.gravity * dt;

            let y = position.y;
            y += this.velocity * dt;

            if (y < this.lowestHeight) {
              y = this.lowestHeight;

              this.velocity = this.flapVelocity * 0.8; 
            }

            bird.setPosition(position.x, y, 0);

            let angle = pc.math.clamp(this.velocity, -2, -.75);
            angle += 1;
            this.entity.setLocalEulerAngles(0, 0, 90 * angle);
          }
        }
      };

      startBlinkEffect();

      this._registerHack("Invincibility", function() {
        bird.script.bird.circleRectangleIntersect = originalCircleRectangleIntersect;
        bird.script.bird.die = originalDie;
        bird.script.bird.update = originalUpdate;

        stopBlinkEffect();
      });

      console.log("Invincibility enabled! The bird cannot die.");
    },

    InvincibilityOff: function() {
      this._unregisterHack("Invincibility");
    },

    _getPlayCanvasApp: function() {

      if (typeof pc !== 'undefined' && pc.Application) {
        return pc.Application.getApplication();
      } else if (window.app) {
        return window.app;
      } else {

        for (let key in window) {
          if (window[key] && window[key].root && window[key].root.findByName) {
            return window[key];
          }
        }
      }
      return null;
    }
  };

  window.FlappyHacks = FlappyHacks;

  FlappyHacks._listAvailableFunctions();
})();
