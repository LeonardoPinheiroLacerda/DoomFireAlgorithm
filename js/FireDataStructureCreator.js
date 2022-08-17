class FireDataStructureCreator {
    constructor(pixelsArray, width, height) {
        this.fireWidth = width;
        this.fireHeight = height;
        this.pixelsArray = pixelsArray;
    }

    create() {
        const numberOfPixels = this.fireWidth * this.fireHeight;

        for(let i = 0; i < numberOfPixels; i ++){
            this.pixelsArray[i] = 0;
        }
    }
    
}