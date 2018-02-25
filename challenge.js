/*
1) Write a function to transform array a to array b and print the elements of array b to the console.
*/
let a = [2, 4, 6, 8, 9, 15]
let b = ['4', '16', '64']

function transformArray(array) {
    const result = [];
    lastNumber = array.pop();
    for (var i = array.length; i > 0; i--) {
        b = lastNumber - array[i - 1]
        if (b != Math.abs(b)) {
            b = lastNumber + Math.abs(b);
            result.pop()
            result.push(Math.pow(b, 2).toString());
            lastNumber = b
        }
        else {
            result.push(Math.pow(b, 2).toString())
            lastNumber = b;
        }
    }
    return result.sort((n1, n2) => Math.pow(n1, 2) > Math.pow(n2, 2));
}

console.log(transformArray(a));

/*
2) Write a function to calculate the cumulative TTL of the following set of requests. (The provided answer is correct and should not be modified. )
*/
let requests = [
    { requestId: 'poiax', startedAt: 1489744808, ttl: 8 },
    { requestId: 'kdfhd', startedAt: 1489744803, ttl: 3 },
    { requestId: 'uqwyet', startedAt: 1489744806, ttl: 12 },
    { requestId: 'qewaz', startedAt: 1489744810, ttl: 1 }
]

let cumulativeTtl = 15

function calCumulativeTtl(array) {
    let start = [];
    let end = [];
    array.forEach(value => {
        start.push(value.startedAt)
        end.push(value.startedAt + value.ttl);
    })
    return Math.max.apply(end, end) - Math.min.apply(start, start)
}

console.log(calCumulativeTtl(requests));

/*
3) Read a text file containing a set of flat polygons represented as one polygon per line. Each line contains a comma-separated list of side lengths (for example “3,4,8,5,7”). Write a function to classify the set of polygons into four mutually exclusive subsets: triangles, rectangles, squares, and everything else. The union of all four subsets should be the original set of polygons. All the sides of the polygons are connected and the angles between them are irrelevant. Only consider the lengths. 
*/
const readline = require('readline');
const fs = require('fs');

function classifyPolygons(filename) {
    let myInterface = readline.createInterface({
        input: fs.createReadStream(filename)
    });

    let lineno = 0;
    myInterface.on('line', function (line) {
        lineno++;
        let polygon = line.split(',');
        if (polygon.length == 3)
            return console.log(`Line number ${lineno}: "${line}" is a [triangle]`);
        if (polygon.length == 4) {
            let isSquare = (array) => array.every(side => side === array[0]);
            if (isSquare(polygon) == true)
                return console.log(`Line number ${lineno}: "${line}" is a [square]`);
            else
                return console.log(`Line number ${lineno}: "${line}" is a [rectangle]`);
        }
        return console.log(`Line number ${lineno}: "${line}" is a [everything else]`);
    });
}

classifyPolygons('polygons.txt');