# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

**Note**: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to **10^4** are acceptable.

## THE PROBLEM TO SOLVE

Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

plusMinus has the following parameter(s):

> arr: an array of integers.

### Sample Input

The first line contains an integer,**n** , denoting the size of the array.
The second line contains **n** space-separated integers describing an array of numbers.
`6`
`-4 3 -9 0 4 1`

### Sample Output

You must print the following 3 lines:

1. A decimal representing of the fraction of positive numbers in the array compared to its size.
2. A decimal representing of the fraction of negative numbers in the array compared to its size.
3. A decimal representing of the fraction of zeros in the array compared to its size.

`0.500000`
`0.333333`
`0.166667`

### Explanation

There are **3** positive numbers,**2** negative numbers, and **1** zero in the array.
The proportions of occurrence are positive:**3/6=0.500000** , negative:**2/6=0.333333** and zeros **1/6=0.166667**.
