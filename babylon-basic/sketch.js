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

    // Our built-in 'box' shape.
    var box1 = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene); 
    // Move the box upward 1/2 its height
    box1.position.y = 1;

    //creates animation to move box
    var move_sphere = {obj: box1,prop:'position',
val: new BABYLON.Vector3(0,4,10),dims:['x','y','z']};
    //creates animation to diffuse light
    var diffuse_light = {obj:light, prop:'diffuse', val: new BABYLON.Color3(0,128,128),
dims:['r','g','b']};
    //creates animation to rotate box
    var rot_sphere = {obj: box1,prop:'rotation',
val: new BABYLON.Vector3(3,4,0),dims:['x','y','z']};


//create array of animations
var animations = [];

//add sphere and light animations to array
animations.push(move_sphere);
animations.push(rot_sphere);
animations.push(diffuse_light);

//excute animations
document.getElementById('renderCanvas').addEventListener('click'
,function(){animate(animations,scene,4)});



    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

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