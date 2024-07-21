function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        let current = matrix[row][col];
        console.log("current", current)

        if (current === target) {
            return true;
        } else if (current > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
}

const matrix = [[1, 3, 5], [7, 8, 10], [12, 15, 18]];
const target = 10;
console.log(searchMatrix(matrix, target));  