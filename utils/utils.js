function transformInArray(cifredMessage) {
  return cifredMessage.split('');
}
function transformInString(cifredMessageArr) {
  return cifredMessageArr.join('');
}
module.exports = {
  transformInArray,
  transformInString
}
