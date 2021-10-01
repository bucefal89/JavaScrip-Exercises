function result(arry, numb) {
  let finale = [];

  for (let i = 0; i < arry.length; i += numb) {
    finale.push(arry[i]);
  }
  return finale;
}

result(["5", "20", "31", "4", "20"], 2);
result(["dsa", "asd", "test", "tset"], 2);
result(["1", "2", "3", "4", "5"], 6);
