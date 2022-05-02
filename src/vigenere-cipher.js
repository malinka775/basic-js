const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
//console.log(String.fromCharCode(65, 66, 67))
//console.log('a'.charCodeAt(0))
class VigenereCipheringMachine {
  
  encrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let result = []
    let upperKey = key.toUpperCase()
    
    let j = 0
    console.log('upperKey=', upperKey, 'upperKey[j].charCodeAt(0) =', upperKey[j].charCodeAt(0) )
    for (let i = 0; i < message.length; i++) {
      let char = message[i]
      if (char.charCodeAt(0) === 32) {
        continue
      }
      let upperCaseCharCode = char.toUpperCase().charCodeAt(0)
      
      if (upperCaseCharCode >= 65 && upperCaseCharCode <= 90 ) {
        let encrCharCode = upperCaseCharCode + upperKey[j].charCodeAt(0)
        if(encrCharCode > 90) {
          encrCharCode = encrCharCode - 26
        }
        result.push(encrCharCode)
        j++
      
      } else {
        result.push(char.charCodeAt(0))
        j++
      }
      
    }
    return String.fromCharCode(...result)
    
  }

  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};

// AEIHQXaETaSHKAa
//'AEIHQX SX DLLU!'

//'attack at dawn!', 'alphonse'