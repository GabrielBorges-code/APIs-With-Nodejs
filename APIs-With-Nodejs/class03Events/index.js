const EventEmmiter = require("events");
const { resolve } = require("path");

class MyEmissor extends EventEmmiter {}

const myEmissor = new MyEmissor();
const nameEvent = "user:click";

myEmissor.on(nameEvent, function (click) {
  console.log("um usuário clicou", click);
});

const stdin = process.openStdin();

function main() {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", (value) => {
      // console.log("Você digitou: ", value.toString());
      return resolve(value);
    });
  });
}

main().then((result) => console.log("Resultado: ", result.toString()));

// myEmissor.emit(nameEvent, 'na barra de rolagem');
// myEmissor.emit(nameEvent, 'no ok');

// let count = 0;
// setInterval(() => {
//   myEmissor.emit(nameEvent, 'no okay: ' + (count++))
// }, 1000)
