/*
['1', '2', '3', '4']
['4', '1', '2', '3']
['3', '4', '1', '2']
*/

function rotation(arr, number) {
  const temp = arr;
  const result = [];

  for (let i = 0; i < number; i++) {
    let lastEl = temp.pop();
    arr.unshift(lastEl);
  }
  console.log(temp.join(" "));
}

rotation(["1", "2", "3", "4"], 2);
rotation(["Banana", "Orange", "Coconut", "Apple"], 15);
