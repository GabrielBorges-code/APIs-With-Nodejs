const URL = `https://swapi.dev/api/people`;

async function getPeoples(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results.map(mapPeople);
}

function mapPeople(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = { getPeoples };
