function cooking(number, op1, op2, op3, op4, op5) {
  let fistEl = parseInt(number);
  const listOperators = [op1, op2, op3, op4, op5];

  for (let i = 0; i < listOperators.length; i++) {
    if (listOperators[i] == "chop") {
      let temp = fistEl / 2;
      console.log(temp);
      fistEl = temp;
    } else if (listOperators[i] === "dice") {
      let temp = Math.sqrt(fistEl);
      console.log(temp);
      fistEl = temp;
    } else if (listOperators[i] === "spice") {
      let temp = fistEl + 1;
      console.log(temp);
      fistEl = temp;
    } else if (listOperators[i] === "bake") {
      let temp = fistEl * 3;
      console.log(temp);
      fistEl = temp;
    } else if (listOperators[i] === "fillet") {
      let temp = fistEl * 0.8;
      console.log(temp.toFixed(1));
      fistEl = temp;
    }
  }
}

cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");
