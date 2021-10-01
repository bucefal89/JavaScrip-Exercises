function addAndRemove(array) {
  const result = [];
  let numb = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      result.push(numb);
      numb += 1;
    } else if (array[i] === "remove") {
      numb += 1;
      result.pop();
    }
  }
  if (result.length > 0) {
    console.log(result.join("\n"));
  } else {
    console.log("Empty");
  }
}

addAndRemove(["add", "add", "add", "add"]);
console.log("-------");
addAndRemove(["add", "add", "remove", "add", "add"]);
console.log("-------");
addAndRemove(["remove", "remove", "remove"]);
