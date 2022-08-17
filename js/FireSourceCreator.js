class FireSourceCreator {

    constructor(pixelsArray){
        this.pixelsArray = pixelsArray;
    }

    create() {
        for(let column = 0; column <= fireWidth; column ++){
            const overflowPixelIndex = fireWidth * fireHeight;
            const pixelIndex = (overflowPixelIndex - fireWidth) + column;
    
            this.pixelsArray[pixelIndex] = 36;
        }
    }

}