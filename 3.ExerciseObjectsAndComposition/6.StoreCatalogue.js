function store(arr) {
  const result = {};

  for (let el of arr) {
    const temp = el.split(" : ");
    let productName = temp[0];
    let price = Number(temp[1]);
    let index = productName[0];

    if (!result[index]) {
      result[index] = {};
    }
    result[index][productName] = price;
  }
  const sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let key of sorted) {
    let products = Object.entries(result[key]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    console.log(key);
    for (el of products) {
      console.log(`  ${el[0]}: ${el[1]}`);
    }
  }
}

store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
