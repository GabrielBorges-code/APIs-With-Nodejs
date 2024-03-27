const service = require("./service");

async function main() {
  try {
    const result = await service.getPeoples("a");
    const names = [];

    console.time("for");
    for (let i = 0; i < result.results.length; i++) {
      const peoples = result.results[i];
      names.push(peoples.name);
    }
    console.timeEnd("for");

    console.time("forin");
    for (let i in result.results) {
      const peoples = result.results[i];
      names.push(peoples.name);
    }
    console.timeEnd("forin");

    console.time("forof");
    for (people of result.results) {
      names.push(people.name);
    }
    console.timeEnd("forof");

    console.log("result", names);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
