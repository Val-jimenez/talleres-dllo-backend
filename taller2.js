//Punto 1
function findMax(list) {
    if (list.length === 1) {
        return list[0];
    } else {
        return list[0] > findMax(list.slice(1)) ? list[0] : findMax(list.slice(1))
    }
}
console.log(findMax([100, 8, 9, 5, 3, 7, 2, 9, 4, 50]))

//Punto 2
function includes(list, num) {
    if (list.length === 0) {
        return false;
    }
    if (list[0] === num) {
        return true;
    }
    return includes(list.slice(1), num);
}
console.log(includes([100, 8, 9, 5, 3, 7, 2, 9, 4, 50], 100));

//Punto 3
function sum(list) {
    if (list.length === 0) {
        return 0;
    } else {
        return list[0] + sum(list.slice(1));
    }
}
console.log(sum([8, 9, 5, 3, 7, 2, 9, 4, 50]));

//Punto 4
function missingNumbers(list){
    let max = findMax(list);
    let missing = [];
    for(let i = 1; i < max; i++){
        if(!includes(list, i)){
            missing = missing.concat(i);
        }
    }
    return missing;
}
console.log(missingNumbers([8, 9, 5, 3, 7, 2, 9, 4, 20])); 