const { curry, compose, pipe } = require('./helper');

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const withExuberance = compose(repeat, exclaim, scream);

const result = withExuberance('hello world');
console.log(result);