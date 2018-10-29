/*
* Get set pixels
* Threshold
* 2018/10/10
* Eliot Ragueneau
*/
function printPixels(imap) {
    for (let index = 0; index < width * height; index++) {
        let pixel = imap.get(index);
        if (index % 100 === 0) {
            IJ.log(pixel);
        }
    }
}

function threshold(imap, seuil) {
    for (let index = 0; index < width * height; index++) {
        let pixel = imap.get(index);
        if (pixel < seuil) {
            imap.set(index, 0);
        } else {
            imap.set(index, 255);
        }
    }
}

let imp = IJ.getImage();
let width = imp.getWidth();
let height = imp.getHeight();
IJ.beep();
IJ.log(`Image dimension: ${width} x ${height}`);
let ip = imp.getProcessor();
let pix = ip.get(132, 95);

IJ.log(`Pixel value at 132 95 is ${pix}`);

threshold(ip, 100);
imp.updateAndDraw();