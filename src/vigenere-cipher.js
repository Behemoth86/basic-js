class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    this.direct = direct;
  }
  createLongKey(message, key) {
    let lkey = key;
    while (lkey.length < message.length) {lkey = `${lkey}${key}`;}
    return lkey.slice(0, message.length).toUpperCase();
  }
  encrypt(message, key) {
    if (message && key) {
      const lkey = this.createLongKey(message, key);
      let ArrEnc = [];
      let i = 0;
      message.toUpperCase().split('').forEach(e => {
          if (this.alpha.indexOf(e) !== -1) {
            const SymbolEnc = this.alpha[(this.alpha.indexOf(e)+this.alpha.indexOf(lkey[i]))%this.alpha.length];
            i++;
            ArrEnc.push(SymbolEnc);
          } else {
            ArrEnc.push(e);
          }
        });
      return this.direct?ArrEnc.join(''):ArrEnc.reverse().join('');
    }
    throw new Error();
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      const lkey = this.createLongKey(encryptedMessage, key);
      let encryptArr = [];
      let i = 0;
      encryptedMessage.toUpperCase().split('').forEach(e => {
          if (this.alpha.indexOf(e)!==-1) {
            const SymbolEnc = this.alpha[(this.alpha.indexOf(e)+this.alpha.length-this.alpha.indexOf(lkey[i]))%this.alpha.length];
            i++;
            encryptArr.push(SymbolEnc);
          } else {
            encryptArr.push(e);
          }
        });
      return this.direct?encryptArr.join(''):encryptArr.reverse().join('');
    }
    throw new Error();
  }
}
module.exports = VigenereCipheringMachine;