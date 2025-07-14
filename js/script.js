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
//creo array di oggetti squadre di calcio
const teams = [
  {
    name: `Atalanta`,
    points: 0,
    fouls: 0,
  },
  {
    name: `Monza`,
    points: 0,
    fouls: 0,
  },
  {
    name: `Lecco`,
    points: 0,
    fouls: 0,
  },
  {
    name: `Brescia`,
    points: 0,
    fouls: 0,
  },
];

//creo array vuoto
let newArray = [];

//ciclo teams
for (let i = 0; i < teams.length; i++) {
  //genero numeri casuali per points e fouls
  teams[i].points = Math.floor(Math.random() * 100) + 1;
  teams[i].fouls = Math.floor(Math.random() * 10000) + 1;
  newArray.push({
    points: teams[i].points,
    fouls: teams[i].fouls,
  });
}
console.log(newArray);
