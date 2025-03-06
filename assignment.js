function counter(n) { 
    let ans = [];
    for (let i = 0; i < n; i++) {
        // No need to modify 'n' (was previously 'count')
    }
    
    ans.push(n);
    ans.push(n + 1);
    ans.push(n + 2);
    
    return ans;
}

console.log(counter(5));  // Output: [5, 6, 7]