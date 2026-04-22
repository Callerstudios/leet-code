var rotate = function(matrix) {
    let newArray = matrix.map(row => [...row])
    let arrayLength = matrix.length
    if(arrayLength === 0) return []
    let eachChildrenLength = matrix[0].length
    for(let i = 0; i < arrayLength; i++){
        for(let j = 0; j < arrayLength; j++){

            matrix[j][arrayLength - 1 - i] = newArray[i][j]
        }
    }
};