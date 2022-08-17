class FireDebugRenderer extends BaseFireRenderer {

    /**
     * Renderiza os pixels em forma de tabela para debug
     * @param {String | Undefined} divId 
     */
    renderFire(divId = 'fire-canvas') {
        let html = '<table cellpadding=0 cellspacing=0>';
        for(let row = 0; row < this.fireHeight; row ++){
            html += '<tr>';
            for(let column = 0; column < this.fireWidth; column ++){
                const fireIntensity = this.firePixelsMatriz[row][column];
    
                const color = this.fireColorsPalette[fireIntensity];
                const colorString = `${color.r}, ${color.g}, ${color.b}`;
    
                html += `<td style="background-color: #555; color: rgb(${colorString})">`;
                html += `<div class='pixel-index'>(${row},${column})</div>`;
                html += fireIntensity
                html += '</td>';
            }
            html += '</tr>'
        }
        html += '</table>';
    
        const fireCanvas = document.querySelector(`#${divId}`);
        fireCanvas.innerHTML = html;
    }
}