const firePixelsMatriz = [];
const fireWidth = 100
const fireHeight = 50;

const frameSpeed = 40;

const debug = false;

let renderer;

if(debug){
    renderer = new FireDebugRenderer(firePixelsMatriz, fireWidth, fireHeight);
}else{
    renderer = new FireRenderer(firePixelsMatriz, fireWidth, fireHeight);
}

const dataStructureCreator = new FireDataStructureCreator(firePixelsMatriz, fireWidth, fireHeight);
const sourceCreator = new FireSourceCreator(firePixelsMatriz, 
    {
        baseFireBrightness: 36
    }
);
const processor = new FireProcessor(firePixelsMatriz, renderer, 
    {
        windDirection: 'right',
        intensity: 3
    }
);

function bootstrap(frameSpeed) {
    dataStructureCreator.create();
    sourceCreator.create();

    setInterval(() => processor.calculateFirePropagation(), frameSpeed);

    renderer.renderFire();    
}

bootstrap(frameSpeed);