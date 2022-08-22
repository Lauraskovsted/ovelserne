//konstanter til knapperne
const snaps = document.querySelector("#knapSnaps");
const beer = document.querySelector("#knapBeer");
const pepsi = document.querySelector("#knapPepsi");
const energi = document.querySelector("#knapEnergi");

snaps.addEventListener("click", funktionDerKaldesVedKlik);
beer.addEventListener("click", funktionDerKaldesVedKlik);
pepsi.addEventListener("click", funktionDerKaldesVedKlik);
energi.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");

  if (this == snaps) {
    console.log("alkohol");
  } else if (this == beer) {
    console.log("alkohol");
  } else if (this == energi) {
    console.log("alkoholfri");
  } else {
    console.log("alkoholfri");
  }
}
