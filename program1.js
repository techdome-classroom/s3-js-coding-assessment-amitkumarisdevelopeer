/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (mapping[char]) { // If it's a closing bracket
            if (stack.pop() !== mapping[char]) {
                return false; // Mismatched closing bracket
            }
        } else {
            stack.push(char); // Push opening bracket to stack
        }
    }

    return stack.length === 0; // True if no unmatched opening brackets remain
};

module.exports = { isValid };

