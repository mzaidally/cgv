/*
  Notes:
  - Coordinates are specified as (X, Y, Z) where X and Z are horizontal and Y
    is vertical
 */
		
    var map2 = [ 
        //19,18,17,16,15,14,13,12,11, 10,9, 8, 7, 6, 5, 4, 3, 2,1, 0
        [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],//0
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//1
        [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,],//2
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,],//3
        //18,17,16,15,14,13, 12,11,  10,9, 8, 7, 6, 5, 4, 3, 2,1,0
        [1, 1, 1, 1, 1, 0, 1, 1, 1,  0, 0, 0, 0, 1, 1, 1, 1, 0, 1,], // 4
        [1, 0, 0, 0, 1, 0, 0, 1, 1,  0, 1, 1, 1, 0, 0, 0, 1, 0, 1,], // 5
        [1, 0, 1, 0, 1, 1, 0, 0, 1,  0, 0, 0, 0, 1, 1, 0, 0, 0, 1,], // 6
        [1, 0, 1, 0, 0, 0, 1, 0, 1,  1, 0, 1, 1, 1, 0, 0, 0, 0, 1,],//7
        [1, 0, 1, 1, 1, 1, 1, 0, 1,  0, 0, 0, 0, 0, 1, 0, 0, 0 ,1,], // 8
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  1, 1, 1, 1, 0, 1, 1, 1, 1, 1,], // 9
        [1, 1, 0, 1, 1, 1, 1, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 10
        [1, 0, 0, 0, 0, 0, 1, 1, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 11
        [1, 1, 1, 1, 0, 1, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 12
        [1, 0, 0, 0, 0, 0, 1, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 13
        [1, 0, 1, 1, 1, 1, 1, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 14
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 15
        [1, 1, 1, 1, 1, 1, 0, 1, 1,  1, 0, 0, 0, 0, 0, 0, 0, 0, 1,], // 16
        //18,17,16,15,14,13, 12,11,  10,9, 8, 7, 6, 5, 4, 3, 2,1,0
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,],//17
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,],//18
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,],//19
        [1, 0, 0, 0, 0, 0, 0, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,],//20
        [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,],//21
        ]
        //19,18,17,16,15,14,13,12,11, 10,9, 8, 7, 6, 5, 4, 3, 2,1, 0
        
        
        var Skymap2 = [ 
            //19,18,17,16,15,14,13,12,11, 10,9, 8, 7, 6, 5, 4, 3, 2,1, 0
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],//0
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//0
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//1
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//2
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            //18,17,16,15,14,13, 12,11,  10,9, 8, 7, 6, 5, 4, 3, 2,1,0
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            //18,17,16,15,14,13, 12,11,  10,9, 8, 7, 6, 5, 4, 3, 2,1,0
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],//3
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],//0
            ]
            //19,18,17,16,15,14,13,12,11, 10,9, 8, 7, 6, 5, 4, 3, 
        
        
        function matrixFlip(m)
        {
            var tempm = m;
            for (let i = 0; i < tempm.length; i += 1)
            {
                tempm[i].reverse();
            }
        
            return tempm;
        }
        
        //Map Global Variable
        var map = matrixFlip(map2);
        var skymap = matrixFlip(Skymap2);
        
        var mapW = map.length, mapH = map[0].length;
        var skymapW = skymap.length , skymapH = skymap[0].length;
        
        // constants
        var mapWidth = window.innerWidth,
            mapHeight = window.innerHeight,
            aspectRatio = mapWidth / mapHeight,
            standardUnit = 500,
            wallHeight = standardUnit / 3,
            movementSpeed = 400,
            lookSpeed = 0.25,
            laserSpeed = movementSpeed * 2,
            enemiesN = 15,
            laserDamage = 20;
        
        // Global variables
        var t = THREE, scene, cam, renderer, fpsControls, clock, projector, model, skin;
        var runAnim = true, mouse = { x: 0, y: 0 }, kills = 0, health = 100,coins=0;
        var healthHeart ,door,doorWall,doorWall2,limit2, time_elapsed2,coin,coin1,coin2,coin3,speedBoost,speedPickup, lastHealthPickup,lastCoinPickup = 0;
        var coinsTally = 1;
        var count=0;
        var coinPicked, coin1Picked,cubeMat, coin2Picked, coin3Picked, coin4Picked = false;
        var spiderDead = false;
        var currentArray = []
        var firstPersonArray = [standardUnit * 0.2, true, 0.8]
        var thirdPersonArray = [standardUnit*0.6, false, 0.5 ]
        currentArray = firstPersonArray;
        
        // cam y, isGun, bullet y multiplier
        
        // HTML
        $(document).ready(function() {
            $('body').append('<div id="intro"></div>');
            $('#intro').css({width: mapWidth, height: mapHeight}).one('click', function(e) {
                e.preventDefault();
                $(this).fadeOut();
                init();
                animate();
            });
        
        });
        
        
        // Initialise
        function init() {
        
            
            clock = new t.Clock(); // Used in render() for fpsControls.update()
            projector = new t.Projector(); // Used in bullet projection
            scene = new t.Scene(); // Holds all objects in the canvas
            
            //First Person camera
            cam = new t.PerspectiveCamera(60, aspectRatio, 1, 10000); // FOV, aspect, near, far
            cam.position.y = standardUnit * .2;
            
            //spawn point
            cam.position.x = (15-mapW/2)*standardUnit
            cam.position.z = (13-mapW/2)*standardUnit
            var testx,testy,testz;
            scene.add(cam);
            document.onkeydown = function(e) {
                switch(e.keyCode){
                  case 32:
                    if (count%2==0){
                        currentArray = thirdPersonArray
        
                    cam.position.y = currentArray[0]//standardUnit * 0.6;
                    // cam.position.x = (20-mapW/2)*standardUnit;
                    // cam.position.z = (18-mapW/2)*standardUnit;
                    // cam.rotation.y=-Math.PI/2;
                    count+=1;
                    }
                    else{
                        currentArray = firstPersonArray
                        cam.position.y = currentArray[0]//standardUnit * .2;
            
                        //spawn point
                        // cam.position.x = (20-mapW/2)*standardUnit;
                        // cam.position.z = (18-mapW/2)*standardUnit;
                        count+=1
                        
                        var c = getMapSector(a.position);
                        //enemy wall collision detection
                        if (c.x < 0 || c.x >= mapW || c.y < 0 || c.y >= mapH || checkWallCollision(a.position)) {
                            a.translateX(-2 * aispeed * a.lastRandomX);
                            a.translateZ(-2 * aispeed * a.lastRandomZ);
                            a.lastRandomX = Math.random() * 2 - 1;
                            a.lastRandomZ = Math.random() * 2 - 1;
                        }
                    }
                }
        
                
        
            }
            
        
            // fpsControls
            fpsControls = new t.FirstPersonControls(cam);
            fpsControls.movementSpeed = movementSpeed;
            fpsControls.lookSpeed = lookSpeed; //Use Mouse to rotate 
            fpsControls.lookVertical = false; 
            fpsControls.noFly = true;
        
            
            setupScene();
            
            
            setupTorusEnemies();		// round enemies
            setupBossEnemy();		// boss enemy
            
            renderer = new t.WebGLRenderer();
            renderer.setSize(mapWidth, mapHeight);
            
        //skybox
        
        // const cubeGeometry = new THREE.BoxGeometry(1,1,1);
        // const loader = new THREE.TextureLoader();
        // const materialArray = [
        //     new THREE.MeshBasicMaterial( { map: loader.load("1.jpg") } ),
        //     new THREE.MeshBasicMaterial( { map: loader.load("2.jpg") } ),
        //     new THREE.MeshBasicMaterial( { map: loader.load("3.jpg") } ),
        //     new THREE.MeshBasicMaterial( { map: loader.load("4.jpg") } ),
        //     new THREE.MeshBasicMaterial( { map: loader.load("5.jpg") } ),
        //     new THREE.MeshBasicMaterial( { map: loader.load("6.jpg") } ),
        // ];
        // const mesh = new THREE.Mesh( cubeGeometry, materialArray );
        // scene.add(mesh);
            // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
            
          
            // Set the scene background property to the resulting texture.
            
        
            renderer.domElement.style.backgroundColor = '#000000'; 
            document.body.appendChild(renderer.domElement);
            
            // mouse position
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            
            // shooting with right click
            $(document).click(function(e) {
                e.preventDefault;
                if (e.which === 1) { 
                    generateLaser();
                }
            });
            
            // HUD display
            $('body').append('<div id="hud"><p>Health: <span id="health">100</span><br />Score: <span id="score">0</span></p><p>Coins: <span id="coins">0</span></p></div>');
            $('body').append('<div id="hurt"></div>');
            $('#hurt').css({width: mapWidth, height: mapHeight,});
        }
        
        // run animation
        function animate() {
            if (runAnim) {
                requestAnimationFrame(animate);
            }
            render();
        }
        
        // load gun
        new t.ColladaLoader().load('models/cottus_elec.DAE', function(collada) {
            gun = collada.scene;
            skin = collada.skins[0];
            gun.scale.set(3, 3, 3);
        
             gun.rotation.x =   Math.PI /2;			//floor to ceiling to floor
             gun.rotation.y = Math.PI;				// around like a clock facing player
             gun.rotation.z = Math.PI;
        
        
        });
        
        
        // render main
        function render() {
            var scene = this.scene;
        
            if (currentArray[1])
            {
                cam.add(gun)
                gun.position.set(0, -10, 25);
            }
            else
            {
                gun.position.set(0, -250, -500)
            }
                
        
            var delta = clock.getDelta(), speed = delta * laserSpeed;
            var aispeed = delta * movementSpeed;
            fpsControls.update(delta); // Move camera
            movement=movementSpeed;
            looking=lookSpeed;
            // heart rotation
            healthHeart.rotation.x += 0.004
            healthHeart.rotation.y += 0.008;
            
            //SpeedBoost
            if (distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) < 35 ) {	
                speedPickup = Date.now();
            }
        
                time_elapsed=Date.now()-speedPickup;
                limit=5000;
                //If picked up give double speed
                if((time_elapsed<limit)&&distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) < 500){
                    fpsControls.movementSpeed=800;		
                }
                //return back to normal speed after 5 seconds
                else if(time_elapsed>limit&&distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) > 500){
                    fpsControls.movementSpeed=400;
                }
                //Health pickup , add 50 health to player upon pickup
                if (distance(cam.position.x, cam.position.z, healthHeart.position.x, healthHeart.position.z) < 35 && health != 100) {
                    health = Math.min(health + 50, 100);
                    $('#health').html(health);
                    lastHealthPickup = Date.now();
                    
                }
            
            //Pickup coin function - add to coin score and remove from game
                if (distance(cam.position.x, cam.position.z+25, coin.position.x, coin.position.z) < 10 || distance(cam.position.x, cam.position.z -400, coin.position.x, coin.position.z) <335){
                    
                    if (!coinPicked){
                        coins = coins+1;
                        coinPicked = true;
                    }
                
                //$('#health').html(health);
                $('#coins').html(coins);
                lastCoinPickup = Date.now();
                scene.remove(coin);
            }
                
                 
                if (distance(cam.position.x, cam.position.z+25, coin1.position.x, coin1.position.z) < 10 || distance(cam.position.x, cam.position.z-400, coin1.position.x, coin1.position.z) <575 ) {
                    
                    if (!coin1Picked)
                        coins = coins+1;
                        coin1Picked = true;
        
                    
                    //$('#health').html(health);
                    $('#coins').html(coins);
                    lastCoinPickup = Date.now();
                    scene.remove(coin1);
                }
                //console.log(coin.position)
                //console.log(coin1.position)
                
                
                if (distance(cam.position.x, cam.position.z +25 , coin2.position.x, coin2.position.z) < 10 || distance(cam.position.x, cam.position.z - 400, coin2.position.x, coin2.position.z) <335) {
                    
                    if (!coin2Picked)
                        coins = coins+1;
                        coin2Picked = true;
        
                    //$('#health').html(health);
                    $('#coins').html(coins);
                    lastCoinPickup = Date.now();
                    scene.remove(coin2);
                }
        
                //console.log(cam.position)
                
                if (distance(cam.position.x, cam.position.z+25, coin3.position.x, coin3.position.z) < 15 || distance(cam.position.x, cam.position.z-400, coin3.position.x, coin3.position.z) <635) {
                    
                    
                    if (!coin3Picked)
                        coins = coins+1;
                        coin3Picked = true;
            
                    //$('#health').html(health);
                    $('#coins').html(coins);
                    lastCoinPickup = Date.now();
                    scene.remove(coin3);
                }
        
                //Open door to level 2
                if(coins>1){
                    
                 
                    
                    map[16][12]=0;
                    scene.remove(doorWall);
                }
        
                //Open door to level 3
                if( coins>1){
                    $('body').append('<div id="levels"><p>Coins collected finish the maze!<span id="passedLevel1"></span><br />')
                    if(distance(cam.position.x, cam.position.z+25, doorWall2.position.x, doorWall2.position.z) < 10 || distance(cam.position.x, cam.position.z-400, doorWall2.position.x, doorWall2.position.z) <575){
                        scene.remove(doorWall);
                        window.location.href = "menu.html";
                        
                    }

                }
                
            // bullet mechanics
            for (var i = bullets.length-1; i >= 0; i--) {
                var b = bullets[i], p = b.position, d = b.ray.direction;
                if (checkWallCollision(p)) {
                    bullets.splice(i, 1);
                    scene.remove(b);
                    continue;
                }
                // hit enemy
                var hit = false;
                for (var j = aiList.length-1; j >= 0; j--) {
                    var aiListElement = aiList[j]; // enemy 
                    var c = aiListElement.position;
                    var x = Math.abs(vertices.x), z = Math.abs(vertices.z);	//Collision Detection 
                    if (p.x < c.x + x && p.x > c.x - x &&
                            p.z < c.z + z && p.z > c.z - z &&
                            b.owner != aiListElement) {
                        bullets.splice(i, 1);
                        scene.remove(b);
                        aiListElement.health -= laserDamage; // subtact enemy health 
                        var color = aiListElement.material.color, percent =100- aiListElement.health;
                        // makes enemy red before dying 
                        aiListElement.material.color.setRGB(
                                percent * color.r,
                                color.g,
                                color.b
                        );
                        hit = true;
                        break;
                    }
                }
            
                // enemy lasers hit player
                if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
                    $('#hurt').fadeIn(75);
                    health -= 1;
                    if (health < 0) health = 0;
                    val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
                    $('#health').html(val);
                    bullets.splice(i, 1);
                    scene.remove(b);
                    $('#hurt').fadeOut(350);
                }
                if (!hit) {
                    b.translateX(speed * d.x);
                    b.translateZ(speed * d.z);
                }
            }
            
            // kill enemy
            for (var i = aiList.length-1; i >= 0; i--) {
                var a = aiList[i];
                if (a.health <= 0) {
                    aiList.splice(i, 1);
                    scene.remove(a);
                    kills++;
                    $('#score').html(kills * 100);
                }
                
                // Enemy movement
                var r = Math.random();
                if (r > 0.995) {
                    a.lastRandomX = Math.random() * 2 - 1;
                    a.lastRandomZ = Math.random() * 2 - 1;
                }
                a.translateX(aispeed * a.lastRandomX);
                a.translateZ(aispeed * a.lastRandomZ);
                var c = getMapSector(a.position);
                //enemy wall collision detection
                if (c.x < 0 || c.x >= mapW || c.y < 0 || c.y >= mapH || checkWallCollision(a.position)) {
                    a.translateX(-2 * aispeed * a.lastRandomX);
                    a.translateZ(-2 * aispeed * a.lastRandomZ);
                    a.lastRandomX = Math.random() * 2 - 1;
                    a.lastRandomZ = Math.random() * 2 - 1;
                }
                // add enemy to scene
                if (c.x < -1 || c.x > mapW || c.z < -1 || c.z > mapH) {
                    aiList.splice(i, 1);
                    scene.remove(a);
                    addAI();
                    
                    
                }
        
                // range of lasers
        
                var cc = getMapSector(cam.position);
                if (Date.now() > a.lastShot + 750 && distance(c.x, c.z, cc.x, cc.z) < 2) {
                    generateLaser(a);
                    a.lastShot = Date.now();
                }
            
            }
        
            // Spider boss update
            for (var i = aiList2.length-1; i >= 0; i--) {
                var a = aiList2[i];
                if (a.health <= 0) {
                    aiList2.splice(i, 1);
                    scene.remove(a);
                    kills++;
                    $('#score').html(kills * 100);
                    
                }
                // spider movement
                var r = Math.random();
                if (r > 0.995) {
                    a.lastRandomX = Math.random() * 2 - 1;
                    a.lastRandomZ = Math.random() * 2 - 1;
                }
                a.translateX(aispeed * a.lastRandomX);
                a.translateZ(aispeed * a.lastRandomZ);
                var c = getMapSector(a.position);
                if (c.x < 0 || c.x >= mapW || c.y < 0 || c.y >= mapH || checkWallCollision(a.position)) {
                    a.translateX(-2 * aispeed * a.lastRandomX);
                    a.translateZ(-2 * aispeed * a.lastRandomZ);
                    a.lastRandomX = Math.random() * 2 - 1;
                    a.lastRandomZ = Math.random() * 2 - 1;
                }
                if (c.x < -1 || c.x > mapW || c.z < -1 || c.z > mapH) {
                    aiList2.splice(i, 1);
                    scene.remove(a);
        
                    addAI2();
                    
                    
                }
        
                
                var cc = getMapSector(cam.position);
                if (Date.now() > a.lastShot + 750 && distance(c.x, c.z, cc.x, cc.z) < 2) {
                    generateLaser(a);
                    a.lastShot = Date.now();
                }
        
                
            // more lasers
            for (var i = bullets.length-1; i >= 0; i--) {
                var b = bullets[i], p = b.position, d = b.ray.direction;
                if (checkWallCollision(p)) {
                    bullets.splice(i, 1);
                    scene.remove(b);
                    continue;
                }
                // spider collision
                var hit = false;
                for (var j = aiList2.length-1; j >= 0; j--) {
                    var aiListElement = aiList2[j];
                    var c = aiListElement.position;
                    var x = Math.abs(vertices2.x), z = Math.abs(vertices2.z);
                    console.log(" if statement reached")
                    if (p.x < c.x + x && p.x > c.x - x &&
                            p.z < c.z + z && p.z > c.z - z &&
                            b.owner != aiListElement) {
            
                        bullets.splice(i, 1);
                        scene.remove(b);
                        aiListElement.health -= laserDamage;
                        if (aiListElement.health == 0)
                                spiderDead = true
                        
                        hit = true;
                        console.log("hit")
                        break;
                    }
                }
                // spider lasers
                if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
                    $('#hurt').fadeIn(75);
                    health -= 1;
                    if (health < 0) health = 0;
                    val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
                    $('#health').html(val);
                    bullets.splice(i, 1);
                    scene.remove(b);
                    $('#hurt').fadeOut(350);
                }
                if (!hit) {
                    b.translateX(speed * d.x);
                    b.translateZ(speed * d.z);
                }
            }
            
            
            }
        
            // end game if boss killed
        
            renderer.render(scene, cam);
            if (spiderDead) {
                runAnim = false;
                $(renderer.domElement).fadeOut();
                $('#radar, #hud, #credits').fadeOut();
                $('#intro').fadeIn();
                $('#intro').html('You won!');
                $('#intro').one('click', function() {
                    window.location.href = "credits.html";
                    
                });
            }
            
            // Death
            if (health <= 0) {
                runAnim = false;
                $(renderer.domElement).fadeOut();
                $('#radar, #hud, #credits').fadeOut();
                $('#intro').fadeIn();
                $('#intro').html('You Died');
                $('#intro').one('click', function() {
                    location = location;
                    
                });
            }
        }
        
        
        // creates scene with textures loaded
        function setupScene() {
            
                    //loads the sky material
                    
                    // var mat = t.ImageUtils.loadTexture('images/sky.jpg');
                    // var skybox_texture = new t.MeshLambertMaterial({map:mat});
                    // cubeMat = new t.MeshBasicMaterial({
                    // 	map: mat,
                    // 	side: t.FrontSide
                    // });
                    // var cube = new t.Mesh(new t.CubeGeometry(5000, 5000, 5000), cubeMat);
                
                    // //cube.position.y=800;
                    
                    // scene.add(cube);
                    // // const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
                    // // scene.add( light );
                    //loads the sky material
                    //not the solution
                    // var loader = new THREE.TextureLoader();
                    //var mat = t.ImageUtils.loadTexture('images/sky.jpg');
                    //var mat = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/sky.jpg')});
        
                    var geometry = new THREE.CubeGeometry(100000,50000,100000);
                    var material = new THREE.MeshLambertMaterial({color: 0x5bff33, wireframe: false}); 
                    
                    /* Cause the material to be visible for inside and outside */
                    material.side = THREE.BackSide; 
                    
                    var cube1 = new THREE.Mesh(geometry, material);
                    scene.add(cube1);
            
            var standardUnit = 500, units = mapW;
        
            // floor
            
            const texture = t.ImageUtils.loadTexture('images/splitgateFloor.jpg');//this is the floor
        
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(100, 100,);
            texture.needsUpdate = true;
        
            var floorTexture = new t.MeshLambertMaterial({map:texture});
            // plane for floor
        
            var plane = new t.Mesh(new t.CubeGeometry(units*standardUnit,10,units*standardUnit),floorTexture);
            plane.scale.set(2,2,2);
            plane.overdraw = true;
            scene.add(plane);
        
        
        
            const textureRoof = t.ImageUtils.loadTexture('images/1.jpg');//this is the roof
            
            var roofTexture = new t.MeshLambertMaterial({map:textureRoof});
            var roof = new t.Mesh(new t.CubeGeometry(units*standardUnit,10,units*standardUnit),roofTexture);
        
            roof.scale.set(3,3,3);
            roof.position.set(2500, 800, 4500)
        
            roof.overdraw = true;
            scene.add(roof);
        
            
        
            var cube1 = new t.CubeGeometry(standardUnit, wallHeight, standardUnit);
            for (var i = 0; i < skymapW; i++) {
                
                for (var j = 0, m = skymap[i].length; j < m; j++) {
                    if (skymap[i][j]) {
                        
                        var materials1;
                        
        
                        
                        materials1 = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/roof.jpg')});//this is the walls
                        
                        var Swall = new t.Mesh(cube1, materials1);
        
                        
                        
                        Swall.position.x = (i - units/2) * standardUnit;
                        Swall.position.y = wallHeight;
                        Swall.position.z = (j - units/2) * standardUnit;
                        Swall.scale.set(1,15,1);
                        scene.add(Swall);
                        //}
                    }
                }
            }
        
                            
            // generates walls
        
            var cube = new t.CubeGeometry(standardUnit, wallHeight, standardUnit);
            for (var i = 0; i < mapW; i++) {
                
                for (var j = 0, m = map[i].length; j < m; j++) {
                    if (map[i][j]) {
                        
                        var materials;
                        if ( i < 8 && j > 9)
                            materials = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/scifi_walls.jpg')});
        
                        else
                            materials = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/scifi_walls.jpg')});//this is the walls
                        
                        var wall = new t.Mesh(cube, materials);
        
                        
                        
                        wall.position.x = (i - units/2) * standardUnit;
                        wall.position.y = wallHeight;
                        wall.position.z = (j - units/2) * standardUnit;
                        wall.scale.set(1,2,1);
                        scene.add(wall);
                        //}
                    }
                }
            }
        
        
            // add doors 
        
            var materials = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/level2.jpg')});
        
            doorWall  = new t.Mesh(cube, materials);
            
            
            doorWall.position.x = (16 - units/2) * standardUnit;
            doorWall.position.y = wallHeight;
            doorWall.position.z = (12 - units/2) * standardUnit;
        
            scene.add(doorWall);
        
            map[16][12] = 1;
        
            var materials2 = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/level3.png')});
        
            doorWall2  = new t.Mesh(cube, materials2);
            
            
            doorWall2.position.x = (9 - units/2) * standardUnit;
            doorWall2.position.y = wallHeight;
            doorWall2.position.z = (5 - units/2) * standardUnit;
        
            scene.add(doorWall2);
        
            map[9][5] = 1;
            
            // add health heart
        
            // bezier curves
            var x = 0, y = 0;
            var heartShape = new t.Shape(); 
            heartShape.moveTo( x + 25, y + 25 );
            heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
            heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
            heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
            heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
            heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
            heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );
        
            var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
            var heartGeometry = new t.ExtrudeGeometry( heartShape, extrudeSettings );
        
            healthHeart = new t.Mesh( heartGeometry, new t.MeshPhongMaterial( { color: 0xff0040 } ) );
            healthHeart.position.set( (10 - mapW/2) * standardUnit, 55, (5 - mapW/2) * standardUnit );
            healthHeart.scale.set( 0.7,0.7,0.7 );
        
            scene.add(healthHeart);
        
            // add speedboost
        
            speedBoost= new t.Mesh(
                new t.SphereGeometry(10,10,10),
                new t.MeshBasicMaterial({map: t.ImageUtils.loadTexture('images/Flash_Logo_01.png')})
            );
        
            speedBoost.position.set( (12 - mapW/2) * standardUnit, 55, (7 - mapW/2) * standardUnit );
            speedBoost.scale.set(2,2,2);
            scene.add(speedBoost);
        
            // adds coins
        
        coin = new t.Mesh(
                new t.CubeGeometry(10, 10, 10),
                new t.MeshNormalMaterial());
                coin.position.set((20-mapW/2)*standardUnit, 55, (13-mapW/2)*standardUnit);
                coin.scale.set(2,2,2);
                scene.add(coin);
        
        coin1 = new t.Mesh(
                new t.CubeGeometry(10, 10, 10),
                new t.MeshNormalMaterial());
                coin1.position.set((17-mapW/2)*standardUnit, 55, (18-mapW/2)*standardUnit);
                coin1.scale.set(2,2,2);			
                scene.add(coin1);
        
        coin2 = new t.Mesh(
                new t.SphereGeometry(10, 10, 10),
                new t.MeshNormalMaterial());
                coin2.position.set((7-mapW/2)*standardUnit, 55, (14-mapW/2)*standardUnit);
                coin2.scale.set(2,2,2);				
                scene.add(coin2);
        
        coin3 = new t.Mesh(
                new t.SphereGeometry(10, 10, 10),
                new t.MeshNormalMaterial());
                coin3.position.set((2-mapW/2)*standardUnit, 55, (13-mapW/2)*standardUnit);
                coin3.scale.set(2,2,2);					
                scene.add(coin3);
        
        
            
            // Directional light
        
        
            var directionalLight1 = new t.DirectionalLight( 0xF7EFBE, 0.7 );
            directionalLight1.position.set( 0.5, 1, 0.5 );
            scene.add( directionalLight1 );
            var directionalLight2 = new t.DirectionalLight( 0xF7EFBE, 0.5 );
            directionalLight2.position.set( -0.5, -1, -0.5 );
            scene.add( directionalLight2 );
            
        
        }
        
        // setup ai configuration
        
        var aiList = [];
        var vertices;
        var aiGeometry  = new t.CubeGeometry(250, 250, 250);
        
        function setupTorusEnemies() {
            for (var i = 0; i < enemiesN; i++) {
                addAI();
            }
        }
        
        var aiList2=[];
        var vertices2;
        function setupBossEnemy() {
            for (var i = 0; i < enemiesN; i++) {
                addAI2();
            }
        }
        
        
        //SpiderBoss Enemy
        new t.ColladaLoader().load('models/redBlackSpider.dae', function(collada) {
            model = collada.scene;
            skin = collada.skins[0];
            model.scale.set(40, 40, 40);
            model.position.set(10, 5, 10);
        });
        
        
        //Create a new BoxGeometry as a hitbox for spider
        
        function addAI2() {
            var c = getMapSector(cam.position);
            var aiMaterial = new t.MeshBasicMaterial({/*color: 0xEE3333,*/map: t.ImageUtils.loadTexture('images/face.png')});
            
            var enemy = new t.Mesh(aiGeometry,aiMaterial);
            
            do {
                var x =  18 //getRandBetween(0, mapW-1);
                var z = 4 //getRandBetween(0, mapH-1);
            } while (map[x][z] > 0 || (x == c.x && z == c.z));
            x = Math.floor(x - mapW/2) * standardUnit;
            z = Math.floor(z - mapW/2) * standardUnit;
            
            model.position.set(x, standardUnit * 0.15, z);
            model.health = 100;
             // Higher-fidelity timers aren't a big deal here.
            
            model.pathPos = 1;
            model.lastRandomX = Math.random();
            model.lastRandomZ = Math.random();
            model.lastShot = Date.now(); // Higher-fidelity timers aren't a big deal here.
        
            vertices2 = enemy.geometry.vertices[0];
            aiList2.push(model);
            scene.add(model);
        }
        
        
        
        function addAI() {
            var c = getMapSector(cam.position);
        
            var eye = new t.TorusGeometry( 10,9, 16, 100 );
            
            var aiMaterial = new t.MeshBasicMaterial({/*color: 0xEE3333,*/map: t.ImageUtils.loadTexture('images/enemy.png')});
        
             var enemy = new t.Mesh(eye, aiMaterial);
        
            enemy.scale.set(4,4,4);
        
            var collCube = new t.CubeGeometry(30,30,30);
            var collMesh = new t.Mesh(collCube,aiMaterial);
            
        
            do {
                var x =  getRandBetween(0, mapW-1);
                var z =  getRandBetween(0, mapH-1);
        
            } 
            
            
            while (map[x][z] > 0 || (x == c.x && z == c.z));
            
            x = Math.floor(x - mapW/2) * standardUnit;
            z = Math.floor(z - mapW/2) * standardUnit;
            
            enemy.position.set(x, standardUnit * 0.18, z);
            enemy.health = 30;
             // Higher-fidelity timers aren't a big deal here.
            
            enemy.pathPos = 1;
            enemy.lastRandomX = Math.random();
            enemy.lastRandomZ = Math.random();
            enemy.lastShot = Date.now(); // Higher-fidelity timers aren't a big deal here.
        
        
            vertices = collMesh.geometry.vertices[0];
        
            // console.log(modelEnemy.position)
        
            aiList.push(enemy);
            scene.add(enemy);
        
        }
        
        // dictates ai movement
        function getAIpath(a) {
            var p = getMapSector(a.position);
            do { // Cop-out
                do {
                    var x = getRandBetween(0, mapW-1);
                    var z = getRandBetween(0, mapH-1);
                } while (map[x][z] > 0 || distance(p.x, p.z, x, z) < 3);
                var path = findAIpath(p.x, p.z, x, z);
            } while (path.length == 0);
            return path;
        }
        
        
        function findAIpath(sX, sZ, eX, eZ) {
            var backupGrid = grid.clone();
            var path = finder.findPath(sX, sZ, eX, eZ, grid);
            grid = backupGrid;
            return path;
        }
        
        // calc distance
        
        function distance(x1, y1, x2, y2) {
            return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        }
        
        // get map sector
        
        function getMapSector(v) {
            var x = Math.floor((v.x + standardUnit / 2) / standardUnit + mapW/2);
            var z = Math.floor((v.z + standardUnit / 2) / standardUnit + mapW/2);
            return {x: x, z: z};
        }
        
        function checkWallCollision(v) {
            var c = getMapSector(v);
            return map[c.x][c.z] > 0;
        }
        
        // create bullets
        var bullets = [];
        var sphereMaterial = new t.MeshBasicMaterial({color: 0xFF160C});
        var sphereGeo = new t.SphereGeometry(6, 6, 6);
        
        function generateLaser(obj) {
            if (obj === undefined) {
                obj = cam;
            }
            var sphere = new t.Mesh(sphereGeo, sphereMaterial);
            sphere.scale.set(1,0.1, 1)
        
            // initialises origin
            sphere.position.set(obj.position.x, obj.position.y * currentArray[2], obj.position.z);
        
            
            if (obj instanceof t.Camera) {
                var vector = new t.Vector3(mouse.x , mouse.y , 1);
                projector.unprojectVector(vector, obj);
                sphere.ray = new t.Ray(
                    obj.position,
                    vector.subSelf(obj.position).normalize()
                );
        
            }
            else {
                var vector = cam.position.clone();
                sphere.ray = new t.Ray(
                        obj.position,
                        vector.subSelf(obj.position).normalize()
                );
            }
            sphere.owner = obj;
            
            bullets.push(sphere);
            scene.add(sphere);
            
            return sphere;
        }
        
        // tracks mouse movement
        
        function onDocumentMouseMove(e) {
            e.preventDefault();
            mouse.x = (e.clientX / mapWidth) * 2 - 1;
            mouse.y = - (e.clientY / mapHeight) * 2 + 1;
        }
        
        // window sizing
        $(window).resize(function() {
            mapWidth = window.innerWidth;
            mapHeight = window.innerHeight;
            aspectRatio = mapWidth / mapHeight;
            if (cam) {
                cam.aspect = aspectRatio;
                cam.updateProjectionMatrix();
            }
            if (renderer) {
                renderer.setSize(mapWidth, mapHeight);
            }
            $('#intro, #hurt').css({width: mapWidth, height: mapHeight,});
        });
        
        // freezes if not focused 
        $(window).focus(function() {
            if (fpsControls) fpsControls.freeze = false;
        });
        $(window).blur(function() {
            if (fpsControls) fpsControls.freeze = true;
        });
        
        
        // generates random number
        function getRandBetween(lo, hi) {
         return parseInt(Math.floor(Math.random()*(hi-lo+1))+lo, 10);
        }
        