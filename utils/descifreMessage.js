function descifreMessage(cifredArr, numberToDecifred) {
  const cifredMessageArr = cifredArr.map(char => {
    if (char === ' ' || char === '.' || char === '!' || char === ',' ) {
      return char;
    }
    else {
      let charNumber = char.charCodeAt(0);
      let charNumberDescript = charNumber - numberToDecifred;
      if (charNumberDescript > 122) {
        let newChar = charNumberDescript -= 26;
        return String.fromCharCode(newChar);
      }
      else if (charNumberDescript < 97) {
        let newChar = charNumberDescript += 26;
        return String.fromCharCode(newChar);
      }
      else {
        return String.fromCharCode(charNumberDescript)
      }
    }  
  });
  return cifredMessageArr;
}
module.exports = {
  descifreMessage
}
