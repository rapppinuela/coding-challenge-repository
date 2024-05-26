# Problem Set 1: Palindrome Pairs

# Problem Description

A palindrome is a sequence of characters that remains identical when read both forward and backward (e.g., "civic", "noon"). 

The main objectives of the problem is to create and implement an efficient algorithm to check if a given string is a palindrome. Output should be a list of lists, where each inner list represents a pair of indices that together form a palindrome.

Sample list of words: ["bat", "tab", "cat"]

["bat", "tab"] - Pair of Palindrome words
"battab" - Combined list of Palindrome words, 

"Bat" and "tab" can be combined to create the palindrome "battab".


---
## Solution Overview

a.) Palindrome Checking
	Implementing algorithm to check whether input string is a valid palindrome by comparing it to its opposite side, If both sides matches, the string is a valid palindrome, otherwise it it not
	
b.) Concatenation
	Combine the collected words into a single string, then verify if this concatenation forms a palindrome.
	
c.) Collecting Palindrome Words
	If the concatenated words is a valid palindrome, add the pair words (word1 + word2 = word1word2)
	
d.) Final Output
	List all valid pairs of palindromes for the final result.	


---
### Instructions to Run the Code

By using Visual Studio Code or Any Javascript Compiler
	a.) Open Visual Studio (If using VSC)
	b.) Download Node.js from the website
	c.) Go to file directory of the .js file
			- cd /<temp dir>/palindrome_pairs.js
	d.) Run the program
			- node palindrome_pairs.js
