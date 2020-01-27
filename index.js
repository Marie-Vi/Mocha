function sum (a, b){
    return a + b;
}
function mult(a, b){
    return a*b;
}
module.exports = {sum, mult, isAdult, array, array2};

function isAdult (a){
    if(a >= 18 && a > 0){
        return true;
    } else return false;
}

function array(arr) {
    let x, i, j;
    for(i = 0; i < arr.length-1; i++){
        for(j = i +1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    return arr;
}

function array2(arr) {
    let x, i, j;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    return arr;
}