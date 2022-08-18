class FireCanvasRenderer extends BaseFireRenderer{


    constructor(firePixelsMatriz, fireWidth, fireHeight, canvasWidth, canvasHeight, canvas){
        super(firePixelsMatriz, fireWidth, fireHeight);
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');

        const pixelSize = this.calculatePixelSize();
        this.pixelWidth = pixelSize.w;
        this.pixelHeight = pixelSize.h;

        canvas = this.canvas;
    }

    /**
     * Renderiza os pixels em forma de tabela para debug
     * @param {String | Undefined} divId 
     */
    renderFire() {
        for(let row = 0; row < this.fireHeight; row ++){
            for(let column = 0; column < this.fireWidth; column ++){
                const pixelPosition = this.getPixelPosition(row, column);

                this.drawPixel(
                    pixelPosition.x,
                    pixelPosition.y,
                    this.firePixelsMatriz[row][column]
                );
            }
        }
    }

    createCanvas(divId = 'fire-canvas') {
        const div = document.querySelector(`#${divId}`);

        const canvas = document.createElement('canvas');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        canvas.id = 'canvas';

        div.append(canvas);

        return canvas;
    }

    calculatePixelSize() {
        const w = this.canvasWidth / this.fireWidth;
        const h = this.canvasHeight / this.fireHeight;
        return{w, h};
    }

    getPixelPosition(row, column) {
        const x = this.pixelWidth * column;
        const y = this.pixelHeight * row;
        return{x, y};
    }

    drawPixel(pixelPositionX, pixelPositionY, paletteColorIndex){
        const color = this.fireColorsPalette[paletteColorIndex];
        const colorString = `rgb(${color.r}, ${color.g}, ${color.b})`;

        this.ctx.fillStyle = colorString;
        this.ctx.fillRect(pixelPositionX, pixelPositionY, this.pixelWidth, this.pixelHeight);
    }

    


}