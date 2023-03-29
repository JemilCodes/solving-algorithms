var runningSum = function (nums) {
  let runningSum = 0;
  let arrSum = [];
  nums.forEach((num) => {
    runningSum += num;
    arrSum.push(runningSum);
  });
  return arrSum;
};
