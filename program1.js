/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    return /^[a-zA-Z0-9]+$/.test(s);
};

module.exports = { isValid };


