function wordUpper(word) {
  let pattern = /[\w]+/g;
  let result = word.match(pattern);
  console.log(result.join(", ").toUpperCase());
}

wordUpper("Hi, how are you?");
