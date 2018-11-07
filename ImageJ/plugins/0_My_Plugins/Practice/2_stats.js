/*
 * Read the mean value of the current active image
 */
let imp = IJ.getImage();
let stats = imp.getStatistics();
let mean = stats.mean;
IJ.log(mean);
