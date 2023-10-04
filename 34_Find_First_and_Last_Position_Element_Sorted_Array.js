/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) {
        return [-1,-1];
    }
    let firstEle = 0; //1,2
    let lastEle = nums.length-1; //4

    while(firstEle <= lastEle) {
        if(nums[firstEle] === target && nums[lastEle] === target) {
            return [firstEle, lastEle];
        } 
        if(nums[firstEle] < target) {
            firstEle += 1;
        }
        if(nums[lastEle] > target) {
            lastEle -= 1;
        }
    }
    return [-1,-1];
};
