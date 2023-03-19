let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListReverseRecur(list) {
    if (list.next) {
        printListReverseRecur(list.next);
    }
    alert(list.value);
}

function printReverseListCycle(list) {
    let arrReturn = [];
    let tmp = list;

    while (tmp) {
        arrReturn.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arrReturn.length - 1; i >= 0; i--) {
        alert(arrReturn[i]);
    }
}
