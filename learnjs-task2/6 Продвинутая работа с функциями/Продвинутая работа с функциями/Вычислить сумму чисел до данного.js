function sumTo1(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function sumTo2(num) {
    if (num == 1) {
        return num;
    }
    else {
        return num + sumTo2(num - 1);
    }
}

function sumTo3(num){
    sum = (1 + num)/2 * num;
    return sum;
}

console.log(sumTo3(100));
