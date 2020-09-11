const IIFE = (func, ...args) => {
    return func(...args);
}

const iife = IIFE;

module.exports = { iife, IIFE };