class FireRenderer extends BaseFireRenderer{

    renderFire() {
        let html = '<table cellpadding=0 cellspacing=0>';
        for(let row = 0; row < fireHeight; row ++){
            html += '<tr>';
            for(let column = 0; column < fireWidth; column ++){
                const pixelIndex = column + (fireWidth * row);
                const fireIntensity = firePixelsArray[pixelIndex];
    
                const color = this.fireColorsPalette[fireIntensity];
                const colorString = `${color.r}, ${color.g}, ${color.b}`;
    
                html += `<td class="pixel" style="background-color: rgb(${colorString})">`;
                html += '</td>';

            }
            html += '</tr>'
        }
        html += '</table>';
    
        const fireCanvas = document.querySelector('#fire-canvas');
        fireCanvas.innerHTML = html;
    }

}