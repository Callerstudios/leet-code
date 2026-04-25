var generate = function(numRows) {
    const res = [[1], [1, 1]]
    if(numRows < 2){
        return res.slice(0, numRows)
    }
    for(let i = 2; i < numRows; i++){
        let newArray = [1]
        let iterCount = i - 1;
        for(let j = 1; j <= iterCount; j++){
            let add1 = res[i - 1][j - 1]
            let add2 = res[i - 1][j]
            newArray.push(add1 + add2)
        }
        newArray.push(1)
        res.push(newArray)
    }
    return res
};

var getRow = function(rowIndex) {
    let numRows = rowIndex + 1
    const res = [[1], [1, 1]]
    for(let i = 2; i < numRows; i++){
        let newArray = [1]
        let iterCount = i - 1;
        for(let j = 1; j <= iterCount; j++){
            let add1 = res[i - 1][j - 1]
            let add2 = res[i - 1][j]
            newArray.push(add1 + add2)
        }
        newArray.push(1)
        res.push(newArray)
    }
    return res[rowIndex]
};