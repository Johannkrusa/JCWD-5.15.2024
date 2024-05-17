// ====== 2d array ===========

// example of 2d array
var myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];

function matrix(n){
    var result = [];
    var counter = 1;
    for(var i = 0; i < n ; i++){
        let row = [];
        for(var j = 0; j < n; j++){
            row.push(counter);
            counter++;
        }
        result.push(row);
    }
    return result;
}

var myArray = matrix(5)


console.log(myArray[1][2]);

var myArray1 = [
    [5, 1, 2], 
    [4, 5, 6],
    [8, 9, 0]
    ];

var myArray2 = [
    [2, 1, 3], 
    [4, 1, 5],
    [2, 3, 0]
    ];

// generate random number for a n x n sized matrix
function matrixRandom(n){
    var result = [];
    for(var i = 0; i < n ; i++){
        let row = [];
        for(var j = 0; j < n; j++){
            // pick a random number 1-9;
            row.push((Math.floor(Math.random()*9))+1);
        }
        result.push(row);
    }
    return result;
}

let randArray1 = matrixRandom(3);
let randArray2 = matrixRandom(3);

console.log(randArray1, "\n", randArray2)

function matrixAdd(arr1, arr2) {
    // check arrays size both collums(y) and rows(x)
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        return "Both arrays have different dimensions";
    }
    
    var result = []; 
    
    // loop per collums(y)
    for (var i = 0; i <= arr1.length-1; i++) {
        var row = []; 
        // loops per rows(x)
        for (var j = 0; j <= arr1[i].length-1; j++) {
            // adds array 1 and array2 on the same coords
            var value = arr1[i][j] + arr2[i][j];
            //push value to array(rows)
            row.push(value);
        }
        // push rows to collums
        result.push(row);
    }
    
    return result;
}

console.log(matrixAdd(randArray1, randArray2))

// array 2d 9x9
// sudoku   
// f (referencing the sudoku board (), coord [x],[y], value in that coord)

var arraySudoku =[
   //0 1 2 3 4 5 6 7 8
    [1,0,0,0,2,0,0,4,0],// 0
    [0,2,0,0,4,0,0,0,0],// 1
    [0,0,3,0,0,0,5,1,0],// 2
    [0,0,0,4,0,0,0,0,0],// 3
    [0,0,0,0,5,0,0,0,0],// 4
    [0,1,0,3,0,6,0,0,0],// 5
    [0,0,2,0,0,0,7,0,0],// 6
    [0,1,0,7,0,0,0,8,0],// 7
    [0,0,0,0,0,0,0,0,9],// 8
]

function addSudoku(arraySudoku, cord, value){
    let x = cord[0]; // ref cord x = first value of array cord
    let y = cord[1]; //ref cord y = second value of array cord
 
    // X cord checker
    for(let i = 0; i<= arraySudoku[0].length-1; i++)
        if(value == arraySudoku[y][i]){
            return false;
        }

    // Y cord checker
    for(let i = 0; i<= arraySudoku.length-1; i++){
        if(value == arraySudoku[i][x]){
            return false;
        }
    }

    // subgrid checkers
    let startRow = y - y % 3;
    let startCol = x - x % 3;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(value == arraySudoku[startRow + i][startCol + j]) {
                return false;
            }
        }
    }

    return true;
}
// console.log([ref to sudoku array], [x,y] coordinate, [value] to input)
console.log(addSudoku(arraySudoku, [5,7], 4))


//   minesweeper
var minesweeperArray =[
    // 0   1   2   3   4   5   6   7   8   9
     ["O","X","O","O","O","X","O","O","O","O"], // 0
     ["O","O","O","X","O","O","O","X","O","O"], // 1
     ["O","O","O","X","O","O","X","X","O","O"], // 2
     ["O","O","O","O","X","O","O","O","O","O"], // 3
     ["O","O","X","O","O","X","O","O","X","O"], // 4
     ["O","O","O","X","O","O","X","O","O","O"], // 5
     ["O","X","X","O","X","O","O","O","O","O"], // 6
     ["O","O","O","O","O","X","O","O","O","O"], // 7
     ["O","X","O","X","O","O","X","O","O","X"], // 8
     ["O","O","O","O","O","O","O","O","O","O"]  // 9
 ]

 function printNumber() {
    for (var i = 0; i < minesweeperArray.length; i++) {
        for (var j = 0; j < minesweeperArray[i].length; j++) {
            if (minesweeperArray[i][j] == "O") {
                var bombNumber = checkBomb([j, i]); 
                minesweeperArray[i][j] = bombNumber;
            }
        }
    }
    return minesweeperArray;
}


function checkBomb([x, y]) {
    var bombCounter = 0;
    for (var i = y - 1; i <= y + 1; i++) {
        for (var j = x - 1; j <= x + 1; j++) {
            if (i >= 0 && i < minesweeperArray.length && j >= 0 && j < minesweeperArray[0].length && minesweeperArray[i][j] == "X") {
                bombCounter++;
            }
        }
    }
    return bombCounter;
}

console.table(printNumber())
