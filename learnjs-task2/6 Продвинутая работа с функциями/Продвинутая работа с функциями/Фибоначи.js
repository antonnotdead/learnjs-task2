function fib1(index) {
    if (index == 0) {
        return 0;
    }
    if (index == 1 || index == 2) {
        return 1;
    }
    else {
        return fib1(index-1) + fib1(index-2);
    }

}

function fib2(index){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= index; i++){
        let c = a + b
        a = b;
        b = c;
    }
    return b;
}

