const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  //throw new NotImplementedError('Not implemented');
  if (!options) {
    return str
  }
  let result = ''
  let unitStr = str
  
  if (options.hasOwnProperty('addition')) {
    let addition = options.addition +''
    if (+options.additionRepeatTimes) {
      if (options.additionSeparator) {
        for (let i = 0; i < +options.additionRepeatTimes - 1; i++){
          unitStr += addition + options.additionSeparator
        }
        
      } else {
        for (let i = 0; i < +options.additionRepeatTimes - 1; i++){
          unitStr += addition + '|'
        }
        
      }
    }
    unitStr += addition
  }
  result = unitStr
  if (+options.repeatTimes) {
    
    if (options.separator) {
      for (let i = 0; i < +options.repeatTimes-1; i++){
        result += options.separator + unitStr
      }
    } else {
      for (let i = 0; i < +options.repeatTimes-1; i++){
        result += '+' + unitStr
      }
    }
    
  }

  return result

}



module.exports = {
  repeater
};
