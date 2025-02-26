// bài 1

let a = 6;
let b = 7;

let c = 2;

function reversed(a, b) {
    a = a + b; //a = 15
    b = a - b; //b = 5
    a = a - b;

    console.log(a, b);
}

reversed(a, b);

// bài 2

function findMax(a, b, c) {
    let max = 0;

    if (a > b && a > c) return (max = a);
    if (b > a && b > c) return (max = b);
    return (max = c);
}

console.log(findMax(a, b, c));

//bài 3

function isSame(a, b) {
    return a * b > 0 ? "cùng dấu" : "khác dấu";
}

console.log(isSame(-1, -2));

//bài 4

function findMin(a, b, c) {
    let min = 0;

    if (a < b && a < c) return (min = a);
    if (b < a && b < c) return (min = b);
    return (min = c);
}
function findMid(a, b, c) {
    let mid = 0;

    if ((a > b && a < c) || (a < b && a > c)) return (mid = a);
    if ((b > a && b < c) || (b < a && b > c)) return (mid = b);
    return (mid = c);
}

console.log("min:" + findMin(a, b, c));
console.log("Max:" + findMax(a, b, c));
console.log("Mid:" + findMid(a, b, c));

// a= 10 b = 5 c = 1 => a= 1 b=5 c=10

console.log(a, b, c);

let max = findMax(a, b, c);
let min = findMin(a, b, c);

let mid = findMid(a, b, c);

a = min;
b = mid;
c = max;
console.log(a, b, c);
