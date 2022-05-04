var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'shere' shape to represent the eye.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {size: 10}, scene); 
    // Move the box upward 1/2 its height
    sphere.position.y = 1;
    //sphere.rotation.x  = 2*Math.PI/3 ;
    //creates eye texture on sphere
    var mat = new BABYLON.StandardMaterial("mat", scene);
    var url1 = "media/eye.png";
    mat.diffuseTexture = new BABYLON.Texture(url1, scene);
    sphere.material = mat; 

    sphere.rotation.x  = 2;
    sphere.rotation.y  = 4;
    sphere.rotation.z  = 2;
    
    
    //creates animation to move eye
    var move_sphere = {obj: sphere,prop:'position',
val: new BABYLON.Vector3(0,3,4),dims:['x','y','z']};
    
    //creates animation to rotate eye
    var rot_sphere = {obj: sphere,prop:'rotation',
val: new BABYLON.Vector3(-16.2,5,0),dims:['x','y','z']};


//create array of animations
var animations = [];

//add sphere and light animations to array
animations.push(move_sphere);
animations.push(rot_sphere);


//excute animations
document.getElementById('renderCanvas').addEventListener('click',function(){animate(animations,scene,4)});

// Our built-in 'ground' shape.
var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

// GUI
var plane = BABYLON.Mesh.CreatePlane("plane", 2);
plane.parent = ground;
plane.position.y = 1;
plane.position.z = -5;

var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

//Creates button representing first line verse of poem
var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "how you fought your way out of their words");
button1.width = 1;
button1.height = 0.4;
button1.color = "black";
button1.fontSize = 50;
button1.background = "red";
button1.onPointerUpObservable.add(function() {
    nextline("how you taught your eyes to look away!",0,1,0);
});
advancedTexture.addControl(button1);



//produces second text box
function nextline(quote,xpos,ypos,zpos){
    //creates reference plane|GUI
    var plane1 = BABYLON.Mesh.CreatePlane("plane", 2);
    //positions plane
    plane1.parent = ground;
    plane1.position.y = ypos;
    plane1.position.z = zpos;
    plane1.position.x = xpos;

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane1);
    //CREATEs button on plane
    var button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", quote);
    button2.width = 1;
    button2.height = 0.4;
    button2.color = "black";
    button2.fontSize = 50;
    button2.background = "red";
    
    
    advancedTexture.addControl(button2);
}

    return scene;
};
        window.initFunction = async function() {
            
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
