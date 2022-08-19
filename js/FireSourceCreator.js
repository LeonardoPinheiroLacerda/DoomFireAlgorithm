class FireSourceCreator {

    /**
     * @param {Array} firePixelsMatriz 
     * @param {{sourceFireBrightness : Integer}} options 
     */
    constructor(firePixelsMatriz, options = {}){
        this.firePixelsMatriz = firePixelsMatriz;
        this.sourceFireBrightness = options.sourceFireBrightness ? options.sourceFireBrightness :  36;
    }

    /**
     * Cria o ponto de partida do fogo na base do canvas
     */
    do() {
        const lastRow = this.firePixelsMatriz[this.firePixelsMatriz.length - 1];
        for(let column = 0; column < lastRow.length; column ++){
            lastRow[column] = this.sourceFireBrightness;
        }
    }

    undo() {
        const lastRow = this.firePixelsMatriz[this.firePixelsMatriz.length - 1];
        for(let column = 0; column < lastRow.length; column ++){
            lastRow[column] = 0;
        }
    }

}