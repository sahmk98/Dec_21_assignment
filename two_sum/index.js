 

   function twoSum(nums, target) {
    let x, y;
    x = nums.findIndex((num1, index1) => {
        y = nums.findIndex((num2, index2) => (num1 + num2 === target) && (index1 !== index2));
        return ~y;
    })
    return [x, y];
};
console.log(twoSum([2,7,11,15,14,5,9,6],19));
document.write(twoSum([2,7,11,15,14,5,9,6],19));