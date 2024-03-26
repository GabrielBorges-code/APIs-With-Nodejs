const { axios } = require("axios");
const URL = `https://swapi.co/api/people`;

async function getPeoples(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.getAdapter(url);
  return response.data;
}

getPeoples("r2")
  .then((result) => console.log(result))
  .catch((err) => console.error("Error: ", err));
