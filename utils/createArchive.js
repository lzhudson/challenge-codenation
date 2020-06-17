const fs = require('fs');
async function createArchive(data) {
  await fs.writeFile('./answer.json', JSON.stringify(data, null, 2), (err) => {
    if(err) {
      console.error(err);
      return;
    }
  });
}
module.exports = {
  createArchive
}
