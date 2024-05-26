# Problem Set 2: Valid Parentheses

# Problem Description

Determining whether the given string of parentheses is valid, and ensuring that each opening parenthesis is mapped with a corresponding closing parenthesis.

Valid: "()[]{}"
Invalid: "([)]"


---
## Solution Overview

Using Stack data structure, main procedure on the function is Last in, First out (LIFO) which describes a procedural approach in which the most recently added task or item to a sequence is the initial one to be processed or removed. This approach involves utilizing the push and pop commands.

a.) Stack
	Creating an empty stack to store the opening parentheses.

b.) Mapping
	Establishing a map structure to the matching of closing parentheses with their corresponding opening counterparts.
	
c.) Application of Push and Pop 
	The push operation adds the opening parentheses to the stack, while the pop command is used at encountering a closing parenthesis, if it corresponds to the most recent opening parenthesis on the stack. If its a valid match, remove the opening parenthesis from the stack.
	
d) Checking Output
	After analyzying the stack, if its empty and all parentheses is matched, then the string is valid. If not, string is invalid if the stack is not empty and there is an unmatched parentheses.
	
	
---
### Instructions to Run the Code

By using Visual Studio Code or Any Javascript Compiler
	a.) Open Visual Studio (If using VSC)
	b.) Download Node.js from the website
	c.) Go to file directory of the .js file
			- cd /<temp dir>/valid_parentheses.js
	d.) Run the program
			- node valid_parentheses.js
