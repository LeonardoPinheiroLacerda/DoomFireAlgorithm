class FireDataStructureCreator {

    /**
     * 
     * @param {Array} firePixelsMatriz 
     * @param {Integer} fireWidth 
     * @param {Integer} fireHeight 
     */
    constructor(firePixelsMatriz, fireWidth, fireHeight) {
        this.fireWidth = fireWidth;
        this.fireHeight = fireHeight;
        this.firePixelsMatriz = firePixelsMatriz;
    }

    create() {
        for(let row = 0; row < this.fireHeight; row ++){
            const pixelRow = [];
            for(let column = 0; column < this.fireWidth; column ++){
                pixelRow.push(0);
            }
            this.firePixelsMatriz.push(pixelRow);
        }
    }
    
}