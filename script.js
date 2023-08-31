//Beregner beløb med default moms
//momsBeregner(10);

//Beregner beløb med explicit moms
//momsBeregner(340, 20);

const beloeb = document.querySelector("#beloeb");
const moms = document.querySelector("#moms");

const resultText = document.querySelector("#result");
document.querySelector("#button").addEventListener("click", klik);

function klik() {
  const beloebInput = parseInt(beloeb.value);
  const momsInput = parseInt(moms.value);
  resultText.textContent = momsBeregner(beloebInput, momsInput);
}

function momsBeregner(beloeb, moms) {
  const result = beloeb + (beloeb / 100) * moms;

  return result;
}
