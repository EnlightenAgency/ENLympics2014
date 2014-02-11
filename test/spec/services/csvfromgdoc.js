'use strict';

describe('Service: Csvfromgdoc', function () {

  // load the service's module
  beforeEach(module('enlympics2014App'));

  // instantiate service
  var Csvfromgdoc;
  beforeEach(inject(function (_Csvfromgdoc_) {
    Csvfromgdoc = _Csvfromgdoc_;
  }));

  it('should do something', function () {
    expect(!!Csvfromgdoc).toBe(true);
  });

});
