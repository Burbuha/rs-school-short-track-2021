/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  let i = 0;
  const arrSort = arr.filter((item) => item !== -1);
  arrSort.sort((a, b) => a - b);
  arr.forEach((item) => {
    if (item === -1) {
      result.push(item);
    } else {
      result.push(arrSort[i]);
      i++;
    }
  });
  return result;
}

module.exports = sortByHeight;
