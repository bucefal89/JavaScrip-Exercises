function heroisInventory(arr) {
  let result = [];

  for (let iter of arr) {
    let [name, level, items] = iter.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    result.push({ name, level, items });
  }

  console.log(JSON.stringify(result));
}

heroisInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
