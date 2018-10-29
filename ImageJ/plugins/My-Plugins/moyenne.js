let x = [1, 2, 3, 4];
let y = [5, 6, 7, 8];


function moyenne(x, y) {
    let sum_x = 0;
    let sum_y = 0;

    for (let i = 0; i < x.length; i++) {
        sum_x += x[i];
        sum_y += y[i];
    }

    return [sum_x / x.length, sum_y / y.length]
}


IJ.log(moyenne(x, y));

