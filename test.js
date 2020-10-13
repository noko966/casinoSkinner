var rows = 3;
var cols = 3;


var b = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

let hor = 0;
let diag = 0;


let rowContainer = [0, 0, 0];
let colContainer = [0, 0, 0];
let diagonal = [0, 0, 0];
let opositeDiagonal = [0, 0, 0];




function makeMove(row, col) {

    if (b[row][col] !== 0) {
        return
    }

    b[row][col] = 1;


    rowContainer[row] += 1;
    colContainer[col] += 1;

    if (row === col) {
        diagonal[row] += 1;
    }

    if (row + col + 1 === cols) {
        opositeDiagonal[row] += 1;
    }

    var diagonalSum = 0;
    for (let i = 0; i < cols; i++) {
        diagonalSum += diagonal[i];
    }

    var opositeDiagonalSum = 0;
    for (let i = 0; i < cols; i++) {
        opositeDiagonalSum += opositeDiagonal[i];
    }


    if (diagonalSum === 3) {
        console.log('win by diag');
    }
    if (opositeDiagonalSum === 3) {
        console.log('win by oposite diag');
    }
    if (rowContainer[row] === 3) {
        console.log('win by row');
    }
    if (colContainer[col] === 3) {
        console.log('win by col');
    }

    return b;
}






console.log(makeMove(0, 2));



