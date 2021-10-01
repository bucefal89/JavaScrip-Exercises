function magic(matrix) {
  const result = [];

  for (let row of matrix) {
    let sum = 0;
    for (let col of row) {
      sum += col;
    }
    result.push(sum);
  }

  const finale = result.reduce(function (a, b) {
    return a === b ? a : NaN;
  });
  if (finale) {
    return true;
  } else {
    return false;
  }
}

console.log(
  magic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magic([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
