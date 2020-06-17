const axios = require('axios');

const getData = async (token) => {
	const response = await axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`);
  const { data } = response;
  return data;
}

module.exports = {
  getData
}
