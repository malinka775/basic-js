const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (!arr.length) {
    return arr
  }
  let result = []
  let elementsToDiscard = []
  let elementsToDouble = []
  arr.forEach((item, index) => {
    if (item === '--discard-next') {
      elementsToDiscard.push(index + 1)
    } else if (item === '--discard-prev'){
      elementsToDiscard.push(index - 1)
    } else if (item === '--double-next') {
      elementsToDouble.push(index + 1)
    } else if ( item === '--double-prev') {
      elementsToDouble.push(index - 1)
    } 
  })

  arr.forEach((item,index) => {
    if (!elementsToDiscard.includes(index) && item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev') {
      result.push(item)
    } else if (elementsToDouble.includes(index)) {
      
      result.push(item)
    } 

  })
  return result
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))

module.exports = {
  transform
};
