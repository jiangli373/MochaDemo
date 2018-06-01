'use strict';
const rewire = require("rewire");
const myModule = rewire("../rewire_demo.js");

myModule.__set__("sub", function(a, b) {
  return a * b;
});

const sub = myModule.__get__("sub");
const add = require('../rewire_demo.js').add;
const expect = require('chai').expect;


describe('函数的测试', function() {
  it("1加1等于2", function(){
    expect(add(1, 1)).to.be.equal(2);
  });
  it('2 减 2 应该等于 4', function() {
    expect(sub(2, 2)).to.be.equal(4);
  });
});