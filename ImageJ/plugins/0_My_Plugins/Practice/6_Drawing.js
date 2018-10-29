let imp = IJ.createImage("Lines", "RGB white", 256, 256, 1);
let ip = imp.getProcessor();
let indexes = [13380, 14610, 28434, 26682, 30549, 36702, 42589, 46660, 44319, 41756, 47902, 44706, 41923, 38600, 32458, 28610, 26034, 26002, 10933, 12399];

/* Main*/
let xpoints = [];
let ypoints = [];
for (let i of indexes) {
    xpoints.push(i % 256);
    ypoints.push(Math.floor(i / 256));
}

imp.setRoi(new PolygonRoi(xpoints, ypoints, Roi.POLYLINE)); // Dessine le polygone constitué des points dont les coordonées sont stockées dans xpoints et ypoints
/*
 * Point 0 = (xpoints[0], ypoints[0])
 * Point 1 = (xpoints[1], ypoints[1])
 * Point 2 = (xpoints[2], ypoints[2])
 * Point 3 = (xpoints[3], ypoints[3])
 * etc.
 */
imp.show();
