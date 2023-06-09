let myList = (data) => {
  if (data?.length === 0 || data == undefined) {
    console.log("La lista esta vacia");
  } else {
    data.forEach((elemento) => {
      console.log(elemento);
    });
    console.log("la longitud de lalista es " + data.length);
  }
};

myList(); // deberia dar unerror de undefined "La lista vacia"
myList([1, 2, 3, 4, 5, 6]); // deberia dar unerror de undefined "La lista vacia"
