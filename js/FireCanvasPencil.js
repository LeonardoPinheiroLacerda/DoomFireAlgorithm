class FireCanvasPencil {

    constructor(firePixelsMatriz ,canvas, fireWidth, fireHeight, options = {}){
        this.canvas = canvas;
        //this.pressed = false;
        //this.holding = false;

        this.fireHeight = fireHeight;
        this.fireWidth = fireWidth;

        this.firePixelsMatriz = firePixelsMatriz;

        this.pencilWidth = options.pencilWidth ?
            options.pencilWidth : 5

        this.pencilBaseColor = options.pencilBaseColor ?
            options.pencilBaseColor : 36;
    }

    init() {
        const getPixelPositionByOffset = (offsetX, offsetY) => {
            const pixelWidth = this.canvas.width / this.fireWidth;
            const pixelHeight = this.canvas.height / this.fireHeight;

            const row = Math.floor(offsetY / pixelHeight);
            const column = Math.floor(offsetX / pixelWidth);

            return {row, column};
        }

        const generateFireSource = (row, column) => {
            if(row + this.pencilWidth + 1 >= this.firePixelsMatriz.length) return;

            for(let i = row - this.pencilWidth; i <= row + this.pencilWidth; i ++){
                for(let j = column - this.pencilWidth; j <= column + this.pencilWidth; j ++){
                    this.firePixelsMatriz[i][j] = this.pencilBaseColor;
                }   
            }

        }

        // this.canvas.addEventListener('mousedown', ({offsetX, offsetY}) => {
        //     this.pressed = true;
        //     this.holding = true;            
        // });

        // this.canvas.addEventListener('mouseup', ({offsetX, offsetY}) => {
        //     this.pressed = false;
        // });

        // this.canvas.addEventListener('mouseout', ({offsetX, offsetY}) => {
        //     this.pressed = false;
        // });

        this.canvas.addEventListener('mousemove', ({offsetX, offsetY}) => {
            
            //if(this.pressed){
                const {row, column} = getPixelPositionByOffset(offsetX, offsetY);
                generateFireSource(row, column);
            //}
        });
    }

}