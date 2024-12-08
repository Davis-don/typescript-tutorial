"use strict";
let greet = () => {
    console.log("hello world");
};
greet = "hello"; //wount work
//for future use as a function
let greet2;
greet = () => {
    console.log("heloo world 2");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(12, 29);
const minus = (a, b) => {
    return (a - b);
};
const minus1 = (a, b) => {
    console.log(a - b);
};
