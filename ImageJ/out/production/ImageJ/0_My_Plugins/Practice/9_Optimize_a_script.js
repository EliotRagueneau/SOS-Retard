function lena_size_recorder(size) {
    let imp = IJ.openImage("http://wsr.imagej.net/images/lena-std.tif");
    IJ.run(imp, "8-bit", "");
    IJ.run(imp, "Size...", `width=${size} height=${size} constrain average interpolation=Bilinear`);
    return imp;
}

function lena_size_api(size) {
    let imp = IJ.openImage("http://wsr.imagej.net/images/lena-std.tif");
    let ip = imp.getProcessor();
    let ip8bit = ip.convertToByteProcessor();                // rep = convertToByteProcessor();
    ip8bit.setInterpolationMethod(ImageProcessor.BILINEAR);
    let ip8bit_scaled = ip8bit.resize(size,size);            // rep = resize(size,size);

    imp.setProcessor(ip8bit_scaled);
    return imp;
}

lena_size_recorder(1000).show();
lena_size_api(1000).show();