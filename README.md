# dragon-names

> Get awesome dragon names

The name lists are just JSON files and can be used wherever.


## Install

```
$ npm install --save dragon-names
```


## Usage

```js
var dragonNames = require('dragon-names');

dragonNames.literatureRandom();
//=> Smaug
```


## API

### .animated

Type: `array`

Top animated dragon names.

### .comic

Type: `array`

Top comic dragon names.

### .film

Type: `array`

Top film dragon names.

### .game

Type: `array`

Top game dragon names.

### .literature

Type: `array`

Top literature dragon names.

### .television

Type: `array`

Top television dragon names.

### .all

Type: `array`

Top dragon names.

### .animatedRandom()

Type: `function`

Random animated dragon name.

### .comicRandom()

Type: `function`

Random comic dragon name.

### .filmRandom()

Type: `function`

Random film dragon name.

### .gameRandom()

Type: `function`

Random game dragon name.

### .literatureRandom()

Type: `function`

Random literature dragon name.

### .televisionRandom()

Type: `function`

Random television dragon name.

### .allRandom()

Type: `function`

Random dragon name.


## CLI

```
$ npm install --global dragon-names
```

```
$ dragon-names --help

  Examples
    $ dragon-names
    Smaug

    $ dragon-names --all --type game
    Alduin
    Spyro
    ...

  Options
    --all   Get all names instead of a random name
    --type  Type of name: animated|comic|film|game|literature|television|all  Default: all
```


## Inspired By [Sindre Sorhus](http://sindresorhus.com)

- [`cat-names`](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [`dog-names`](https://github.com/sindresorhus/dog-names) - Get popular dog names


## License

MIT © [Jared Dickson](http://jareddickson.com)