function lengthOfLIS(num) {
    if (numbers.length === 0) return 0;
    
    // initialize an array to store the end elements of potential output
    const tails = [];
    
    numbers.forEach(num => {
        // use binary search to find the position to replace or append the current number
        let left = 0, right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // if right is equal to the length of piles, it means we need to add a new tail
        if (right === tails.length) {
            tails.push(num);
        } else {
            // otherwise, replace the top element of the found tails
            tails[right] = num;
        }
    });
    
    // The number of tails is the length of the LIS
    return tails.length;
}


// Final Output
const numbers = [4, 8, 12, 22]; // Output is 4
console.log(lengthOfLIS(numbers));
