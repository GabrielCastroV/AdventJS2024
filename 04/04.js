/*
It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
The spaces on the sides of the tree are represented with underscores _.
All trees have a trunk of two lines, represented by the # character.
The tree should always have the same length on each side.
You must ensure the tree has the correct shape using line breaks \n for each line.
Examples:

const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____


const tree2 = createXmasTree(3, '+')
console.log(tree2)

__+__
_+++_
+++++
__#__
__#__


const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____


*/


function createXmasTree(height, ornament) {
    const base = []
    for (let index = 0; index < height; index++) {
        base.push(`${'_'.repeat(height - index - 1) + ornament.repeat(index * 2 + 1) + '_'.repeat(height - index - 1)}`)
    }

    const log = `${'_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)}`
    base.push(log, log)
    return base.join('\n')
}

const tree = createXmasTree(2, '5')

console.log(tree)
