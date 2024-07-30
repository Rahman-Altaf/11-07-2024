const p = fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Inside finally");
  });

console.log("Outside api call");
console.log("P: ", p);
