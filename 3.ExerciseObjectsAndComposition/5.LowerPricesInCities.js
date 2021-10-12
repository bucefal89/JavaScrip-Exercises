function lowerPrice(arr) {
  const result = {};

  for (let el of arr) {
    let temp = el.split(" | ");
    let townName = temp[0];
    let product = temp[1];
    let price = Number(temp[2]);

    if (result[product] == undefined) {
      result[product] = {};
    }
    result[product][townName] = price;
  }

  for (let prod in result) {
    const sorted = Object.entries(result[prod]).sort((a, b) => a[1] - b[1]);

    console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}

lowerPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
