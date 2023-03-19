Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert( a + b );
}