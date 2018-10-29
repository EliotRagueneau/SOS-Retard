/*
 * Read the mean value of the current active image
 */
var imp = IJ.getImage();
var stats = imp.getStatistics();
var mean = stats.mean;
IJ.log(mean);