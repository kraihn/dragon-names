#!/usr/bin/env node
'use strict';
var meow = require('meow'),
    dragonNames = require('./index.js');

var cli = meow({
    help: [
        'Examples',
        '  $ dragon-names',
        '  Smaug',
        '',
        '  $ dog-names --all --type game',
        '  Alduin',
        '  Spyro',
        '  ...',
        '',
        'Options',
        '  --all   Get all names instead of a random name',
        '  --type  Type of name: animated|comic|film|game|literature|television|all  Default: all'
    ].join('\n')
});

var type = cli.flags.type || 'all';
console.log(cli.flags.all ? dragonNames[type].join('\n') : dragonNames[type + 'Random']());