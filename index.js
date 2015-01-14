'use strict';
var uniqueRandom = require('unique-random'),
    animatedDragonNames = require('./data/animated-dragon-names.json'),
    comicDragonNames = require('./data/comic-dragon-names.json'),
    filmDragonNames = require('./data/film-dragon-names.json'),
    gameDragonNames = require('./data/game-dragon-names.json'),
    literatureDragonNames = require('./data/literature-dragon-names.json'),
    televisionDragonNames = require('./data/television-dragon-names.json');
var allDragonNames = [];

animatedDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

comicDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

filmDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

gameDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

literatureDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

televisionDragonNames.forEach(function (name) {
    allDragonNames.push(name);
});

var animatedRandom = uniqueRandom(0, animatedDragonNames.length - 1);
var comicRandom = uniqueRandom(0, comicDragonNames.length - 1);
var filmRandom = uniqueRandom(0, filmDragonNames.length - 1);
var gameRandom = uniqueRandom(0, gameDragonNames.length - 1);
var literatureRandom = uniqueRandom(0, literatureDragonNames.length - 1);
var televisionRandom = uniqueRandom(0, televisionDragonNames.length - 1);
var allRandom = uniqueRandom(0, allDragonNames.length - 1);

exports.animated = animatedDragonNames;
exports.comic = comicDragonNames;
exports.film = filmDragonNames;
exports.game = gameDragonNames;
exports.literature = literatureDragonNames;
exports.television = televisionDragonNames;

exports.animatedRandom = function () {
    return animatedDragonNames[animatedRandom()];
};

exports.comicRandom = function () {
    return comicDragonNames[comicRandom()];
};

exports.filmRandom = function () {
    return filmDragonNames[filmRandom()];
};

exports.gameRandom = function () {
    return gameDragonNames[gameRandom()];
};

exports.literatureRandom = function () {
    return literatureDragonNames[literatureRandom()];
};

exports.televisionRandom = function () {
    return televisionDragonNames[televisionRandom()];
};

exports.allRandom = function () {
    return allDragonNames[allRandom()];
};
