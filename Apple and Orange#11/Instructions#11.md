# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where **s** is the start point, and **t** is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point **a**, and the orange tree is at point **b** .

## THE PROBLEM TO SOLVE

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

> s: integer, starting point of Sam's house location.
> t: integer, ending location of Sam's house location.
> a: integer, location of the Apple tree.
> b: integer, location of the Orange tree.
> apples: integer array, distances at which each apple falls from the tree.
> oranges: integer array, distances at which each orange falls from the tree.

### Sample Input

The first line contains two space-separated integers denoting the respective values of **s** and **t** .
The second line contains two space-separated integers denoting the respective values of **a** and **b**.
The third line contains two space-separated integers denoting the respective values of **m** and **n**.
The fourth line contains space-separated integers denoting the respective distances that each apple falls from point **a**.
The fifth line contains space-separated integers denoting the respective distances that each orange falls from point **b**.

`7 11`,
`5 15`,
`3 2`,
`-2 2 1`,
`5 -6`

### Sample Output

Print two integers on two different lines:

1. The first integer: the number of apples that fall on Sam's house.
2. The second integer: the number of oranges that fall on Sam's house.

`1`,
`1`

### Explanation

The first apple falls at position **5-2=3**.
The second apple falls at position **5+2=7**.
The third apple falls at position **5+1=6**.
The first orange falls at position **15+5=20**.
The second orange falls at position **15-6=9**.
Only one fruit (the second apple) falls within the region between **7** and **11**, so we print **1** as our first line of output.
Only the second orange falls within the region between **7** and **11**, so we print **1** as our second line of output.
