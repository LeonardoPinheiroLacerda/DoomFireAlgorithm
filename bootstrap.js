const firePixelsMatriz = [];

const canvasWidth = 1080;
const canvasHeight = 720;

const fireWidth = canvasWidth / 4;
const fireHeight = canvasHeight / 4;


const frameSpeed = 40;

const renderer = new FireCanvasRenderer(firePixelsMatriz, fireWidth, fireHeight, canvasWidth, canvasHeight);
if(renderer.pixelHeight !== renderer.pixelWidth){
    console.warn({message: 'pixels retangulares', height: renderer.pixelHeight, width: renderer.pixelWidth})
}

const canvas = document.querySelector("#canvas");

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
const pecil = new FireCanvasPencil(firePixelsMatriz ,canvas, fireWidth, fireHeight, 
    {
        pencilWidth: 10,
        pencilBaseColor: 36
    }
);

function bootstrap(frameSpeed) {
    dataStructureCreator.create();
    sourceCreator.create();

    setInterval(() => processor.calculateFirePropagation(), frameSpeed);

    renderer.renderFire();
    pencil.init();
}

bootstrap(frameSpeed);