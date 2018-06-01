/**
 * Created by jiangli on 2017/7/17.
 */
'use strict';

const sinon = require('sinon');
const getUrlContent = require('../service');
const request = require('request');
const expect = require('chai').expect;
describe('getUrlContent(url, callback)', function() {
  const url = 'http://example.com';
  const body = 'source code';
  beforeEach(function() {
    sinon.stub(request, 'get').withArgs(url).yields(null, null, body);
  });

  it('should return the source code', function(done) {
    getUrlContent(url, function(err, result) {
      expect(result).to.be.equal(body);
      done();
    });
  });

  afterEach(function() {
    request.get.restore();
  });
});
