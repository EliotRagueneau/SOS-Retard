let imp = IJ.openImage('http://wsr.imagej.net/images/boats.gif');
let ip = imp.getProcessor();
let indices = [625,634,681,10809,11351,11465,12969,13597,26650,27318];
let str='';
for (let i=0; i < indices.length; i++) {
	let pixel = ip.get(indices[i]);
	str = str + 'abcdefghijklmnopqrstuvwxyz'[pixel-97];
}
IJ.log(str);
