/**
 * Created by srujangopu on 11/16/15.
 */

var assert = require('chai').assert;
var superagent = require('superagent');

var server = require('../expressApp');


describe('server testing', function() {

    beforeEach(function (done) {
        server.listen(8081, function (err) {
            done(err);
        })
    });

    afterEach(function (done) {
        server.close(function (err) {
            done(err);
        });
    });

    it('should return Hello World at /', function( done ) {

        superagent.get('http://localhost:8081/').end(function(err, res) {
            if (err) { return done(err); }

            assert.equal(res.status, 200);
            assert.equal(res.text, 'Hello World Express Framework');
            done();
        });

    });

});