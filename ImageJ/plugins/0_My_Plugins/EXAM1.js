function normalize(imp) {
    let stats = imp.getStatistics();
    let min = stats.min;
    let max = stats.max;
    let ip = imp.getProcessor();
    for (let x = 0; x < imp.getWidth(); x++) {
        for (let y = 0; y < imp.getHeight(); y++) {
            let v = ip.getPixel(x, y);
            ip.set(x, y, (v - min) / (max - min) * 255);
        }
    }
    imp.setProcessor(ip);
    imp.show();
}

let imp = IJ.getImage();
normalize(imp);
