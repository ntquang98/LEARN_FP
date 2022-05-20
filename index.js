const { curry, compose, pipe } = require('./helper');

const first = (xs) => xs[0];

const formatInitial = (x) => x.toUpperCase() + ".";

const map = (fn, arr) => arr.map(fn);

const intercalate = (sep, arr) => arr.join(sep);

const employees = ["Jame", "Ruby", "Elsa", "Tommy"];

const initials = intercalate(" - ", map(formatInitial, map(first, employees)));
// J. - R. - G. - P.

const cond = (x) => (y) => x !== y;
const my_if = cond => x => y => cond(x)(y) ? 't' : 'f';

console.log(my_if(cond)(3)(5));

const getListFirstChars = curry(map)(first);

const getListFormattedDot = curry(map)(formatInitial);

const intercalateWithHyphen = curry(intercalate)(" - ");

compose(console.log, intercalateWithHyphen, getListFormattedDot, getListFirstChars)(employees);
