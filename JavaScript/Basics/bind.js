

//bind()方法

//就是将一个函数绑定到一个对象，还可以将传入bind的实参绑定至this（函数式编程）。

function f(y) {
    return this.x + y;
}
var o = {
    x: 1
};
var g = f.bind(o);
console.log(g(3));  //输出4




function sum(x, y) {
    return x + y;
}
var summ = sum.bind(null, 3);
console.log(summ(5));//输出8





function fn(y, z) {
    return this.x + y + z;
}
var fnn = fn.bind({x:2},5);
console.log(fnn(7));//输出14


