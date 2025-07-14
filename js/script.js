//SNACK 1
//definisco l'array di oggetti
const bicicletta = [
  {
    name: "Coppi",
    peso: 37,
  },
  {
    name: "Colnago",
    peso: 44,
  },
  {
    name: "Bianchi",
    peso: 22,
  },
  {
    name: "Grazziella",
    peso: 18,
  },
];

//creo array contenente la prima bici
let leggera = bicicletta[0];

for (let i = 1; i < bicicletta.length; i++) {
  //condizione if per vedere la più leggera
  if (bicicletta[i].peso < leggera.peso) {
    leggera = bicicletta[i];
  }
}
//stampo il ciclo
console.log(
  `La bici leggera è ${leggera.name} con un peso di ${leggera.peso} kg`
);

//SNACK 2
const teams = [
  {
    name: `Atalanta`,
    puntiFatti: `0`,
    falliSubiti: `0`,
  },
  {
    name: `Monza`,
    puntiFatti: `0`,
    falliSubiti: `0`,
  },
  {
    name: `Lecco`,
    puntiFatti: `0`,
    falliSubiti: `0`,
  },
  {
    name: `Brescia`,
    puntiFatti: `0`,
    falliSubiti: `0`,
  },
];
