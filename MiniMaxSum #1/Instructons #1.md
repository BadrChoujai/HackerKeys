# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example,**arr = [1, 3, 5, 7, 9]** . Our minimum sum is **1 + 3 + 7 + 5 = 16** and our maximum sum is **3 + 7 + 5 + 9 = 24** . We would print
'16 24'.

## THE PROBLEM TO SOLVE

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of **4** of **5** elements.

miniMaxSum has the following parameter(s):

> arr: an array of **5** integers.

### Sample Input

'1 2 3 4 5'

### Sample Input

'10 14'

### Explanation

Our initial numbers are **1**, **2**, **3**, **4**, **5** and **5**. We can calculate the following sums using four of the five integers:

1.If we sum everything except **1**, our sum is **2 + 3 + 4 + 5 = 14**.
2.If we sum everything except **2**, our sum is .
3.If we sum everything except **3**, our sum is .
4.If we sum everything except **4**, our sum is .
5.If we sum everything except **5**, our sum is .
