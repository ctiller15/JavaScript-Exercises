// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]       
// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 5,
// 2 ≤ matrix[0].length ≤ 5.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

// Couldn't think of a cleaner way to do this. Bah!

function minesweeper(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    // Create a matrix of zeroes.
    var newMatrix = new Array(rows);
    for(var i = 0; i < rows; i++) {
        newMatrix[i] = new Array(cols);
        newMatrix[i].fill(0);
    }
    // Loop through.
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            // console.log(matrix[i][j],i,j);
            if(matrix[i][j] === true) {
                
                if(matrix[i - 1]) {
                    newMatrix[i - 1][j] += 1;
                    if(matrix[i - 1][j - 1] >= 0) {
                        newMatrix[i - 1][j - 1] += 1;
                    }
                    if(matrix[i - 1][j + 1] >= 0) {
                        newMatrix[i - 1][j + 1] += 1;
                    }
                }
                
                if(matrix[i][j - 1] >= 0) {
                    newMatrix[i][j - 1] += 1;
                }
                
                if(matrix[i][j + 1] >= 0) {
                    newMatrix[i][j + 1] += 1;
                }
                
                if(matrix[i + 1]) {
                    newMatrix[i + 1][j] += 1;
                    if(matrix[i + 1][j - 1] >= 0) {
                        newMatrix[i + 1][j - 1] += 1;
                    }
                    if(matrix[i + 1][j + 1] >= 0) {
                        newMatrix[i + 1][j + 1] += 1;
                    }
                }
            }
        }
    }
    return newMatrix;
}
