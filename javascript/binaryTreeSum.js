const binaryTreeSum = (root, targetSum) => {
    var getSum = (root, targetSum) =>{
        if(!root){
            return 0
        }
        let sum = root.val
        if(!root.left && !root.right){
            return sum
        }
        sum += getSum(root.left, targetSum) + getSum(root.right, targetSum)
        return sum
    }
    console.log(getSum(root, targetSum))
    return getSum(root, targetSum)
}