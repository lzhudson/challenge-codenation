const sha1 = require('sha1');

function generateResumeCryptographic(descifredMessage) {
  return sha1(descifredMessage);
}
module.exports = {
  generateResumeCryptographic
}
