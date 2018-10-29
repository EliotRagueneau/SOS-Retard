// My Functions
function add3(i) {
    return i+3;
}

function div5(i) {
    return i/5;
}

function mul2(i) {
    return i*2;
}


// Implementation of the formula f(x) = (x/5 + 3)*2
function formula(x) {
    return mul2(add3(div5(x))); // Respecte l'ordre des priorités mathématiques
}

// Test with x = 35
var result = formula(35);
IJ.log('f(35)=' + result); // ←20