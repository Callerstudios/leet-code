var hasPathSum = function(root, targetSum) {
    let seenTrue = false;
    var getSum = (root, currentSum) =>{
        if(!root){
            return
        }
        let add = currentSum + root.val
        if(!root.left && !root.right){
            if(add === targetSum){
                seenTrue = true
            }
        }
        if(root.left){
            getSum(root.left, add)
        }
        if(root.right){
            getSum(root.right, add)
        }
    }
    getSum(root, 0)
    return seenTrue
};