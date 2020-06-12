# HackerKeys

Hacker Rank Problem solving.

## THE PROBLEM TO SOLVE

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

> a: an array of integers representing Alice's challenge rating
> b: an array of integers representing Bob's challenge rating

### Sample Input

The first line contains **3** space-separated integers,**a[0]** ,**a[1]** , and **a[2]**, describing the respective values in triplet **a**.
The second line contains **3** space-separated integers,**b[0]** ,**b[1]**, and **b[3]**, describing the respective values in triplet **b**.
`5 6 7`
`3 6 10`

### Sample Output

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.
`1 1`

### Explanation

Now, let's compare each individual score:

1. **a[0] > b[0]**, so Alice receives **1** point.
2. **a[1] = b[1]**, so nobody receives a point.
3. **a[2] < b[2]**, so Bob receives **1** point.
