# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array
   These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

## THE PROBLEM TO SOLVE

Complete the getTotalX function in the editor below. It should return the number of integers that are between the sets.

getTotalX has the following parameter(s):

> **a**: an array of integers
> **b**: an array of integers

### Sample Input

The first line contains two space-separated integers, **n** and **m**, the number of elements in array **a** and the number of elements in array **b**.
The second line contains **n** distinct space-separated integers.
The third line contains **m** distinct space-separated integers describing

`2 3`
`2 4`
`16 32 96`

### Sample Output

Print the number of integers that are considered to be between a and b.

`3`

### EXPLANATION

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
