const { getPeoples } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

  for (let index = 0; index < this.length; index++) {
    finalValue = callback(finalValue, this[index], this);
  }

  return finalValue;
};

async function main() {
  try {
    const { results } = await getPeoples("a");

    const weight = results.map((item) => parseInt(item.height)); //parseInt(item.mass));

    console.log("wight", weight);

    const myList = [
      ["Erick", "Wendel"],
      ["NodeBR", "Nerdzão"],
    ];

    const total = myList
      .myReduce((previous, next) => {
        return previous.concat(next);
      }, [])
      .join(", ");

    console.log("total: ", total);

    // const totalWeight = weight.reduce((previous, next) => {
    //   return previous + next;
    // }, 0);

    // console.log("totalWeight", totalWeight);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
