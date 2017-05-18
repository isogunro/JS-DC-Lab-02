/*
Distance Formula

The purpose of this assignment is to build a program that will calculate the distance between two points, given two sets of x and y coordinates.

As a refresher (since it's probably been a while since you've done any geometry!), the distance formula works like this: given a point x1, y1 and another point x2, y2 on a graph, we can calculate the distance between these two points by following these steps:

subtract x2 from x1 to get deltaX
subtract y2 from y1 to get deltaY
square both deltaX and deltaY
add the square of deltaX to the square of deltaY
take the square root of the sum of step 4
If you're a visual person, it looks like this.

d=√​(x​2​​ −x​1​​ )​2​​ +(y​2​​ −y​1​​ )​2

Exercise:

Create a distance.js file, so that when run with node distance.js it will return the distance between point 1 at [1, 3] and point 2 at [10, 15].

Bonus:

To take user input in a command line program like distance.js, we use node's process.argv, which is an array of arguments passed into the program from the command line. Modify your distance.js so that it can take two points from the command line and return the distance between them.

Test it with node distance.js 1,3 10,15

hint: maybe check the typeof for arguments when they're in the process.argv array . . .

hint 2: I wonder if there's a way to split a string into multiple parts . . .
*/

let x1, x2, y1, y2

 /*x1 = 1
 x2 = 10

 y1 = 3
 y2 = 15*/

 console.log(typeof(process.argv))

 let argCapture = process.argv.toString().split(",")
 //console.log(argCapture.split(","))
 x1 = argCapture[2]
 x2 = argCapture[3]

 y1 = argCapture[4]
 y2 = argCapture[5]
 
//https://evdokimovm.github.io/javascript/nodejs/2016/08/16/nodejs-process-argv-command-line-arguments.html
 

const deltaX = Math.sqrt(x2 - x1)
const deltaY = Math.sqrt(y2 - y1)

const deltaXY = deltaX + deltaY

console.log(Math.floor(deltaXY))
