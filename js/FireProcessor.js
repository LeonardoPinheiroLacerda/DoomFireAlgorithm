class FireProcessor {

    /**
     * 
     * @param {Array} firePixelsMatriz 
     * @param {BaseFireRenderer} renderer 
     * @param {{windDirection : String, intensity : Integer}} options 
     */
    constructor(firePixelsMatriz, renderer, options = {}){
        this.firePixelsMatriz = firePixelsMatriz;
        this.renderer = renderer;

        this.windDirection = 
            options.windDirection === 'right' || options.windDirection === 'left'
                ? options.windDirection : 'right';

        this.intensity = !isNaN(options.intensity) ? options.intensity : 3;

    }

    calculateFirePropagation() {
        for(let column = 0; column < fireWidth; column ++) {
            for(let row = 0; row < fireHeight; row ++) {
                this.updateFireIntensityPerPixel(row, column);
            }
        }
        this.renderer.renderFire();
    }
    
    updateFireIntensityPerPixel(row, column) {
        if(row + 1 === this.firePixelsMatriz.length) return;
            
        const rowWidth = this.firePixelsMatriz[0].length;

        /*
        Os tons de vermelho para o fogo estão distribuidos em 36 cores.
        O ideal é que o pixel de cima tenha uma cor menos quente que o pixel de baixo
        assim a animação do fogo tera uma sensação de disperção.
        decay recebe um valor aleatório da quantidade de cores que serão decrementadas
        para que a animação não seja linear
        */
        const decay = Math.floor(Math.random() * this.intensity);
        const belowPixelFireIntesity = this.firePixelsMatriz[row + 1][column];
        const newFireIntensity = 
            belowPixelFireIntesity - decay >= 0 ? belowPixelFireIntesity - decay : 0;
    

        /*
        Para termos uma sensação de vento na animação ao invéz podemos atribuir a intensidade
        da cor calculada acima para esquerda ou direita dependendo do atributo windDirection
        O movimento de esquerda ou direita é simulado pela soma ou subtração na coluna que 
        ira será atualizada
        */
        if(this.windDirection === 'left') {
            
            if(column - decay >= 0)
                this.firePixelsMatriz[row][column - decay] = newFireIntensity;
            else //Se a chama sair da tela ela deve surgir no lado contrario do canvas
                this.firePixelsMatriz[row][column - decay + rowWidth] = newFireIntensity;

        }else if(this.windDirection === 'right') {
            
            if(column + decay < rowWidth)
                this.firePixelsMatriz[row][column + decay] = newFireIntensity;
            else //Se a chama sair da tela ela deve surgir no lado contrario do canvas
                this.firePixelsMatriz[row][column + decay - rowWidth] = newFireIntensity;
        }

        
    }
}