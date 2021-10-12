function towns(arr) {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i].split(" | ");
    let nameToStrip = temp[0].split("| ");
    let name = nameToStrip[1];
    let latitude = Number(Number(temp[1]).toFixed(2));
    let longitudeToStrip = temp[2].split(" |");
    let longitude = Number(Number(longitudeToStrip[0]).toFixed(2));

    const obj = {
      Town: "",
      Latitude: Number,
      Longitude: Number,
    };

    obj.Town = name;
    obj.Latitude = latitude;
    obj.Longitude = longitude;

    result.push(obj);
  }
  const final = JSON.stringify(result);
  return final;
}

console.log(
  towns([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);

console.log(
  towns([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
  ])
);
