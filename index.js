const { curry, compose, pipe } = require('./helper');

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const withExuberance = compose(repeat, exclaim, scream);

const result = withExuberance('hello world');
console.log(result);

// EX1 

const first = (xs) => xs[0];

const formatInitial = (x) => x.toUpperCase() + ".";

const map = (fn, arr) => arr.map(fn);

const intercalate = (sep, arr) => arr.join(sep);

const employees = ["Javascript", "Rust", "Golang", "Python"];

const initials = intercalate(" - ", map(formatInitial, map(first, employees)));
// J. - R. - G. - P.

console.log(initials);