'use strict';
import assert from 'assert';
import * as dragonNames from '../index.js';
import pkg from 'lodash';
const { uniq } = pkg;


describe('dragon-names has no duplicates', function () {

    beforeEach(function () {
        this.dragonNames = dragonNames;
    });

    it('animated dragon names has no duplicates', function () {
        assert(this.dragonNames.animated.length === uniq(this.dragonNames.animated).length);
    });

    it('comic dragon names has no duplicates', function () {
        assert(this.dragonNames.comic.length === uniq(this.dragonNames.comic).length);
    });

    it('film dragon names has no duplicates', function () {
        assert(this.dragonNames.film.length === uniq(this.dragonNames.film).length);
    });

    it('game dragon names has no duplicates', function () {
        assert(this.dragonNames.game.length === uniq(this.dragonNames.game).length);
    });

    it('literatur dragon names has no duplicates', function () {
        assert(this.dragonNames.literature.length === uniq(this.dragonNames.literature).length);
    });

    it('television dragon names has no duplicates', function () {
        assert(this.dragonNames.television.length === uniq(this.dragonNames.television).length);
    });
});

