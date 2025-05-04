javascript:(function() {
  // Load SweetAlert2 dynamically
  function loadSweetAlert() {
    return new Promise((resolve, reject) => {
      if (typeof Swal !== 'undefined') {
        resolve(Swal);
        return;
      }

      // Load SweetAlert CSS
      const styleEl = document.createElement('link');
      styleEl.rel = 'stylesheet';
      styleEl.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/dist/sweetalert2.min.css';
      document.head.appendChild(styleEl);

      // Load SweetAlert JS
      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/dist/sweetalert2.all.min.js';
      scriptEl.onload = () => resolve(Swal);
      scriptEl.onerror = reject;
      document.head.appendChild(scriptEl);
    });
  }

  // Main container for our hacks
  const FlappyHacks = {
    _activeHacks: {},
    _swalLoaded: false,

    // Initialize SweetAlert
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

    // Helper for SweetAlert inputs
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

    // Track active hacks and their disable functions
    _registerHack: function(name, disableFunction) {
      this._activeHacks[name] = disableFunction;
      console.log(`✅ ${name} enabled`);
      this._listAvailableFunctions();
    },

    _unregisterHack: function(name) {
      if (this._activeHacks[name]) {
        this._activeHacks[name]();
        delete this._activeHacks[name];
        console.log(`❌ ${name} disabled`);
        this._listAvailableFunctions();
      }
    },

    // Helper to list all available functions
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

    // God Mode - Makes the bird invincible
    GodMode: function() {
      if (this._activeHacks.GodMode) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      // Original bird die function
      const originalDie = bird.script.bird.die;

      // Replace with empty function
      bird.script.bird.die = function() {
        console.log("Bird would have died, but God Mode prevented it!");
      };

      this._registerHack("GodMode", function() {
        // Restore original die function
        if (bird && bird.script && bird.script.bird) {
          bird.script.bird.die = originalDie;
        }
      });
    },

    GodModeOff: function() {
      this._unregisterHack("GodMode");
    },

    // Set Score - Set the current score to any value
    SetScore: async function(score) {
      // If no score provided, ask for it via SweetAlert
      if (score === undefined) {
        score = await this._getSwalInput(
          'Set Score',
          'Enter the score you want:',
          'Score',
          100
        );

        if (score === null) return; // User cancelled
      }

      if (isNaN(score)) {
        return console.error("Please provide a valid number for the score");
      }

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      // Reset score first
      app.fire("game:resetscore");

      // Then add the specified number of points
      for (let i = 0; i < score; i++) {
        app.fire("game:addscore");
      }

      console.log(`Score set to ${score}`);
    },

    // Set Best Score - Set the best score to any value
    SetBestScore: async function(score) {
      // If no score provided, ask for it via SweetAlert
      if (score === undefined) {
        score = await this._getSwalInput(
          'Set Best Score',
          'Enter the best score you want:',
          'Best Score',
          9999
        );

        if (score === null) return; // User cancelled
      }

      if (isNaN(score)) {
        return console.error("Please provide a valid number for the best score");
      }

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      // Helper function to check localStorage
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

      // Set the best score
      if (storageAvailable("localStorage")) {
        localStorage.setItem("Flappy Bird Best Score", score.toString());

        // Try to update UI
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

    // Scroll Speed - Change the speed of scrolling elements
    _originalScrollSpeeds: {},

    SetScrollSpeed: async function(speed) {
      // If no speed provided, ask for it via SweetAlert
      if (speed === undefined) {
        speed = await this._getSwalInput(
          'Set Scroll Speed',
          'Enter the scroll speed (0.1-5, normal is 1):',
          'Speed',
          2
        );

        if (speed === null) return; // User cancelled
      }

      // Validate speed to be reasonable
      speed = Math.max(0.1, Math.min(5, speed));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      // Find all scroll entities
      const scrollEntities = app.root.findByTag("scroll");
      if (!scrollEntities || scrollEntities.length === 0) {
        return console.error("No scroll entities found!");
      }

      // Store original speeds if not already stored
      if (Object.keys(this._originalScrollSpeeds).length === 0) {
        scrollEntities.forEach(entity => {
          if (entity.script && entity.script.scroll) {
            this._originalScrollSpeeds[entity.name] = entity.script.scroll.speed;
          }
        });
      }

      // Apply new speed
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

      // Find all scroll entities
      const scrollEntities = app.root.findByTag("scroll");
      if (!scrollEntities || scrollEntities.length === 0) {
        return console.error("No scroll entities found!");
      }

      // Restore original speeds
      scrollEntities.forEach(entity => {
        if (entity.script && entity.script.scroll && this._originalScrollSpeeds[entity.name]) {
          entity.script.scroll.speed = this._originalScrollSpeeds[entity.name];
        }
      });

      console.log("Scroll speed reset to original");
    },

    // Slow Motion - Reduces the game speed
    SlowMotion: async function(slowFactor) {
      if (this._activeHacks.SlowMotion) {
        this.SlowMotionOff(); // Turn off existing slow motion first
      }

      // If no slow factor provided, ask for it via SweetAlert
      if (slowFactor === undefined) {
        slowFactor = await this._getSwalInput(
          'Slow Motion',
          'Enter the slow motion factor (0.1-1, lower = slower):',
          'Factor',
          0.5
        );

        if (slowFactor === null) return; // User cancelled
      }

      // Validate slowFactor to be between 0.1 and 1
      slowFactor = Math.max(0.1, Math.min(1, slowFactor));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      // Store original time scale
      const originalTimeScale = app.timeScale || 1;

      // Original TWEEN update function (if it exists)
      let originalTweenUpdate = null;
      if (typeof TWEEN !== 'undefined' && TWEEN.update) {
        originalTweenUpdate = TWEEN.update;

        // Modify TWEEN to slow down animations
        TWEEN.update = function(time) {
          return originalTweenUpdate.call(this, time ? time * slowFactor : undefined);
        };
      }

      // Find scroll entities to slow them down
      const scrollEntities = app.root.findByTag("scroll");
      const originalSpeeds = {};

      scrollEntities.forEach(entity => {
        if (entity.script && entity.script.scroll) {
          originalSpeeds[entity.name] = entity.script.scroll.speed;
          entity.script.scroll.speed *= slowFactor;
        }
      });

      // Apply slow motion to time scale
      app.timeScale = slowFactor;

      this._registerHack("SlowMotion", function() {
        // Restore original speeds
        scrollEntities.forEach(entity => {
          if (entity.script && entity.script.scroll && originalSpeeds[entity.name]) {
            entity.script.scroll.speed = originalSpeeds[entity.name];
          }
        });

        // Restore original time scale
        app.timeScale = originalTimeScale;

        // Restore original TWEEN update
        if (originalTweenUpdate) {
          TWEEN.update = originalTweenUpdate;
        }
      });

      console.log(`Slow motion enabled (${slowFactor * 100}% speed)`);
    },

    SlowMotionOff: function() {
      this._unregisterHack("SlowMotion");
    },

    // No Gravity - Removes the effect of gravity on the bird
    NoGravity: function() {
      if (this._activeHacks.NoGravity) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      // Store the original gravity value to restore it later
      const originalGravity = bird.script.bird.gravity;

      // Set gravity to 0
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

    // Super Jump - Increases the bird's jump power
    SuperJump: async function(jumpMultiplier) {
      if (this._activeHacks.SuperJump) {
        this.SuperJumpOff(); // Turn off existing super jump first
      }

      // If no jump multiplier provided, ask for it via SweetAlert
      if (jumpMultiplier === undefined) {
        jumpMultiplier = await this._getSwalInput(
          'Super Jump',
          'Enter the jump power multiplier (1.2-5, normal is 1):',
          'Multiplier',
          2
        );

        if (jumpMultiplier === null) return; // User cancelled
      }

      // Validate jumpMultiplier to be reasonable
      jumpMultiplier = Math.max(1.2, Math.min(5, jumpMultiplier));

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      // Store the original flapVelocity to restore it later
      const originalFlapVelocity = bird.script.bird.flapVelocity;

      // Increase the flap velocity
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

    // Ghost Mode - Allows the bird to pass through pipes without dying
    GhostMode: function() {
      if (this._activeHacks.GhostMode) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      // Store the original functions to restore them later
      const originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;
      const originalDie = bird.script.bird.die;

      // Store the original bird opacity
      let originalOpacity = 1;
      if (bird.sprite) {
        originalOpacity = bird.sprite.opacity;
        // Apply a semi-transparent effect to the bird to indicate ghost mode
        bird.sprite.opacity = 0.5;
      }

      // Replace with a function that always returns false (no collision)
      bird.script.bird.circleRectangleIntersect = function() {
        return false;
      };

      // Replace the die function but keep ground check functionality
      bird.script.bird.die = function(t) {
        // Only die from hitting the ground, not pipes
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

    // Keyboard Control - Allows controlling the bird with arrow keys
    KeyboardControl: function() {
      if (this._activeHacks.KeyboardControl) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird not found or Bird script not attached!");
      }

      // Store original functions and properties for restoration
      const originalFlap = bird.script.bird.flap;
      const originalUpdate = bird.script.bird.update;
      const originalGravity = bird.script.bird.gravity;

      // Variables to track keyboard state and bird movement
      const keys = {
        up: false,
        down: false,
        left: false,
        right: false
      };

      // Movement settings - can be adjusted
      const settings = {
        horizontalSpeed: 1.5,  // How fast the bird moves left/right
        verticalSpeed: 1.0,    // How fast the bird moves up/down
        noGravity: true,       // Disable gravity completely
        autoFlap: false,       // Auto flapping - not needed with gravity disabled
        autoFlapInterval: null // For continuous flapping
      };

      // If we want to disable gravity entirely
      if (settings.noGravity) {
        // Disable gravity
        bird.script.bird.gravity = 0;
      }

      // Function to handle keydown events
      function onKeyDown(e) {
        // Arrow keys
        if (e.keyCode === 38) {           // Up arrow
          keys.up = true;
        } else if (e.keyCode === 40) {    // Down arrow
          keys.down = true;
        } else if (e.keyCode === 37) {    // Left arrow
          keys.left = true;
        } else if (e.keyCode === 39) {    // Right arrow
          keys.right = true;
        } else if (e.keyCode === 32) {    // Spacebar (for original flap)
          originalFlap.call(bird.script.bird);
        }
      }

      // Function to handle keyup events
      function onKeyUp(e) {
        if (e.keyCode === 38) keys.up = false;
        else if (e.keyCode === 40) keys.down = false;
        else if (e.keyCode === 37) keys.left = false;
        else if (e.keyCode === 39) keys.right = false;
      }

      // If the user has started the game, make sure the bird can move
      if (bird.script.bird.state === "getready") {
        // Put the bird into "play" mode to enable movement
        app.fire("game:play");
      }

      // Create a new update function that adds full directional control
      bird.script.bird.update = function(dt) {
        // Skip calling original update if we're using no gravity
        if (!settings.noGravity) {
          // Call the original update function only if we're not using no-gravity mode
          originalUpdate.call(this, dt);
        } else {
          // Only handle collision detection from original update, no gravity or automatic movement
          if (!this.paused && this.state === "play") {
            // Check for collisions (copied from original update)
            const position = bird.getPosition();
            if (position.y <= this.lowestHeight) {
              this.die(false);
            }

            // Collision with pipes
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

        // Skip if game is paused or over
        if (this.paused || this.state === "dead") return;

        // Get current position
        const position = bird.getPosition().clone();

        // Apply horizontal movement
        if (keys.left) {
          position.x -= settings.horizontalSpeed * dt;
        }
        if (keys.right) {
          position.x += settings.horizontalSpeed * dt;
        }

        // Apply vertical movement directly with no gravity
        if (keys.up) {
          position.y += settings.verticalSpeed * dt;
        }
        if (keys.down) {
          position.y -= settings.verticalSpeed * dt;
        }

        // Set the new position
        bird.setPosition(position);

        // Update bird rotation based on movement direction
        if (keys.up) {
          bird.setLocalEulerAngles(0, 0, -20); // Point slightly up
        } else if (keys.down) {
          bird.setLocalEulerAngles(0, 0, 20);  // Point slightly down
        } else {
          bird.setLocalEulerAngles(0, 0, 0);   // Level
        }

        // Make sure the animation is playing
        if (bird.sprite && bird.sprite.speed === 0) {
          bird.sprite.speed = 1;
        }
      };

      // Attach event listeners
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);

      this._registerHack("KeyboardControl", function() {
        // Remove event listeners
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);

        // Restore original bird behavior
        bird.script.bird.flap = originalFlap;
        bird.script.bird.update = originalUpdate;
        bird.script.bird.gravity = originalGravity;

        // Clear any intervals
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

    // No Pipes - Removes all pipes from the game
    NoPipes: function() {
      if (this._activeHacks.NoPipes) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      // Find all pipe entities
      const pipeEntities = app.root.findByTag("pipe");
      if (!pipeEntities || pipeEntities.length === 0) {
        return console.error("No pipes found!");
      }

      // Store original visible state and position
      const originalState = {};
      pipeEntities.forEach(pipe => {
        originalState[pipe.name] = {
          enabled: pipe.enabled,
          position: pipe.getLocalPosition().clone()
        };
      });

      // Hide all pipes by moving them far away
      pipeEntities.forEach(pipe => {
        // Move pipes far away (off-screen)
        pipe.setLocalPosition(100, 100, 100);
      });

      // Find the pipe scroll controller if any
      let pipeScroll = null;

      // Search for entities with a 'scroll' script related to pipes
      const allEntities = [];

      // Helper function to collect all entities recursively
      function collectEntities(entity) {
        allEntities.push(entity);
        for (let i = 0; i < entity.children.length; i++) {
          collectEntities(entity.children[i]);
        }
      }

      // Start collecting from root
      collectEntities(app.root);

      // Look for scroll entities that control pipes
      for (let i = 0; i < allEntities.length; i++) {
        const entity = allEntities[i];
        if (entity.script && entity.script.scroll) {
          // Check if this has pipe-related tags or name
          if (entity.name.toLowerCase().includes("pipe")) {
            pipeScroll = entity.script.scroll;
            break;
          }
        }
      }

      // Override collision detection in the bird script
      const bird = app.root.findByName("Bird");

      // Store original functions to restore later
      let originalCircleRectangleIntersect = null;
      let originalUpdate = null;

      if (bird && bird.script && bird.script.bird) {
        // Store original collision function
        originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;

        // Replace with a function that always returns false (no collision)
        bird.script.bird.circleRectangleIntersect = function() {
          return false;
        };
      }

      // Store the original event handlers
      const originalFire = app.fire;

      // Create a new fire function that blocks pipe-related events
      app.fire = function(eventName, ...args) {
        // Block pipe-related events
        if (eventName === "pipes:start" || eventName === "pipes:cycle") {
          console.log(`Blocked pipe event: ${eventName}`);
          return;
        }

        // Allow all other events to pass through
        return originalFire.call(this, eventName, ...args);
      };

      // If we found the pipe scroll script, disable it
      if (pipeScroll) {
        pipeScroll.frozen = true;
      }

      this._registerHack("NoPipes", function() {
        // Restore original positions and visibility
        pipeEntities.forEach(pipe => {
          if (originalState[pipe.name]) {
            pipe.enabled = originalState[pipe.name].enabled;
            pipe.setLocalPosition(originalState[pipe.name].position);
          }
        });

        // Restore original app.fire function
        app.fire = originalFire;

        // Re-enable pipe scroll if we found it
        if (pipeScroll) {
          pipeScroll.frozen = false;
        }

        // Restore original bird collision detection
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

    // Bird Size - Change the size of the bird
    _birdSizeChanger: null,

    SetBirdSize: async function(scaleFactor) {
      // If no scale factor provided, ask for it via SweetAlert
      if (scaleFactor === undefined) {
        scaleFactor = await this._getSwalInput(
          'Set Bird Size',
          'Enter the size multiplier (0.1-10, normal is 1):',
          'Size',
          2
        );

        if (scaleFactor === null) return; // User cancelled
      }

      if (!this._birdSizeChanger) {
        this._initBirdSizeChanger();
      }

      if (this._birdSizeChanger) {
        this._birdSizeChanger.setSize(scaleFactor);
      }
    },

    // Bird Size Animations
    PulseBirdSize: async function(minScale, maxScale, speed) {
      // If parameters aren't provided, ask for them via SweetAlert
      if (minScale === undefined || maxScale === undefined || speed === undefined) {
        // First get min scale
        minScale = await this._getSwalInput(
          'Pulse Bird Size - Min Size',
          'Enter the minimum size (0.1-1):',
          'Min Size',
          0.8
        );
        if (minScale === null) return; // User cancelled

        // Then get max scale
        maxScale = await this._getSwalInput(
          'Pulse Bird Size - Max Size',
          'Enter the maximum size (1-5):',
          'Max Size',
          1.2
        );
        if (maxScale === null) return; // User cancelled

        // Finally get speed
        speed = await this._getSwalInput(
          'Pulse Bird Size - Speed',
          'Enter the pulse speed in ms (100-2000):',
          'Speed (ms)',
          1000
        );
        if (speed === null) return; // User cancelled
      }

      if (!this._birdSizeChanger) {
        this._initBirdSizeChanger();
      }

      if (this._birdSizeChanger) {
        this._birdSizeChanger.startPulsing(minScale, maxScale, speed);
      }
    },

    GrowShrinkBirdSize: async function(startScale, endScale, duration) {
      // If parameters aren't provided, ask for them via SweetAlert
      if (startScale === undefined || endScale === undefined || duration === undefined) {
        // Get start scale
        startScale = await this._getSwalInput(
          'Grow/Shrink Bird - Start Size',
          'Enter the starting size (0.1-1):',
          'Start Size',
          0.2
        );
        if (startScale === null) return; // User cancelled

        // Get end scale
        endScale = await this._getSwalInput(
          'Grow/Shrink Bird - End Size',
          'Enter the maximum size (1-5):',
          'End Size',
          3
        );
        if (endScale === null) return; // User cancelled

        // Get duration
        duration = await this._getSwalInput(
          'Grow/Shrink Bird - Duration',
          'Enter the animation duration in ms (500-5000):',
          'Duration (ms)',
          2000
        );
        if (duration === null) return; // User cancelled
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

      // Store original scale and collision radius
      const originalScale = bird.getLocalScale().clone();
      let originalRadius = null;

      if (bird.script && bird.script.bird) {
        originalRadius = bird.script.bird.radius;
      }

      // Scale animation variables
      let pulseInterval = null;
      let growShrinkInterval = null;

      // Function to set bird size
      const setBirdSize = function(scaleFactor) {
        // Validate scale factor (between 0.1 and 10)
        scaleFactor = Math.max(0.1, Math.min(10, scaleFactor));

        // Apply scale
        bird.setLocalScale(
          originalScale.x * scaleFactor,
          originalScale.y * scaleFactor,
          originalScale.z * scaleFactor
        );

        // Scale collision radius if available
        if (bird.script && bird.script.bird && originalRadius !== null) {
          bird.script.bird.radius = originalRadius * scaleFactor;
        }

        console.log(`Bird size set to ${Math.round(scaleFactor * 100)}% of original`);
        return scaleFactor;
      };

      // Start pulsing animation
      const startPulsing = function(minScale = 0.8, maxScale = 1.2, speed = 1000) {
        // Stop any existing animations
        stopAnimations();

        // Validate values
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
        }, speed / 20); // Divide by 20 for smoother animation

        console.log(`Bird pulsing animation started (${minScale}x to ${maxScale}x at ${speed}ms interval)`);
      };

      // Start grow/shrink animation
      const startGrowShrink = function(startScale = 0.2, endScale = 3, duration = 2000, loop = true) {
        // Stop any existing animations
        stopAnimations();

        // Validate values
        startScale = Math.max(0.1, Math.min(5, startScale));
        endScale = Math.max(0.1, Math.min(5, endScale));
        duration = Math.max(500, duration);

        let startTime = Date.now();

        growShrinkInterval = setInterval(() => {
          const elapsed = (Date.now() - startTime) % duration;
          const progress = elapsed / duration;

          if (progress <= 0.5) {
            // First half - grow from startScale to endScale
            const scale = startScale + (endScale - startScale) * (progress * 2);
            setBirdSize(scale);
          } else {
            // Second half - shrink from endScale to startScale
            const scale = endScale - (endScale - startScale) * ((progress - 0.5) * 2);
            setBirdSize(scale);
          }

          // If not looping and we completed one cycle, stop
          if (!loop && elapsed < 20) { // Close to 0
            stopAnimations();
            setBirdSize(startScale);
          }
        }, 16); // ~60fps

        console.log(`Bird grow/shrink animation started (${startScale}x to ${endScale}x over ${duration}ms${loop ? ", looping" : ""})`);
      };

      // Stop all animations
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

      // Create the API object
      this._birdSizeChanger = {
        // Set size directly
        setSize: setBirdSize,

        // Preset sizes
        tiny: () => setBirdSize(0.3),
        small: () => setBirdSize(0.5),
        normal: () => setBirdSize(1.0),
        large: () => setBirdSize(2.0),
        giant: () => setBirdSize(4.0),

        // Animations
        startPulsing,
        startGrowShrink,
        stopAnimations,

        // Reset to original
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

    // Teleport functions
    _teleporter: null,

    TeleportBird: async function(x, y) {
      // If coordinates are not provided, ask for them via SweetAlert
      if (x === undefined || y === undefined) {
        // Get X coordinate
        x = await this._getSwalInput(
          'Teleport Bird - X Coordinate',
          'Enter the X coordinate (-3 to 3):',
          'X',
          0
        );
        if (x === null) return; // User cancelled

        // Get Y coordinate
        y = await this._getSwalInput(
          'Teleport Bird - Y Coordinate',
          'Enter the Y coordinate (-3 to 3):',
          'Y',
          0
        );
        if (y === null) return; // User cancelled
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.teleportTo(x, y, 0);
      }
    },

    CircleTeleport: async function(interval, radius, centerX, centerY) {
      // If parameters aren't provided, ask for them via SweetAlert
      if (interval === undefined || radius === undefined) {
        // Get interval
        interval = await this._getSwalInput(
          'Circle Teleport - Interval',
          'Enter the teleport interval in ms (50-500):',
          'Interval (ms)',
          100
        );
        if (interval === null) return; // User cancelled

        // Get radius
        radius = await this._getSwalInput(
          'Circle Teleport - Radius',
          'Enter the circle radius (0.1-2):',
          'Radius',
          0.5
        );
        if (radius === null) return; // User cancelled

        // Get center X (optional)
        centerX = await this._getSwalInput(
          'Circle Teleport - Center X',
          'Enter the center X coordinate (optional):',
          'Center X',
          0
        );
        if (centerX === null) centerX = 0; // Default value

        // Get center Y (optional)
        centerY = await this._getSwalInput(
          'Circle Teleport - Center Y',
          'Enter the center Y coordinate (optional):',
          'Center Y',
          0
        );
        if (centerY === null) centerY = 0; // Default value
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.startCircleTeleport(interval, radius, centerX, centerY);
      }
    },

    ZigzagTeleport: async function(interval, distance) {
      // If parameters aren't provided, ask for them via SweetAlert
      if (interval === undefined || distance === undefined) {
        // Get interval
        interval = await this._getSwalInput(
          'Zigzag Teleport - Interval',
          'Enter the teleport interval in ms (100-1000):',
          'Interval (ms)',
          500
        );
        if (interval === null) return; // User cancelled

        // Get distance
        distance = await this._getSwalInput(
          'Zigzag Teleport - Distance',
          'Enter the zigzag distance (0.1-2):',
          'Distance',
          0.5
        );
        if (distance === null) return; // User cancelled
      }

      if (!this._teleporter) {
        this._initTeleporter();
      }

      if (this._teleporter) {
        this._teleporter.startZigzagTeleport(interval, distance);
      }
    },

    RandomTeleport: async function(interval, minX, maxX, minY, maxY) {
      // If main parameters aren't provided, ask for them via SweetAlert
      if (interval === undefined) {
        // Get interval
        interval = await this._getSwalInput(
          'Random Teleport - Interval',
          'Enter the teleport interval in ms (100-2000):',
          'Interval (ms)',
          1000
        );
        if (interval === null) return; // User cancelled

        // Ask if user wants to customize boundaries
        if (await this._getSwalInput(
          'Random Teleport - Boundaries',
          'Do you want to customize the teleport boundaries?',
          'Type "yes" or "no"',
          'no',
          'text'
        ) === 'yes') {
          // Get minX
          minX = await this._getSwalInput(
            'Random Teleport - Min X',
            'Enter the minimum X coordinate:',
            'Min X',
            -1
          );
          if (minX === null) minX = -1; // Default value

          // Get maxX
          maxX = await this._getSwalInput(
            'Random Teleport - Max X',
            'Enter the maximum X coordinate:',
            'Max X',
            1
          );
          if (maxX === null) maxX = 1; // Default value

          // Get minY
          minY = await this._getSwalInput(
            'Random Teleport - Min Y',
            'Enter the minimum Y coordinate:',
            'Min Y',
            -0.5
          );
          if (minY === null) minY = -0.5; // Default value

          // Get maxY
          maxY = await this._getSwalInput(
            'Random Teleport - Max Y',
            'Enter the maximum Y coordinate:',
            'Max Y',
            0.5
          );
          if (maxY === null) maxY = 0.5; // Default value
        } else {
          // Use default values
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

      // Store the original position
      const originalPosition = bird.getPosition().clone();

      // Teleport animation variables
      let teleportInterval = null;

      // Function to teleport bird to a specific position
      const teleportTo = function(x, y, z) {
        // Store current position before teleport for reference
        const currentPos = bird.getPosition().clone();

        // Set new position
        bird.setPosition(x, y, z);

        console.log(`Bird teleported from (${currentPos.x.toFixed(2)}, ${currentPos.y.toFixed(2)}, ${currentPos.z.toFixed(2)}) to (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
      };

      // Function to teleport bird with a specific offset from current position
      const teleportOffset = function(offsetX, offsetY, offsetZ) {
        const currentPos = bird.getPosition().clone();
        teleportTo(
          currentPos.x + offsetX,
          currentPos.y + offsetY,
          currentPos.z + offsetZ
        );
      };

      // Start random teleportation
      const startRandomTeleport = function(interval = 1000, minX = -1, maxX = 1, minY = -0.5, maxY = 0.5) {
        // Stop any existing teleport animation
        stopTeleportAnimation();

        // Validate values
        interval = Math.max(100, interval);

        teleportInterval = setInterval(() => {
          // Generate random position
          const randomX = Math.random() * (maxX - minX) + minX;
          const randomY = Math.random() * (maxY - minY) + minY;

          // Teleport to random position
          teleportTo(randomX, randomY, 0);
        }, interval);

        console.log(`Random teleport started (interval: ${interval}ms, x: ${minX} to ${maxX}, y: ${minY} to ${maxY})`);
      };

      // Start zigzag teleportation
      const startZigzagTeleport = function(interval = 500, distance = 0.5) {
        // Stop any existing teleport animation
        stopTeleportAnimation();

        // Validate values
        interval = Math.max(100, interval);
        distance = Math.max(0.1, Math.min(2, distance));

        let direction = 1; // 1 = right, -1 = left

        teleportInterval = setInterval(() => {
          // Teleport with offset based on direction
          teleportOffset(direction * distance, direction * 0.2, 0);

          // Flip direction
          direction *= -1;
        }, interval);

        console.log(`Zigzag teleport started (interval: ${interval}ms, distance: ${distance})`);
      };

      // Start circle teleportation
      const startCircleTeleport = function(interval = 100, radius = 0.5, centerX = 0, centerY = 0) {
        // Stop any existing teleport animation
        stopTeleportAnimation();

        // Validate values
        interval = Math.max(50, interval);
        radius = Math.max(0.1, Math.min(2, radius));

        let angle = 0;
        const angleStep = 10 * (Math.PI / 180); // 10 degrees in radians

        teleportInterval = setInterval(() => {
          // Calculate position on circle
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          // Teleport to position on circle
          teleportTo(x, y, 0);

          // Increment angle
          angle += angleStep;
          if (angle >= 2 * Math.PI) {
            angle -= 2 * Math.PI;
          }
        }, interval);

        console.log(`Circle teleport started (interval: ${interval}ms, radius: ${radius}, center: (${centerX}, ${centerY}))`);
      };

      // Stop any teleport animation
      const stopTeleportAnimation = function() {
        if (teleportInterval) {
          clearInterval(teleportInterval);
          teleportInterval = null;
          console.log("Teleport animation stopped");
        }
      };

      // Create the API object
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

    // Invincibility - Makes the bird completely invincible
    Invincibility: function() {
      if (this._activeHacks.Invincibility) return;

      const app = this._getPlayCanvasApp();
      if (!app) return console.error("Could not find PlayCanvas application!");

      const bird = app.root.findByName("Bird");
      if (!bird || !bird.script || !bird.script.bird) {
        return console.error("Bird script not found!");
      }

      // Store original functions to restore later
      const originalCircleRectangleIntersect = bird.script.bird.circleRectangleIntersect;
      const originalDie = bird.script.bird.die;
      const originalUpdate = bird.script.bird.update;

      // Create a visual effect to show invincibility
      let effectInterval = null;
      const originalOpacity = bird.sprite ? bird.sprite.opacity : 1;
      let blinkState = true;

      // Start blinking effect
      function startBlinkEffect() {
        // Clear existing interval if any
        stopBlinkEffect();

        // Set up blink interval
        effectInterval = setInterval(() => {
          blinkState = !blinkState;
          if (bird.sprite) {
            bird.sprite.opacity = blinkState ? 1 : 0.5;
          }
        }, 300); // Blink every 300ms
      }

      // Stop blinking effect
      function stopBlinkEffect() {
        if (effectInterval) {
          clearInterval(effectInterval);
          effectInterval = null;

          // Reset opacity
          if (bird.sprite) {
            bird.sprite.opacity = originalOpacity;
          }
        }
      }

      // Replace collision detection function to never detect collisions
      bird.script.bird.circleRectangleIntersect = function() {
        return false; // Never collide
      };

      // Replace die function to prevent death
      bird.script.bird.die = function() {
        console.log("Bird would have died, but invincibility prevented it!");
        // Don't call original die function
      };

      // Replace update function to prevent hitting the ground
      bird.script.bird.update = function(dt) {
        // Skip calling original update and handle only what we need
        if (!this.paused) {
          const position = bird.getPosition();

          if (this.state === "play") {
            // Apply gravity as usual
            this.velocity -= this.gravity * dt;

            let y = position.y;
            y += this.velocity * dt;

            // Prevent going below ground
            if (y < this.lowestHeight) {
              y = this.lowestHeight;

              // Bounce effect when hitting the ground
              this.velocity = this.flapVelocity * 0.8; // 80% of normal flap power
            }

            // Update position
            bird.setPosition(position.x, y, 0);

            // Handle rotation based on velocity
            let angle = pc.math.clamp(this.velocity, -2, -.75);
            angle += 1;
            this.entity.setLocalEulerAngles(0, 0, 90 * angle);
          }
        }
      };

      // Start the visual effect
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

    // Helper function to get the PlayCanvas app
    _getPlayCanvasApp: function() {
      // Try different ways to access the app
      if (typeof pc !== 'undefined' && pc.Application) {
        return pc.Application.getApplication();
      } else if (window.app) {
        return window.app;
      } else {
        // Search for app in global scope
        for (let key in window) {
          if (window[key] && window[key].root && window[key].root.findByName) {
            return window[key];
          }
        }
      }
      return null;
    }
  };

  // Add to window
  window.FlappyHacks = FlappyHacks;

  // List available functions on load
  FlappyHacks._listAvailableFunctions();
})();
