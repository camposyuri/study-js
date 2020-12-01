let txt = "";
const carros = ["Ford", "Fiat", "Peugeot", "Citroen"];
carros.forEach(myFunction);
document.querySelector("#app").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
