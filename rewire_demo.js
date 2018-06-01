'use strict';
const fs = require("fs");

function add(a, b){
    let result = a + b;
    sub(a, b);
    return result;
}

// 私有函数sub
function sub(a, b) {
    return a - b;
}

exports.add = add;