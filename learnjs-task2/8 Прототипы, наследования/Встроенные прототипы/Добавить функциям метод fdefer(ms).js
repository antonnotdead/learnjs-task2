Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}