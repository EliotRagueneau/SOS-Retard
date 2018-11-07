
/*
 * My script
 */
let imp = IJ.createImage("lines", "8-bit black", 256, 256, 1);
let ip = imp.getProcessor();
let xpoints = [21, 71, 54, 198, 94, 202, 205, 188, 160, 123, 103, 114];
let ypoints = [79, 30, 195, 197, 197, 91, 58, 34, 28, 29, 62, 92];
ip.setValue(255);
for (let i = 1; i < xpoints.length; i++) {
    ip.drawLine(xpoints[i - 1], ypoints[i - 1], xpoints[i], ypoints[i]); // Dessine la ligne entre le point Pi-1(x[i-1], y[i-1]) et Pi(x[i], y[i])
}
imp.show();