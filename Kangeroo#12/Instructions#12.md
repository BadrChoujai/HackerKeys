# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

> The first kangaroo starts at location **x1** and moves at a rate of **v1** meters per jump.
> The second kangaroo starts at location **x2** and moves at a rate of **v2** meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

## THE PROBLEM TO SOLVE

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

> x1, v1: integers, starting position and jump distance for kangaroo 1
> x2, v2: integers, starting position and jump distance for kangaroo 2

### Sample Input

A single line of four space-separated integers denoting the respective values of x1,v1 ,x2 , and v2.
`0 3 4 2`

### Sample Output

Print YES if they can land on the same location at the same time; otherwise, print NO.

> **Note**: The two kangaroos must land at the same location after making the same number of jumps.
> `YES`

### Explanation

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e.,_x2>x1_ ). Because the second kangaroo moves at a faster rate (meaning _v2 > v1_) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print **NO**.
