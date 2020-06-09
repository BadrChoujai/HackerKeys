# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix **arr** is shown below:
`1 2 3`
`4 5 6`
`9 8 9`
The left-to-right diagonal =**1 + 5 + 9 = 15** . The right to left diagonal = **3 + 5 + 9 = 17**. Their absolute difference is **|15 - 17| = 2** .

## THE PROBLEM TO SOLVE

Complete the _Diagonal Difference_ function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

> arr: an array of integers.

### Sample Input

The first line contains a single integer,**n** , the number of rows and columns in the matrix **arr** .
Each of the next **n** lines describes a row,**arr[i]** , and consists of n space-separated integers **arr[i][j]**.

### Sample Output

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Explanation

Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

**Note**: |x| is the absolute value of x.
