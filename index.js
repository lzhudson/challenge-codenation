const readline = require('readline');
const { getData } = require('./utils/getData');
const { transformInArray, transformInString } = require('./utils/utils');
const { descifreMessage } = require('./utils/descifreMessage');
const { generateResumeCryptographic } = require('./utils/generateResumeCryptographic');
const { generateJsonData } = require('./utils/generateJsonData');
const { createArchive } = require('./utils/createArchive');

async function resolveChallenge(token) {
  const data = await getData(token);
  const { cifrado, numero_casas } = data;
  const cifredArr = transformInArray(cifrado);
  const descifredMessageArr = descifreMessage(cifredArr, numero_casas);
  const descifredMessage = transformInString(descifredMessageArr);
  const resumeCryptographic = generateResumeCryptographic(descifredMessage);
  const answerJSON = generateJsonData(numero_casas, token, cifrado, descifredMessage, resumeCryptographic);
  const answerJSONArchive = createArchive(answerJSON);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
console.log('Digite sua chave aqui:');
rl.on('line', async function(line){
  await resolveChallenge(line);
  console.log('Verificar Arquivo no diretorio raiz do projeto');
  rl.close();
});



