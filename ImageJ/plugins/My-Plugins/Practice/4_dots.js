imp = IJ.getImage();

for (let x = 0; x < imp.getWidth(); x++) {
    for (let y = 0; y < imp.getHeight(); y++) {

        let pixel_value = imp.getPixel(x, y)[0]; // Renvoie la valeur du pixel(

        if (0 < pixel_value && pixel_value < 255) {

            let index = y * imp.getWidth() + x;

            IJ.log(`The pixel has a pixel value of ${pixel_value} and is located at index= ${index} and its X,Y-coordinates are: X= ${x} and Y= ${y}`);
        }
    }
}

// The pixel has a pixel value of 254 and is located at index= 62925 and its X,Y-coordinates are: X= 225 and Y= 209