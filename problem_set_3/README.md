# Problem Set 3: Longest Increasing Subsequence

# Problem Description

A subsequence is a sequence obtained from another sequence by excluding zero or more elements, while sustaining the order of the remaining elements.

Determine the length of the longest subsequence where the numbers are arranged in ascending order.

Example:

Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4


---
## Solution Overview

a.) Create an empty array, to serve as st9rage for the tails of potential Longest Increasing Subsequence.

b.) Implementing Binary Search 
	
	Use binary search to find the position to replace or append the current number. Apply binary search to identify the maximum index. 
	
	Implement binary search to find the largest index j in the tails array where tails[j] is less than num.
	
	Upong finding index j, assign tails[j+1] to num. Expanding the Longest increasing subsequence from length j + 1 to j + 2.
	
c.) Inalyzying Output

	By determining the length of the longest increasing subsequence present in a provided sequence of numbers.
	
	
---
### Instructions to Run the Code

By using Visual Studio Code or Any Javascript Compiler
	a.) Open Visual Studio (If using VSC)
	b.) Download Node.js from the website
	c.) Go to file directory of the .js file
			- cd /<temp dir>/longest_increasing_subsequence.js
	d.) Run the program
			- node longest_increasing_subsequence.js
