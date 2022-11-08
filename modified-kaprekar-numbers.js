'use strict';

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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    const result = []
    for(p; p <= q; p++) {        
        const splited = String(p * p).split('')
        const rSide = splited.splice(-String(p).length)
        
        const joinL = Number(splited.join(''))        
        const joinR = Number(rSide.join(''))      
        
        if(joinL + joinR === p) result.push(p)
    }
    
    console.log(result.length === 0 ? 'INVALID RANGE': result.join(" "))

}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
