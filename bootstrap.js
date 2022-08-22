const firePixelsMatriz = [];

const canvasWidth = document.body.clientWidth;
const canvasHeight = canvasWidth * .4;

const pixelSize = canvasWidth / 300;

const fireWidth = canvasWidth / pixelSize;
const fireHeight = canvasHeight / pixelSize;

const frameSpeed = 30;

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

function toggleFireDirection() {
    if(!controller.isFireOn){
        controller.lightTheFire();
    }else{
        controller.putOutTheFire();
    }
}

function minIntensity(){
    controller.minFireStage();
}

function maxIntensity(){
    controller.maxFireStage();
}

function decreaseIntesity(){
    controller.increaseFireStage();
}

function increaseIntesity(){
    controller.decreaseFireStage();
}

function alternateWindDirection() {
    controller.toogleWindDirection();
}

function setPencilWidth(width){
    controller.setPencilWidth(width)
}

bootstrap(frameSpeed);