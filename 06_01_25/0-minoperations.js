/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;

  // checking edge cases.
  if (n === 0) {
    return null;
  }
  if (n === 1) {
    return [1];
  }

  // answer array
  const answer = [];

  for (const i in boxes) {
    let sum = 0;

    // check position in the string.
    if (i !== 0) {
      // loop backwards to the end.
      for (let index = i - 1; index <= 0; index--) {
        if (boxes[index] === '1') {
          sum = sum + Math.abs(index);
        }
      }
    }

    // then loop forwards.

    for (let index = i + 1; index <= n; index++) {
      if (boxes[index] === '1') {
        sum = sum + Math.abs(index);
      }
    }

    // append sum to the answer.

    answer.push(sum);
  }

  return answer;
};

/**
 * so I need to loop over the entire string for every
 * box
 * in the process I have to do some sort of increment
 * on the distance between the current hole and the ith
 * hole if the current hole has a ball.
 * the value of the current box does not matter.
 *
 * example
 *
 * boxes = "001011"
 * i=0
 * loop
 * starting at i+1,
 * check if am at the end or the start of the array,
 * if am at the start, then I need to initialize a value
 * sum = 0 and another index = 1
 * if value at current index = "0" then skip to the next one,
 * otherwise add the value of the index to the sum
 * loop until index=length of boxes string
 * if am at the end then I need to loop with index decrementing
 * and adding the absolute value to the total
 *
 * I have to do one loop if the value of i != 0 or i!= boxes.length
 * I will also need to push every new value to an array in the order
 * of the boxes.
 */
