const { curry, compose, pipe } = require('./helper');

const first = (xs) => xs[0];

const formatInitial = (x) => x.toUpperCase() + ".";

const map = (fn, arr) => arr.map(fn);

const intercalate = (sep, arr) => arr.join(sep);

const employees = ["Javascript", "Rust", "Golang", "Python"];

const initials = intercalate(" - ", map(formatInitial, map(first, employees)));
// J. - R. - G. - P.