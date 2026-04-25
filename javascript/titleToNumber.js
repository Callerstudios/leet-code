var titleToNumber = function(columnTitle) {
    let length = columnTitle.length
    let output = 0
    for(let i = 0; i < length; i++){
        let charPosition = columnTitle.charCodeAt(i) - 64;
        let multiplier = Math.pow(26, length - i - 1)
        let res = multiplier * charPosition
        output += res
    }
    return output
};