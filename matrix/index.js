const outer= [
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
];

function diagonalSum(matrix){
    let sum = 0;
    for(let i= 0; i< matrix.length; i++){
        let inner = matrix[i];
        console.log(inner);
    
    for(let j=0; j < inner.length; j++){
        console.log(matrix[i][j]);
        if(i === j){
            console.log(matrix[i][j]);
            sum += matrix[i][j];
         }
        }
    }
    return sum;
}


var x = diagonalSum(outer);

var result = document.getElementById("result_show");
result.innerText = "Diagonal Sum is = "+ x;