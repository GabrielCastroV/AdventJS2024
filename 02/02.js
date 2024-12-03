/*
Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
Example of how it works:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Expected result:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Expected result:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

*/

function createFrame(names) {
    // Code here
    let longestNameNumber = 0

    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (longestNameNumber < element.length) {
            longestNameNumber = element.length
        }
    }

    const frame = `${`*`.repeat(longestNameNumber + 4)}`
    let center = ''

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const line = `* ${name + ' '.repeat(longestNameNumber - name.length)} *\n`
        center += line
    }

    const response = `${frame}\n${center}${frame}`

    return names.length > 0 ? response : '*'
}
const names = ['gabriel', 'romina', 'mity', 'ornitorrinco']

console.log(createFrame(names))