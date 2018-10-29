imp = IJ.openImage("http://wsr.imagej.net/images/clown.jpg");
let ip = imp.getProcessor();
let scale = 0.5;
let w = imp.getWidth() * scale;
let h = imp.getHeight() * scale;
ip = ip.resize(w,h);
ip = ip.convertToByteProcessor();
imp.setProcessor(ip);

imp.show();