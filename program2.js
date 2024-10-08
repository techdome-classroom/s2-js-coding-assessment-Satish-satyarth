/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        
        if (i + 1 < s.length && romanDict[s[i]] < romanDict[s[i + 1]]) {
            total -= romanDict[s[i]];
        } else {
            
            total += romanDict[s[i]];
        }
    }

    return total;
};

module.exports = { romanToInt };
