function divisibleSumPairs(n, k, ar) {
    let count = 0;
    n = ar.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-1; j++) {
            if (ar[i] < ar[i+1] ) { 
            if (ar[i] + ar[i+1] == k) {
                count++;
            }
        }
        }
    }
    return count;
}