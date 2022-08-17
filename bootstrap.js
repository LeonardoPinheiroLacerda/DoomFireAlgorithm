const firePixelsMatriz = [];
const fireWidth = 240
const fireHeight = 73;

const canvasWidth = 720;
const canvasHeight = 220;

const frameSpeed = 40;

const debug = false;
const usingCanvas = true;

let renderer;

if(debug){
    renderer = new FireDebugRenderer(firePixelsMatriz, fireWidth, fireHeight);
}else{
    if(usingCanvas){
        renderer = new FireCanvasRenderer(firePixelsMatriz, fireWidth, fireHeight, canvasWidth, canvasHeight);

        if(renderer.pixelHeight !== renderer.pixelWidth){
            console.warn({message: 'pixels retangulares', height: renderer.pixelHeight, width: renderer.pixelWidth})
        }
    }else{
        renderer = new FireRenderer(firePixelsMatriz, fireWidth, fireHeight);
    }
}

const dataStructureCreator = new FireDataStructureCreator(firePixelsMatriz, fireWidth, fireHeight);
const sourceCreator = new FireSourceCreator(firePixelsMatriz, 
    {
        sourceFireBrightness: 36
    }
);
const processor = new FireProcessor(firePixelsMatriz, renderer, 
    {
        windDirection: 'right',
        intensity: 2
    }
);

function bootstrap(frameSpeed) {
    dataStructureCreator.create();
    sourceCreator.create();

    setInterval(() => processor.calculateFirePropagation(), frameSpeed);

    renderer.renderFire();    
}

bootstrap(frameSpeed);