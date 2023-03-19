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


function printListCycle(list) {
  let tmp = list
  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next
  }
}

function printListRucursin(list) {
  alert(list.value)
  if (list.next) {
    printListRucursin(list.next)
  }
}