const { getPeoples } = require("./service");

Array.prototype.myFilter = function (callback) {
  const list = [];

  for (i in this) {
    const item = this[i];
    const result = callback(item, i, this);

    if (!result) continue;

    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await getPeoples("a");

    // const familyName = results.filter((item) => {
    //   const result = item.name.toLowerCase().indexOf("lars") !== -1;
    //   return result;
    // });

    const familyName = results.myFilter((item, index, list) => {
      console.log(`index: ${index} | list: ${list.length}`);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familyName.map((people) => people.name);

    console.log("names", names);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
