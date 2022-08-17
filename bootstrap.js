const firePixelsArray = [];
const fireWidth = 100;
const fireHeight = 50;

const frameSpeed = 40;

const debug = false;

let renderer;

if(debug){
    renderer = new FireDebugRenderer();
}else{
    renderer = new FireRenderer();
}

const dataStructureCreator = new FireDataStructureCreator(firePixelsArray, fireWidth, fireHeight);
const sourceCreator = new FireSourceCreator(firePixelsArray);
const processor = new FireProcessor(firePixelsArray, renderer);

function bootstrap() {
    dataStructureCreator.create();
    sourceCreator.create();

    setInterval(() => processor.calculateFirePropagation(), frameSpeed);
}

bootstrap();