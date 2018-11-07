// Méthode Eliot

let imp = IJ.getImage();

for (let x = 0; x < imp.getWidth(); x++) {
    for (let y = 0; y < imp.getHeight(); y++) {

        let pixel_value = imp.getPixel(x, y);

        if (pixel_value[0] === 234 && pixel_value[1] === 63 && pixel_value[2] === 187) {

            let index = y * imp.getWidth() + x;
            IJ.log(`x: ${x}, y: ${y} ==> R:${pixel_value[0]}, G:${pixel_value[1]}, B:${pixel_value[2]}, index: ${index}`);
        }
    }
}

// Méthode Taveau

imp = IJ.getImage();
let ip = imp.getProcessor();

for (let x = 0; x < imp.getWidth(); x++) {
    for (let y = 0; y < imp.getHeight(); y++) {

        let pixel = ip.getPixel(x,y); // signed integer

        let uint = pixel >>> 0; // unsigned integer

        let blue = uint & 0xff; // filtre le dernier octet (entre le 24 et le 32ème bit)
        let green = uint >> 8 & 0xff; // décale uint d'un octet vers la droite puis filtre le dernier octet (entre le 24 et le 32ème bit)
        let red = uint >> 16 & 0xff; // décale uint de deux octet vers la droite puis filtre le dernier octet (entre le 24 et le 32ème bit)

        if (red === 234 && green === 63 && blue === 187) {

            let index = y * imp.getWidth() + x;
            IJ.log(`x: ${x}, y: ${y} ==> R:${red}, G:${green}, B:${blue}, index: ${index}`);
        }
    }
}

// The pixel is located at index= 37495 and its X,Y-coordinates are: X= 119 and Y= 146.
