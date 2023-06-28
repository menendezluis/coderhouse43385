let database = [];

for (let x = 0; x < 10000; x++) {
  let myNumber = parseInt(Math.random() * 21);
  database.push(myNumber);
}

let groupBy = (array) => {
  let result = {};
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
