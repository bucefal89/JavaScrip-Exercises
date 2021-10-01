function sortingNumbers(arr) {
  const newArry = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < newArry.length; i++) {
    result.push(newArry[i]);
    let lastEL = newArry[newArry.length - 1];
    result.push(lastEL);
    newArry.pop(lastEL);
  }

  return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
