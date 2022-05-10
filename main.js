
/*
 * Notes:
 * - Coordinates are specified as (X, Y, Z) where X and Z are horizontal and Y
 *   is vertical
 */

var map = [ // 1  2  3  4  5  6  7  8  9
			
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 1
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 2
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 3
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 4
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0,1,],															 // 0
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 1
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 2
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 1, 0, 1, 1, 1, 1, 1, 1,1,], // 3
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 4
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 5
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 6
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 7
           [1, 0, 0, 0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 0, 0, 0, 0, 0,1,], // 8
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], // 9
           ], mapW = map.length, mapH = map[0].length;

// Semi-constants
var WIDTH = window.innerWidth,
	HEIGHT = window.innerHeight,
	ASPECT = WIDTH / HEIGHT,
	UNITSIZE = 500,
	WALLHEIGHT = UNITSIZE / 3,
	MOVESPEED = 400,
	LOOKSPEED = 0.5175,
	BULLETMOVESPEED = MOVESPEED * 2,
	NUMAI = 5,
	PROJECTILEDAMAGE = 20;  // TODO
// Global vars
var t = THREE, scene, cam, renderer, controls, clock, projector, model, skin;
var runAnim = true, mouse = { x: 0, y: 0 }, kills = 0, health = 100,coins=0;
var healthCube,door,limit2, time_elapsed2,coin,coin1,coin2,coin3,speedBoost,speedPickup, lastHealthPickup,lastCoinPickup = 0;
/*
var finder = new PF.AStarFinder({ // Defaults to Manhattan heuristic
	allowDiagonal: true,
}), grid = new PF.Grid(mapW, mapH, map);
*/


// Initialize and run on document ready
$(document).ready(function() {
	$('body').append('<div id="intro">Click to start</div>');
	$('#intro').css({width: WIDTH, height: HEIGHT}).one('click', function(e) {
		e.preventDefault();
		$(this).fadeOut();
		init();
		setInterval(drawRadar, 1000);
		animate();
	});

});



// Setup
function init() {
	clock = new t.Clock(); // Used in render() for controls.update()
	projector = new t.Projector(); // Used in bullet projection
	scene = new t.Scene(); // Holds all objects in the canvas
	//scene.fog = new t.FogExp2(0xD6F1FF, 0.0005); // color, density
	



	// Set up camera
	cam = new t.PerspectiveCamera(60, ASPECT, 1, 10000); // FOV, aspect, near, far
	cam.position.y = UNITSIZE * .2;
	cam.position.z=4500;
	cam.position.x=2500;
	

	scene.add(cam);

	
	
	// Camera moves with mouse, flies around with WASD/arrow keys
	controls = new t.FirstPersonControls(cam);
	controls.movementSpeed = MOVESPEED;
	controls.lookSpeed = LOOKSPEED;
	controls.lookVertical = false; // Temporary solution; play on flat surfaces only
	controls.noFly = true;

	// World objects
	setupScene();
	
	// Artificial Intelligence
	setupAI();
	setupAI2();
	
	// Handle drawing as WebGL (faster than Canvas but less supported)
	renderer = new t.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	
	// Add the canvas to the document
	renderer.domElement.style.backgroundColor = '#D6F1FF'; // easier to see
	document.body.appendChild(renderer.domElement);
	
	// Track mouse position so we know where to shoot
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	
	// Shoot on click
	$(document).click(function(e) {
		e.preventDefault;
		if (e.which === 1) { // Left click only
			createBullet();
		}
	});
	

	// Display HUD
	$('body').append('<canvas id="radar" width="200" height="200"></canvas>');
	$('body').append('<div id="hud"><p>Health: <span id="health">100</span><br />Score: <span id="score">0</span></p><p>Coins: <span id="coins">0</span></p></div>');
	//$('body').append('<div id="credits"><p>Created by <a href="http://www.isaacsukin.com/">Isaac Sukin</a> using <a href="http://mrdoob.github.com/three.js/">Three.js</a><br />WASD to move, mouse to look, click to shoot</p></div>');
	
	// Set up "hurt" flash
	$('body').append('<div id="hurt"></div>');
	$('#hurt').css({width: WIDTH, height: HEIGHT,});
}

// Helper function for browser frames
function animate() {
	if (runAnim) {
		requestAnimationFrame(animate);
	}
	render();
}

// new t.ColladaLoader().load('models/spider.dae', function(collada) {
// 	model = collada.scene;
// 	skin = collada.skins[0];
// 	model.scale.set(100, 100, 100);
// 	model.rotation.x = 30;
// 	model.rotation.z = 185;
// 	model.position.set(2000, 100, 3000);


// });
//     function updateAngle(model){
// 	var dx = cam.x - this.x;
// 	console.log("this code is reached");
// 	this.dy = cam.y - this.y;
// 	this.distance = Math.sqrt((this.dx*this.dx) + (this.dy*this.dy));
// 	this.angle = Math.atan2(this.dy,this.dx) * 180 / Math.PI;
//   }
// 	this.UpdateSpeed = function() {
// 	this.speedX = this.speed * (this.dx/this.distance);
// 	this.speedY = this.speed * (this.dy/this.distance);
//   }
//   this.Move = function() {
// 	this.UpdateAngle();
// 	this.UpdateSpeed();
// 	console.log("reached")
// 	this.x += this.speedX;
// 	this.y += this.speedY;
//   }

// function zombieAi()
// {



// 	scene.add(model);
// }

// Update and display
function render() {
	var scene = this.scene;


	//cam.add(model)
	// model.position.set(0, -120, 0)


	// zombieAi();



	//scene.add(model);


	var delta = clock.getDelta(), speed = delta * BULLETMOVESPEED;
	var aispeed = delta * MOVESPEED;
	controls.update(delta); // Move camera
	movement=MOVESPEED;
	looking=LOOKSPEED;
	// Rotate the health cube
	healthcube.rotation.x += 0.004
	healthcube.rotation.y += 0.008;
	// Allow picking it up once per minute
	
	if (distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) < 15 ) {
		
		
		speedPickup = Date.now();
	}
		time_elapsed=Date.now()-speedPickup;
		// while(Date.now() - speedPickup <20000){
		// 	controls.movementSpeed=800;
		// }
		// controls.movementSpeed = 200;
		limit=5000;
		//if (time_elapse>limit) {
		if((time_elapsed<limit)&&distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) < 500){
			controls.movementSpeed=800;
			
		}
		
		else if(time_elapsed>limit&&distance(cam.position.x, cam.position.z, speedBoost.position.x, speedBoost.position.z) > 500){
			controls.movementSpeed=400;
			
		}
	


	
		if (distance(cam.position.x, cam.position.z, healthcube.position.x, healthcube.position.z) < 15 && health != 100) {
			health = Math.min(health + 50, 100);
			$('#health').html(health);
			
			lastHealthPickup = Date.now();
			
		}
	
	
	// else {
	// 	health=health;
	// }
	
	
		if (distance(cam.position.x, cam.position.z, coin.position.x, coin.position.z) < 10) {
			
			coins = coins+1;
			//$('#health').html(health);
			$('#coins').html(coins);
			lastCoinPickup = Date.now();
			scene.remove(coin);
		}
		
		if (distance(cam.position.x, cam.position.z, coin1.position.x, coin1.position.z) < 10 ) {
			
			coins = coins+1;
			//$('#health').html(health);
			$('#coins').html(coins);
			lastCoinPickup = Date.now();
			scene.remove(coin1);
		}
		
		if (distance(cam.position.x, cam.position.z, coin2.position.x, coin2.position.z) < 10 ) {
			
			coins = coins+1;
			//$('#health').html(health);
			$('#coins').html(coins);
			lastCoinPickup = Date.now();
			scene.remove(coin2);
		}
		
		if (distance(cam.position.x, cam.position.z, coin3.position.x, coin3.position.z) < 10) {
			
			coins = coins+1;
			//$('#health').html(health);
			$('#coins').html(coins);
			lastCoinPickup = Date.now();
			scene.remove(coin3);
		}
		
		if(coins>0&&distance(cam.position.x, cam.position.z, door.position.x, door.position.z) <15){
			scene.remove(door);
			
		}

		
	

	// Update bullets. Walk backwards through the list so we can remove items.
	for (var i = bullets.length-1; i >= 0; i--) {
		var b = bullets[i], p = b.position, d = b.ray.direction;
		if (checkWallCollision(p)) {
			bullets.splice(i, 1);
			scene.remove(b);
			continue;
		}
		// Collide with AI
		var hit = false;
		for (var j = aiList.length-1; j >= 0; j--) {
			var aiListElement = aiList[j];
			var vertices = aiListElement.geometry.vertices[0];
			var c = aiListElement.position;
			var x = Math.abs(vertices.x), z = Math.abs(vertices.z);
			//console.log(Math.round(p.x), Math.round(p.z), c.x, c.z, x, z);
			if (p.x < c.x + x && p.x > c.x - x &&
					p.z < c.z + z && p.z > c.z - z &&
					b.owner != aiListElement) {
				bullets.splice(i, 1);
				scene.remove(b);
				aiListElement.health -= PROJECTILEDAMAGE;
				var color = aiListElement.material.color, percent = aiListElement.health / 100;
				aiListElement.material.color.setRGB(
						percent * color.r,
						percent * color.g,
						percent * color.b
				);
				hit = true;
				break;
			}
		}
		// Bullet hits player
		if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
			$('#hurt').fadeIn(75);
			health -= 10;
			if (health < 0) health = 0;
			val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
			$('#health').html(val);
			bullets.splice(i, 1);
			scene.remove(b);
			$('#hurt').fadeOut(350);
		}
		if (!hit) {
			b.translateX(speed * d.x);
			//bullets[i].translateY(speed * bullets[i].direction.y);
			b.translateZ(speed * d.z);
		}
	}
	
	// Update AI.
	for (var i = aiList.length-1; i >= 0; i--) {
		var a = aiList[i];
		if (a.health <= 0) {
			aiList.splice(i, 1);
			scene.remove(a);
			kills++;
			$('#score').html(kills * 100);
			//addAI();
		}
		// Move AI
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
			aiList.splice(i, 1);
			scene.remove(a);
			//addAI();
			
			
		}
		/*
		var c = getMapSector(a.position);
		if (a.pathPos == a.path.length-1) {
			console.log('finding new path for '+c.x+','+c.z);
			a.pathPos = 1;
			a.path = getAIpath(a);
		}
		var dest = a.path[a.pathPos], proportion = (c.z-dest[1])/(c.x-dest[0]);
		a.translateX(aispeed * proportion);
		a.translateZ(aispeed * 1-proportion);
		console.log(c.x, c.z, dest[0], dest[1]);
		if (c.x == dest[0] && c.z == dest[1]) {
			console.log(c.x+','+c.z+' reached destination');
			a.PathPos++;
		}
		*/
		var cc = getMapSector(cam.position);
		if (Date.now() > a.lastShot + 750 && distance(c.x, c.z, cc.x, cc.z) < 2) {
			createBullet(a);
			a.lastShot = Date.now();
		}
	
	}

	for (var i = bullets.length-1; i >= 0; i--) {
		var b = bullets[i], p = b.position, d = b.ray.direction;
		if (checkWallCollision(p)) {
			bullets.splice(i, 1);
			scene.remove(b);
			continue;
		}
		// Collide with AI
		var hit = false;
		for (var j = aiList.length-1; j >= 0; j--) {
			var aiListElement = aiList[j];
			var vertices = aiListElement.geometry.vertices[0];
			var c = aiListElement.position;
			var x = Math.abs(vertices.x), z = Math.abs(vertices.z);
			//console.log(Math.round(p.x), Math.round(p.z), c.x, c.z, x, z);
			if (p.x < c.x + x && p.x > c.x - x &&
					p.z < c.z + z && p.z > c.z - z &&
					b.owner != aiListElement) {
				bullets.splice(i, 1);
				scene.remove(b);
				aiListElement.health -= PROJECTILEDAMAGE;
				var color = aiListElement.material.color, percent = aiListElement.health / 100;
				aiListElement.material.color.setRGB(
						percent * color.r,
						percent * color.g,
						percent * color.b
				);
				hit = true;
				break;
			}
		}
		// Bullet hits player
		if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
			$('#hurt').fadeIn(75);
			health -= 10;
			if (health < 0) health = 0;
			val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
			$('#health').html(val);
			bullets.splice(i, 1);
			scene.remove(b);
			$('#hurt').fadeOut(350);
		}
		if (!hit) {
			b.translateX(speed * d.x);
			//bullets[i].translateY(speed * bullets[i].direction.y);
			b.translateZ(speed * d.z);
		}
	}
	
	// Update AI.
	for (var i = aiList2.length-1; i >= 0; i--) {
		var a = aiList2[i];
		if (a.health <= 0) {
			aiList2.splice(i, 1);
			scene.remove(a);
			kills++;
			$('#score').html(kills * 100);
			//addAI();
		}
		// Move AI
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

		
		/*
		var c = getMapSector(a.position);
		if (a.pathPos == a.path.length-1) {
			console.log('finding new path for '+c.x+','+c.z);
			a.pathPos = 1;
			a.path = getAIpath(a);
		}
		var dest = a.path[a.pathPos], proportion = (c.z-dest[1])/(c.x-dest[0]);
		a.translateX(aispeed * proportion);
		a.translateZ(aispeed * 1-proportion);
		console.log(c.x, c.z, dest[0], dest[1]);
		if (c.x == dest[0] && c.z == dest[1]) {
			console.log(c.x+','+c.z+' reached destination');
			a.PathPos++;
		}
		*/
		var cc = getMapSector(cam.position);
		if (Date.now() > a.lastShot + 750 && distance(c.x, c.z, cc.x, cc.z) < 2) {
			createBullet(a);
			a.lastShot = Date.now();
		}

		
	// Update bullets. Walk backwards through the list so we can remove items.
	for (var i = bullets.length-1; i >= 0; i--) {
		var b = bullets[i], p = b.position, d = b.ray.direction;
		if (checkWallCollision(p)) {
			bullets.splice(i, 1);
			scene.remove(b);
			continue;
		}
		// Collide with AI
		var hit = false;
		for (var j = aiList2.length-1; j >= 0; j--) {
			var aiListElement = aiList2[j];
			//var vertices = aiListElement.geometry.vertices[0];
			var c = aiListElement.position;
			var x = Math.abs(vertices2.x), z = Math.abs(vertices2.z);
			//console.log(Math.round(p.x), Math.round(p.z), c.x, c.z, x, z);
			console.log(" if statement reached")
			if (p.x < c.x + x && p.x > c.x - x &&
					p.z < c.z + z && p.z > c.z - z &&
					b.owner != aiListElement) {
	
				bullets.splice(i, 1);
				scene.remove(b);
				aiListElement.health -= PROJECTILEDAMAGE;
				// var color = aiListElement.material.color, percent = aiListElement.health / 100;
				// aiListElement.material.color.setRGB(
				// 		percent * color.r,
				// 		percent * color.g,
				// 		percent * color.b
				// );
				hit = true;
				console.log("hit")
				break;
			}
		}
		// Bullet hits player
		if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
			$('#hurt').fadeIn(75);
			health -= 10;
			if (health < 0) health = 0;
			val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
			$('#health').html(val);
			bullets.splice(i, 1);
			scene.remove(b);
			$('#hurt').fadeOut(350);
		}
		if (!hit) {
			b.translateX(speed * d.x);
			//bullets[i].translateY(speed * bullets[i].direction.y);
			b.translateZ(speed * d.z);
		}
	}
	
	
	}

	renderer.render(scene, cam); // Repaint
	
	// Death
	if (health <= 0) {
		runAnim = false;
		$(renderer.domElement).fadeOut();
		$('#radar, #hud, #credits').fadeOut();
		$('#intro').fadeIn();
		$('#intro').html('Ouch! Click to restart...');
		$('#intro').one('click', function() {
			location = location;
			/*
			$(renderer.domElement).fadeIn();
			$('#radar, #hud, #credits').fadeIn();
			$(this).fadeOut();
			runAnim = true;
			animate();
			health = 100;
			$('#health').html(health);
			kills--;
			if (kills <= 0) kills = 0;
			$('#score').html(kills * 100);
			cam.translateX(-cam.position.x);
			cam.translateZ(-cam.position.z);
			*/
		});
	}
}

// Set up the objects in the world

function setupScene() {
	
	var UNITSIZE = 500, units = mapW;
	
	
	// Geometry: floor
	/*var floor = new t.Mesh(
			new t.CubeGeometry(2500, 10, 2500),
			new t.MeshLambertMaterial({color: 0x66FF00,map: t.ImageUtils.loadTexture('images/floor-1.jpg')})
	);
	scene.add(floor);
	*/

	var img = new t.MeshLambertMaterial({
		
		map:t.ImageUtils.loadTexture('images/floorstones.jpg')
	});
	// plane
	var plane = new t.Mesh(new t.CubeGeometry(units*UNITSIZE,10,units*UNITSIZE),img);
	plane.scale.set(2,2,2);
	plane.overdraw = true;
	scene.add(plane);

	// Geometry: walls
	//var cube = new t.CubeGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
	//var materials =
	                 new t.MeshLambertMaterial({/*color: 0x00CCAA,*/map: t.ImageUtils.loadTexture('images/wall-1.jpg')});
	                 //new t.MeshLambertMaterial({/*color: 0xC5EDA0,*/map: t.ImageUtils.loadTexture('images/wall-2.jpg')}),
	                // new t.MeshLambertMaterial({color: 0xFBEBCD}),
	                 

	for (var i = 0; i < mapW; i++) {
		
		for (var j = 0, m = map[i].length; j < m; j++) {
			if (map[i][j]) {
				//for (k=10;k>-1;k--){
				
				var cube = new t.CubeGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
				var materials = new t.MeshLambertMaterial({/*color: 0x660000,*/map: t.ImageUtils.loadTexture('images/scifi_walls.jpg')});
					
				
				var wall = new t.Mesh(cube, materials);
				
				
				wall.position.x = (i - units/2) * UNITSIZE;
				wall.position.y = WALLHEIGHT/2;
				wall.position.z = (j - units/2) * UNITSIZE;

				scene.add(wall);
				//}
			}
		}
	}
	
	// Health cube
	healthcube = new t.Mesh(
			new t.CubeGeometry(30, 30, 30),
			new t.MeshBasicMaterial({map: t.ImageUtils.loadTexture('images/health.png')})
	);
	healthcube.position.set(-UNITSIZE-15, 55, -UNITSIZE-15);
	healthcube.scale.set(2,2,2);
	scene.add(healthcube);

	door = new t.Mesh(
		new t.CubeGeometry(50, 55, 50),
		new t.MeshBasicMaterial({map: t.ImageUtils.loadTexture('images/medieval_door.jpg')})
	);
	door.position.set(350, 145, 1750);
	door.scale.set(0.5,5,15);
	scene.add(door);
		
	speedBoost= new t.Mesh(
		new t.SphereGeometry(10,10,10),
		new t.MeshBasicMaterial({map: t.ImageUtils.loadTexture('images/Flash_Logo_01.png')})
	);
	speedBoost.position.set(-UNITSIZE+200, 55, -UNITSIZE+200);
	speedBoost.scale.set(2,2,2);
	scene.add(speedBoost);

coin = new t.Mesh(
        new t.CubeGeometry(10, 10, 10),
        new t.MeshNormalMaterial());
		coin.position.set(650, 55, 1900);
		coin.scale.set(2,2,2);
		scene.add(coin);
		
coin1 = new t.Mesh(
		new t.CubeGeometry(10, 10, 10),
		new t.MeshNormalMaterial());
		coin1.position.set(2300, 55, 2300);
		coin1.scale.set(2,2,2);			
		scene.add(coin1);

coin2 = new t.Mesh(
		new t.CubeGeometry(10, 10, 10),
		new t.MeshNormalMaterial());
		coin2.position.set(-UNITSIZE-100, 55, -UNITSIZE-100);
		coin2.scale.set(2,2,2);				
		scene.add(coin2);

coin3 = new t.Mesh(
		new t.CubeGeometry(10, 10, 10),
		new t.MeshNormalMaterial());
		coin3.position.set(-UNITSIZE-550, 55, -UNITSIZE-550);
		coin3.scale.set(2,2,2);					
		scene.add(coin3);


// Mesh cloned a bunch of times from original


	
	// Lighting
	var directionalLight1 = new t.DirectionalLight( 0xF7EFBE, 0.7 );
	directionalLight1.position.set( 0.5, 1, 0.5 );
	scene.add( directionalLight1 );
	var directionalLight2 = new t.DirectionalLight( 0xF7EFBE, 0.5 );
	directionalLight2.position.set( -0.5, -1, -0.5 );
	scene.add( directionalLight2 );
	

}

var aiList = [];

var aiGeometry  = new t.CubeGeometry(40, 40, 40);

function setupAI() {
	for (var i = 0; i < NUMAI; i++) {
		//addAI();
		
	}

}

new t.ColladaLoader().load('models/spider.dae', function(collada) {
	model = collada.scene;
	skin = collada.skins[0];
	model.scale.set(10, 10, 10);
	//  model.rotation.x = 30;
	 // model.rotation.z = 185;
	model.position.set(2000, 55, 3000);


});
var aiList2=[];
var vertices2;
function setupAI2() {
	for (var i = 0; i < NUMAI; i++) {
		addAI2();
	}

}
//Create a new BoxGeometry with dimensions 1 x 1 x 1
function addAI2() {
	var c = getMapSector(cam.position);
	var aiMaterial = new t.MeshBasicMaterial({/*color: 0xEE3333,*/map: t.ImageUtils.loadTexture('images/face.png')});
	
	var enemy = new t.Mesh(aiGeometry, aiMaterial);
	



	do {
		var x = getRandBetween(0, mapW-1);
		var z = getRandBetween(0, mapH-1);
	} while (map[x][z] > 0 || (x == c.x && z == c.z));
	x = Math.floor(x - mapW/2) * UNITSIZE;
	z = Math.floor(z - mapW/2) * UNITSIZE;
	
	model.position.set(x, UNITSIZE * 0.15, z);
	model.health = 100;
	 // Higher-fidelity timers aren't a big deal here.
	
	model.pathPos = 1;
	model.lastRandomX = Math.random();
	model.lastRandomZ = Math.random();
	model.lastShot = Date.now(); // Higher-fidelity timers aren't a big deal here.

	// added by me

	

	// modelEnemy.position.set(200, UNITSIZE * 0.15, 200);
	// modelEnemy.health = 100;
	// modelEnemy.pathPos = 1;
	// modelEnemy.lastRandomX = 300;
	// modelEnemy.lastRandomZ = 300;
	// modelEnemy.lastShot = Date.now();
	vertices2 = enemy.geometry.vertices[0];

	// console.log(modelEnemy.position)

	aiList2.push(model);
	
	scene.add(model);

}



function addAI() {
	var c = getMapSector(cam.position);
	var aiMaterial = new t.MeshBasicMaterial({/*color: 0xEE3333,*/map: t.ImageUtils.loadTexture('images/face.png')});
	
	var enemy = new t.Mesh(aiGeometry, aiMaterial);
	
	var modelEnemy = model;
	//enemy = modelEnemy;



	do {
		var x = getRandBetween(0, mapW-1);
		var z = getRandBetween(0, mapH-1);
	} while (map[x][z] > 0 || (x == c.x && z == c.z));
	x = Math.floor(x - mapW/2) * UNITSIZE;
	z = Math.floor(z - mapW/2) * UNITSIZE;
	
	enemy.position.set(x, UNITSIZE * 0.15, z);
	enemy.health = 100;
	 // Higher-fidelity timers aren't a big deal here.
	
	enemy.pathPos = 1;
	enemy.lastRandomX = Math.random();
	enemy.lastRandomZ = Math.random();
	enemy.lastShot = Date.now(); // Higher-fidelity timers aren't a big deal here.

	// added by me

	

	// modelEnemy.position.set(200, UNITSIZE * 0.15, 200);
	// modelEnemy.health = 100;
	// modelEnemy.pathPos = 1;
	// modelEnemy.lastRandomX = 300;
	// modelEnemy.lastRandomZ = 300;
	// modelEnemy.lastShot = Date.now();
	// vertices = enemy.geometry.vertices[0];

	// console.log(modelEnemy.position)

	aiList.push(enemy);
	scene.add(enemy);

}

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

/**
 * Find a path from one grid cell to another.
 *
 * @param sX
 *   Starting grid x-coordinate.
 * @param sZ
 *   Starting grid z-coordinate.
 * @param eX
 *   Ending grid x-coordinate.
 * @param eZ
 *   Ending grid z-coordinate.
 * @returns
 *   An array of coordinates including the start and end positions representing
 *   the path from the starting cell to the ending cell.
 */
function findAIpath(sX, sZ, eX, eZ) {
	var backupGrid = grid.clone();
	var path = finder.findPath(sX, sZ, eX, eZ, grid);
	grid = backupGrid;
	return path;
}

function distance(x1, y1, x2, y2) {
	return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

function getMapSector(v) {
	var x = Math.floor((v.x + UNITSIZE / 2) / UNITSIZE + mapW/2);
	var z = Math.floor((v.z + UNITSIZE / 2) / UNITSIZE + mapW/2);
	return {x: x, z: z};
}

/**
 * Check whether a Vector3 overlaps with a wall.
 *
 * @param v
 *   A THREE.Vector3 object representing a point in space.
 *   Passing cam.position is especially useful.
 * @returns {Boolean}
 *   true if the vector is inside a wall; false otherwise.
 */
function checkWallCollision(v) {
	var c = getMapSector(v);
	return map[c.x][c.z] > 0;
}

// Radar
function drawRadar() {
	var c = getMapSector(cam.position), context = document.getElementById('radar').getContext('2d');
	context.font = '10px Helvetica';
	for (var i = 0; i < mapW; i++) {
		for (var j = 0, m = map[i].length; j < m; j++) {
			var d = 0;
			for (var k = 0, n = aiList.length; k < n; k++) {
				var e = getMapSector(aiList[k].position);
				if (i == e.x && j == e.z) {
					d++;
				}
			}
			if (i == c.x && j == c.z && d == 0) {
				context.fillStyle = '#0000FF';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
			else if (i == c.x && j == c.z) {
				context.fillStyle = '#AA33FF';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*20+8, j*20+12);
			}
			else if (d > 0 && d < 10) {
				context.fillStyle = '#FF0000';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*20+8, j*20+12);
			}
			else if (map[i][j] > 0) {
				context.fillStyle = '#666666';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
			else {
				context.fillStyle = '#CCCCCC';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
		}
	}
}

var bullets = [];
var sphereMaterial = new t.MeshBasicMaterial({color: 0x00FFFFFF});
var sphereGeo = new t.SphereGeometry(2, 6, 6);
function createBullet(obj) {
	if (obj === undefined) {
		obj = cam;
	}
	var sphere = new t.Mesh(sphereGeo, sphereMaterial);
	sphere.position.set(obj.position.x, obj.position.y * 0.8, obj.position.z);

	if (obj instanceof t.Camera) {
		var vector = new t.Vector3(mouse.x, mouse.y, 1);
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

/*
function loadImage(path) {
	var image = document.createElement('img');
	var texture = new t.Texture(image, t.UVMapping);
	image.onload = function() { texture.needsUpdate = true; };
	image.src = path;
	return texture;
}
*/

function onDocumentMouseMove(e) {
	e.preventDefault();
	mouse.x = (e.clientX / WIDTH) * 2 - 1;
	mouse.y = - (e.clientY / HEIGHT) * 2 + 1;
}

// Handle window resizing
$(window).resize(function() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	ASPECT = WIDTH / HEIGHT;
	if (cam) {
		cam.aspect = ASPECT;
		cam.updateProjectionMatrix();
	}
	if (renderer) {
		renderer.setSize(WIDTH, HEIGHT);
	}
	$('#intro, #hurt').css({width: WIDTH, height: HEIGHT,});
});

// Stop moving around when the window is unfocused (keeps my sanity!)
$(window).focus(function() {
	if (controls) controls.freeze = false;
});
$(window).blur(function() {
	if (controls) controls.freeze = true;
});

//Get a random integer between lo and hi, inclusive.
//Assumes lo and hi are integers and lo is lower than hi.
function getRandBetween(lo, hi) {
 return parseInt(Math.floor(Math.random()*(hi-lo+1))+lo, 10);
}



