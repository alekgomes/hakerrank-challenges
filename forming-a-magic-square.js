'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    const flatten = s.flat() // [5, 3, 1, 3, 5, 7, 4, 9, 2]
    
    const allPossiblesMagicSquares =    
        [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],        
        [4, 9, 2, 3, 5, 7,8, 1, 6],
        [2, 9, 4, 7, 5, 3,6, 1, 8], 
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6], 
        [6, 7, 2, 1, 5, 9, 8, 3, 4], 
        [2, 7, 6,9, 5, 1, 4, 3, 8],
        ]
    
    let currentMin = Number.MAX_SAFE_INTEGER
    
    allPossiblesMagicSquares.forEach(pArray => {        
        let arrayTotalCost = 0
        
        pArray.forEach((n, i) => {            
            arrayTotalCost += Math.abs(n - flatten[i])            
        })         
         if (arrayTotalCost < currentMin) {
            currentMin = arrayTotalCost
        }   
    })
    
    return currentMin

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
