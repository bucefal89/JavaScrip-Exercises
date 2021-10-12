function result(arr) {
  const finale = {};

  for (let i = 0; i < arr.length; i += 2) {
    const food = arr[i];
    const calories = Number(arr[i + 1]);

    if (finale[food] === undefined) {
      finale[food] = calories;
    }
  }

  console.log(finale);
}

result(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
result(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
