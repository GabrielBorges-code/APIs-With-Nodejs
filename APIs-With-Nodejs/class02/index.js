/**
 1 - obter o usuário
 2 - obter o telefone do usuário 
 3 - objeter o endereço
 */
// importamos um módulo interno do node.js
const util = require("node:util");

const getAddressAsync = util.promisify(getAddress);
const getPhoneAsync = util.promisify(getPhone);

console.log("getAddressAsync", getAddressAsync);

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error("Azedeu"));

      return resolve({
        id: 1,
        name: "Juberemos",
        dataNasc: new Date(),
      });
    }, 1000);
  });
}

function getAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "dos bobos",
      number: 0,
    });
  }, 2000);
}

function getPhone(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "99999-9999",
      ddd: 61,
    });
  }, 1000);
}

main();
async function main() {
  try {
    console.time("medida-promise");

    const user = await getUser();

    const result = await Promise.all([
      getAddressAsync(user.id),
      getPhoneAsync(user.id),
    ]);

    console.log("user", user);
    console.log("address", result[0]);
    console.log("phone", result[1]);

    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("Error: ", error);
  }
}

// function getAddress(idUser) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve({
//         street: "Rua dos bobos",
//         number: 0,
//       });
//     }, 1000);
//   });
// }

// const userPromise = getUser();

// userPromise
//   .then((result) =>
//     getPhone(result.id).then((phone) => {
//       return {
//         ...{ phone },
//         user: result,
//       };
//     })
//   )
//   .then((result) => {
//     const address = getAddressAsync(result.user.id);
//     return address;
//   })
//   .then((result) => console.log("result: ", result.user.id))
//   .catch((error) => console.error("Error: ", error));

// getUser((error, user) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }

//   getPhone(user.id, (error1, phone) => {
//     if (error) {
//       console.log("Error: ", error1);
//       return;
//     }

//     getAddress(user.id, (error2, address) => {
//       if (error) {
//         console.log("Error: ", error2);
//         return;
//       }

//       console.log(`${user.name} - ${phone.phone} - ${address.street}`);
//     });
//   });
// });
