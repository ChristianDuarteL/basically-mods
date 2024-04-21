interface AverageRGBFromZoneOptions{
    accuracy: number;
}

function getAverageRGBFromZone(zone: ImageData, opts: AverageRGBFromZoneOptions) {
    var rgb = {r:0,g:0,b:0},
    len = zone.data.length,
    count = 0,
    i = -4;
    
    var blockSize = opts.accuracy;
    
    while ((i += blockSize * 4) < len ) {
        ++count;
        if(zone.data[i+3] < 255) continue;
        rgb.r += zone.data[i];
        rgb.g += zone.data[i+1];
        rgb.b += zone.data[i+2];
    }
    
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

export default function (imgEl: HTMLImageElement, _ACCURACY: number = 100, sections = [[0, 0, 1, 1]]) {
    const defaultRGB = {r:0,g:0,b:0};
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');
    
    if (!context) {
        return defaultRGB;
    }
    
    const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        return sections.map(section => getAverageRGBFromZone(context.getImageData(width * section[0], height * section[1], width * section[2], height * section[3]), {accuracy: _ACCURACY}))
    } catch(e) {
        console.log('image cannot be processed', e);
        return [defaultRGB, defaultRGB];
    }
}