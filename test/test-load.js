'use strict';
import assert from 'assert';
import * as dragonNames from '../index.js';

describe('dragon-names loaded', function () {

    beforeEach(function () {
        this.dragonNames = dragonNames;
        console.log(this.dragonNames);
    });

    it('has animated dragon names', function () {
        assert(this.dragonNames.animated.length > 0);
    });

    it('has comic dragon names', function () {
        assert(this.dragonNames.comic.length > 0);
    });

    it('has film dragon names', function () {
        assert(this.dragonNames.film.length > 0);
    });

    it('has game dragon names', function () {
        assert(this.dragonNames.game.length > 0);
    });

    it('has literatur dragon names', function () {
        assert(this.dragonNames.literature.length > 0);
    });

    it('has television dragon names', function () {
        assert(this.dragonNames.television.length > 0);
    });
});

