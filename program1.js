/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // Stack to store opening brackets

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c); // Push opening brackets onto the stack
        } else {
            if (!stack.length || // Stack is empty
                (c === ')' && stack[stack.length - 1] !== '(') || 
                (c === '}' && stack[stack.length - 1] !== '{') || 
                (c === ']' && stack[stack.length - 1] !== '[')) { 
                return false; // Invalid string
            }
            stack.pop(); // Remove matched opening bracket
        }
    }

    return !stack.length; // Valid if stack is empty
};
