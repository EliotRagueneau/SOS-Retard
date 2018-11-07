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

// let imp = IJ.getImage();
// normalize(imp);

function corrected_normalize(imp) {
    let stats = imp.getStatistics();
    let min = stats.min;
    let max = stats.max;

    let ip = imp.getProcessor();

    let size = ip.getWidth() * ip.getHeight();

    for (let i = 0; i < size; i++) {                       // M. Taveau préfère passer par les index que les coordonnées
        let v = ip.get(i);                                 // Récupère la valeur actuelle du pixel i
        ip.set(i, (v - min) / (max - min) * 255)           // Ajuste sa valeur selon la formule donnée par M. Taveau
    }
    imp.setProcessor(ip);
    imp.show();
}

let imp = IJ.getImage();
corrected_normalize(imp);