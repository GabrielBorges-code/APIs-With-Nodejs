const { getPeoples } = require("./service");

Array.prototype.myMap = function (callback) {
  const newArrayMap = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i);
    newArrayMap.push(result);
  }

  return newArrayMap;
};

async function main() {
  try {
    const result = await getPeoples("a");
    const names = [];

    // console.time("forEach");
    // result.results.forEach((item) => {
    //   names.push(item.name);
    // });
    // console.timeEnd("forEach");

    // console.time("map");
    // const ortherNames = result.results.map((item) => item.name);
    // console.timeEnd("map");

    const namesWithMyMap = result.results.myMap((people, i) => {
      return `${i} - ${people.name}`;
    });

    console.log("names", names);
    console.log("namesWithMyMap", namesWithMyMap);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
