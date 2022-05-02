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
  let deleteNext = false
  let deletePrev = false
  let nextIsDeleted = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i == arr.length - 1) {
        continue
      }
      deleteNext = true
    } else if (arr[i] === '--discard-prev'){
      if(i == 0) {
        continue
      }
      if (nextIsDeleted) {
        nextIsDeleted = false
        continue
      }
      deletePrev = true
      arr[i] = 'skip'
      i = i - 2
    } else if (arr[i] === '--double-next') {
      if (i == arr.length - 1) {
        continue
      }
      result.push(arr[i+1])
    } else if ( arr[i] === '--double-prev') {
      if(i == 0) {
        continue
      }
      if (nextIsDeleted) {
        nextIsDeleted = false
        continue
      }
      result.push(arr[i-1])
    } else {
      if (arr[i] === 'skip') {
        continue
      }
      if(deleteNext) {
        deleteNext = false
        nextIsDeleted = true
        continue
      } 
      if (deletePrev) {
        deletePrev = false
        result.pop()
      } else{
        
        result.push(arr[i])
      }
    }

  }
  
  return result
}


module.exports = {
  transform
};
