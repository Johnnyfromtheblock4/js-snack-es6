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

//creo array contenente
let leggera = bicicletta[0];

for (let i = 1; i < bicicletta.length; i++) {
  if (bicicletta[i].peso < leggera.peso) {
    leggera = bicicletta[i];
  }
}

console.log(
  `La bici leggera è ${leggera.name} con un peso di ${leggera.peso} kg`
);
