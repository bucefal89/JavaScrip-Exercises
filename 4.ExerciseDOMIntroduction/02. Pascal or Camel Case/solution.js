function solve() {
  const input = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");

  const splitted = input.split(" ");

  let result = "";

  if (currentCase == "Camel Case") {
    result +=
      splitted[0][0].toLowerCase() +
      splitted[0].slice(1, splitted[0].length).toLowerCase();

    for (let i = 1; i < splitted.length; i++) {
      result +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }

    resultContainer.textContent = result;
  } else if (currentCase == "Pascal Case") {
    for (let i = 0; i < splitted.length; i++) {
      result +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }

    resultContainer.textContent = result;
  } else {
    resultContainer.textContent = "Error!";
  }
}
