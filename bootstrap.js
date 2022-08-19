const firePixelsMatriz = [];

const canvasWidth = 1080;
const canvasHeight = 720;

const fireWidth = canvasWidth / 4;
const fireHeight = canvasHeight / 4;


const frameSpeed = 40;

var renderer;
var canvas;
var dataStructureCreator;
var sourceCreator;
var processor;
var pencil;
var controller;

function bootstrap(frameSpeed) {

    renderer = new FireCanvasRenderer(firePixelsMatriz, fireWidth, fireHeight, canvasWidth, canvasHeight);
    canvas = document.querySelector("#canvas");
    
    dataStructureCreator = new FireDataStructureCreator(firePixelsMatriz, fireWidth, fireHeight);
    sourceCreator = new FireSourceCreator(firePixelsMatriz, 
        {
            sourceFireBrightness: 36
        }
    );
    processor = new FireProcessor(firePixelsMatriz, renderer, 
        {
            windDirection: 'right',
            intensity: 2
        }
    );
    pencil = new FireCanvasPencil(firePixelsMatriz ,canvas, fireWidth, fireHeight, 
        {
            pencilWidth: 5,
            pencilBaseColor: 36
        }
    );

    dataStructureCreator.create();

    setInterval(() => processor.calculateFirePropagation(), frameSpeed);

    renderer.renderFire();
    pencil.init();

    controller = new FireController(sourceCreator, processor, pencil);
}

function toggleFireSource() {
    if(!controller.isFireOn){
        controller.lightTheFire();
    }else{
        controller.putOutTheFire();
    }
}




bootstrap(frameSpeed);