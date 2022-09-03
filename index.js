'use strict';
import * as animatedDragonNames from './data/animated-dragon-names.json' assert{type: 'json'};
import * as comicDragonNames from './data/comic-dragon-names.json' assert{type: 'json'};
import * as filmDragonNames from './data/film-dragon-names.json' assert{type: 'json'};
import * as gameDragonNames from './data/game-dragon-names.json' assert{type: 'json'};
import * as literatureDragonNames from './data/literature-dragon-names.json' assert{type: 'json'};
import * as televisionDragonNames from './data/television-dragon-names.json' assert{type: 'json'};
import uniqueRandom from 'unique-random';
var allDragonNames = [];

animatedDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

comicDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

filmDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

gameDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

literatureDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

televisionDragonNames.default.forEach(function (name) {
    allDragonNames.push(name);
});

var animatedRandom = uniqueRandom(0, animatedDragonNames.default.length- 1);
var comicRandom = uniqueRandom(0, comicDragonNames.default.length - 1);
var filmRandom = uniqueRandom(0, filmDragonNames.default.length - 1);
var gameRandom = uniqueRandom(0, gameDragonNames.default.length - 1);
var literatureRandom = uniqueRandom(0, literatureDragonNames.default.length - 1);
var televisionRandom = uniqueRandom(0, televisionDragonNames.default.length - 1);
var allRandom = uniqueRandom(0, allDragonNames.length - 1);

export const animated = animatedDragonNames.default;
export const comic = comicDragonNames.default;
export const film = filmDragonNames.default;
export const game = gameDragonNames.default;
export const literature = literatureDragonNames.default;
export const television = televisionDragonNames.default;
export const all = allDragonNames;

const _animatedRandom = function () {
    return animatedDragonNames[animatedRandom()];
};
export { _animatedRandom as animatedRandom };

const _comicRandom = function () {
    return comicDragonNames[comicRandom()];
};
export { _comicRandom as comicRandom };

const _filmRandom = function () {
    return filmDragonNames[filmRandom()];
};
export { _filmRandom as filmRandom };

const _gameRandom = function () {
    return gameDragonNames[gameRandom()];
};
export { _gameRandom as gameRandom };

const _literatureRandom = function () {
    return literatureDragonNames[literatureRandom()];
};
export { _literatureRandom as literatureRandom };

const _televisionRandom = function () {
    return televisionDragonNames[televisionRandom()];
};
export { _televisionRandom as televisionRandom };

const _allRandom = function () {
    return allDragonNames[allRandom()];
};
export { _allRandom as allRandom };
