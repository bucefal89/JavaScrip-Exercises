function fruit(fruit, weight, money) {
  const totalMony = (weight * money) / 1000;
  const totalKg = weight / 1000;
  console.log(
    `I need $${totalMony.toFixed(2)} to buy ${totalKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

consol.log(fruit("orange", 2500, 1.8));
