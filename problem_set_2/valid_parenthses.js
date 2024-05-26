function isValid(str) {
  const stack = [];
  
  // map to easily match the closing parentheses with the opening ones
  let parenthesesMapping = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  
  // traverse each character in the string
  for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
          // push opening parentheses onto the stack
          stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
          // check if stack is empty or if the top element doesn't match
          if (stack.length === 0 || stack.pop() !== parenthesesMapping[char]) {
              return false;
          }
      }
  }
  
  // check if the stack is empty at the end
  return stack.length === 0;
}

// final output
console.log("Output is: " + isValid("(({{}}))"));
