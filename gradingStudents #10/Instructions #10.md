# HackerKeys

Hacker Rank Problem solving.

## DESCRIPTION

Every student receives a _grade_ in the inclusive range from _0_ to _100_.
Any _grade_ less than _40_ is a failing grade.
Sam is a professor at the university and likes to round each student's _grade_ according to these rules:

If the difference between the _grade_ and the next multiple of _5_ is less than _3_, round _grade_ up to the next multiple of _5_.
If the value of _grade_ is less than _38_, no rounding occurs as the result will still be a failing grade.
For example,_grade=84_ will be rounded to _85_ but _grade=29_ will not be rounded because the rounding would result in a number that is less than _40_.

Given the initial value of _grade_ for each of Sam's _n_ students, write code to automate the rounding process.

## THE PROBLEM TO SOLVE

Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

gradingStudents has the following parameter(s):

> grades: an array of integers representing grades before rounding

### Sample Input

The first line contains a single integer,_n_ , the number of students.
Each line _i_ of the _n_ subsequent lines contains a single integer,_grades[i]_ , denoting student _i_'s grade.
`4`
`73`
`67`
`38`
`33`

### Sample Output

For each _grades[i]_ , print the rounded grade on a new line.
`75`
`67`
`40`
`33`

### Explanation

| ID  | Original grade | Final grade |
| --- | -------------- | ------------|
| 1   | 73             | 75          |
| 2   | 67             | 70          |
| 3   | 38             | 40          |
| 4   | 33             | 33          |
