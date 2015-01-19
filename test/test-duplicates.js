'use strict';
var assert = require('assert'),
    _ = require('lodash');

describe('dragon-names has no duplicates', function () {

    beforeEach(function () {
        this.dragonNames = require('../');
    });

    it('animated dragon names has no duplicates', function () {
        assert(this.dragonNames.animated.length === _.unique(this.dragonNames.animated).length);
    });

    it('comic dragon names has no duplicates', function () {
        assert(this.dragonNames.comic.length === _.unique(this.dragonNames.comic).length);
    });

    it('film dragon names has no duplicates', function () {
        assert(this.dragonNames.film.length === _.unique(this.dragonNames.film).length);
    });

    it('game dragon names has no duplicates', function () {
        assert(this.dragonNames.game.length === _.unique(this.dragonNames.game).length);
    });

    it('literatur dragon names has no duplicates', function () {
        assert(this.dragonNames.literature.length === _.unique(this.dragonNames.literature).length);
    });

    it('television dragon names has no duplicates', function () {
        assert(this.dragonNames.television.length === _.unique(this.dragonNames.television).length);
    });

    it('all dragon names has no duplicates', function() {
        assert(this.dragonNames.all.length === _.unique(this.dragonNames.all).length);
    });
});

