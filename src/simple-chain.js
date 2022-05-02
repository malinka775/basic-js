const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
 
    length: 0,
    chain: [],
 

  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.length
  },
  addLink( value = '( )' ) {
    
    this.chain.push(`( ${value} )`)
    this.length++
    console.log('from add', this.chain)
    return this
  },
  removeLink( position ) {
    if (position < this.chain.length && position > 0 && typeof(position) === 'number' && Number.isInteger(position)) {
      this.chain.splice(position-1, 1)
      this.length--
      console.log('from remove', this.chain)
      return this
    } else {
      this.chain = []
      this.length = 0
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    let current = this.length-1
    let result = []
    while (current >= 0) {
      result.push(this.chain[current])
      current--
    }

    this.chain = result
    console.log('from reverse', this.chain)
    return this
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    chain = this.chain
    console.log(chain)
    this.chain = []
    this.length = 0
    return chain.join('~~')
  }
};
console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain())
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )'
module.exports = {
  chainMaker
};
