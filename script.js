//Beregner beløb med default moms
//momsBeregner(10);

//Beregner beløb med explicit moms
//momsBeregner(340, 20);

document.querySelector("#button").addEventListener("click", momsBeregner);

function momsBeregner(beloeb, moms = 25) {
  console.log((beloeb / 100) * moms + beloeb);
  console.log(beloeb * (1 + moms / 100));
  beloeb = document.querySelector("#beloeb").value;
  moms = document.querySelector("#moms").value;
  let result = beloeb + (beloeb / 100) * moms;
  document.querySelector("#result").textContent = result;
}
