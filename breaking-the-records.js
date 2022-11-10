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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    
    let currentMin = Number.MAX_SAFE_INTEGER
    let currentMax = Number.MIN_SAFE_INTEGER
    let updateMaxCount = 0
    let updateMinCount = 0
        
    scores.forEach(handleUpdate)
    
    function handleUpdate(score) {
        if(score > currentMax) {            
            updateMax(score)
        }
        
        if (score < currentMin) {
          updateMin(score)
        }
    }
    
    function updateMax(score) {
        currentMax = score
        updateMaxCount = updateMaxCount + 1
    }
    
    function updateMin(score) {
        currentMin = score
        updateMinCount = updateMinCount + 1
    }
    
    return [updateMaxCount-1 , updateMinCount-1 ]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
