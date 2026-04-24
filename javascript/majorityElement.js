var majorityElement = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    let convertedSet = new Set(sorted)
    let maxValueElement = sorted[0]
    let maxValue = 0
    let currentIndex = -1

    for(const value of convertedSet){
        let lastIndex = sorted.lastIndexOf(value)
        let length = lastIndex - currentIndex
        currentIndex = lastIndex
        if(length > maxValue){
            maxValue = length
            maxValueElement = value
        }
    }
    return maxValueElement
};