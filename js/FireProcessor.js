class FireProcessor {
    constructor(firePixelsArray, renderer){
        this.firePixelsArray = firePixelsArray;
        this.renderer = renderer;
    }

    calculateFirePropagation() {
        for(let column = 0; column < fireWidth; column ++) {
            for(let row = 0; row< fireHeight; row ++) {
                const pixelIndex = column + (fireWidth * row);
                this.updateFireIntensityPerPixel(pixelIndex);
            }
        }
        this.renderer.renderFire();
    }
    
    updateFireIntensityPerPixel(currentPixelIndex) {
        const belowPixelIndex = currentPixelIndex + fireWidth;
    
        if(belowPixelIndex >= fireWidth * fireHeight) {
            return;
        }
    
        const decay = Math.floor(Math.random() * 3);
        const belowPixelFireIntesity = this.firePixelsArray[belowPixelIndex];
        const newFireIntensity = 
            belowPixelFireIntesity - decay >= 0 ? belowPixelFireIntesity - decay : 0;
    
        this.firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
    }
}