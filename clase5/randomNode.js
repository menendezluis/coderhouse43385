let database = [];
for (let x = 0; x < 10000; x++) {
  database.push(parseInt(Math.random() * 21));
}

let groupBy = (array) => {
  let result = {};
  result.atributo1;

  array.forEach((element) => {
    if (result[element]) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  });
  return result;
};

let groupByResult = groupBy(database);
console.log(groupByResult);

let count = 0;
database.forEach((dato) => {
  if (dato === 0) count++;
});
console.log("cuantas veces se genero 0 ", count);
