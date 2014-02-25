var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var tmp = require('tmp');
var cli = require('../lib/cli');


describe('cli', function() {
    var now = _.now;
    var tmpdir;

    before(function() {
        _.now = _.constant(1393369106938);
    });

    after(function() {
        _.now = now;
    });

    beforeEach(function(done) {
        tmp.dir(function(err, dirname) {
            if (err) {
                done(err);
            }

            tmpdir = dirname;
            done();
        });
    });

    function assert_files_equal(actual_path, expected_path) {
        var actual = fs.readFileSync(path.resolve(actual_path));
        var expected = fs.readFileSync(path.resolve(expected_path));
        assert.equal(actual.toString(), expected.toString());
    }

    describe('extract', function() {
        it("should extract gettext strings from js files into pot files",
        function() {
            cli.parse([
                'extract',
                '-t',
                tmpdir,
                './test/fixtures/extract/simple/input/a.js',
                './test/fixtures/extract/simple/input/b.js'
            ]);

            assert_files_equal(
                path.join(tmpdir, 'messages.pot'),
                './test/fixtures/extract/simple/output/messages.pot');
        });

        it("should allow the keyword option to be configurable");
        it("should support multiple domains");
    });
});
