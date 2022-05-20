const curry = (fn, arity = fn.length) => {
  return (function nextCurried(prevArgs) {
	    return function curried(...nextArgs) {
      const args = [...prevArgs, ...nextArgs];
      return args.length < arity ? nextCurried(args) : fn(...args);
    };
  })([]);
};

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

module.exports = {
  curry,
  compose,
  pipe,
}