class FireSourceCreator {

    /**
     * @param {Array} firePixelsMatriz 
     * @param {{baseFireBrightness : Integer}} options 
     */
    constructor(firePixelsMatriz, options = {}){
        this.firePixelsMatriz = firePixelsMatriz;
        this.baseFireBrightness = options.baseFireBrightness ? options.baseFireBrightness :  36;
    }

    /**
     * Cria o ponto de partida do fogo na base do canvas
     */
    create() {
        const lastRow = this.firePixelsMatriz[this.firePixelsMatriz.length - 1];
        for(let column = 0; column < lastRow.length; column ++){
            lastRow[column] = this.baseFireBrightness;
        }
    }

}