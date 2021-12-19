const chai = require('chai');
const assert = chai.assert;

describe('files', function () {
    describe('export', function () {
        it('should export pdf', function () {
            assert.isTrue(true);
        });

        it('should export html', function () {
            assert.isTrue(true);
        });

        it('should export yml', function () {
            assert.isTrue(true);
        });

        it('should export text', function () {
            // Fail in 50% of cases
            if (Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        });
    });

    describe('import', function () {
        it('should import pdf', function () {
            assert.isTrue(true);
        });

        it('should import html', function () {
            assert.isTrue(true);
        });

        it('should import yml', function () {
            assert.isTrue(true);
        });

        it('should import text', function () {
            assert.isTrue(true);
        });
    });
});
