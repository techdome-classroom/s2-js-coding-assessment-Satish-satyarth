/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    function romanToDecimal(str) {
        const romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
        
            // If the current value is less than the next value,
            // subtract current from next and add to sum
            if (i + 1 < str.length && romanMap[str[i]] < romanMap[str[i + 1]]) {
                sum += romanMap[str[i + 1]] - romanMap[str[i]];
                
                // Skip the next symbol
                i++;
            } else {
            
                
                sum += romanMap[str[i]];
            }
        }
    
        return sum;
    }
    
    console.log(romanToDecimal("IX")); // Output: 9

};


module.exports={romanToInt}