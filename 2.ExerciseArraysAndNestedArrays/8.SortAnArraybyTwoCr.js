function sortingArry(arr) {
  const secondaryCrit = arr.sort((a, b) => a.localeCompare(b));
  const primaryCrit = secondaryCrit.sort((a, b) => a.length - b.length);
  return `${primaryCrit.join("\n")}`;
}

console.log(sortingArry(["alpha", "beta", "gamma"]));
console.log(sortingArry(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
console.log(sortingArry(["test", "Deny", "omen", "Default"]));
