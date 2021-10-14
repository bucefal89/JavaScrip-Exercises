function solve() {
  const text = document.getElementById("input").value;
  const output = document.getElementById("output");
  const splittedText = text.split(".").filter((el) => el != "");

  for (let i = 0; i < splittedText.length; i += 3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (splittedText[i + y]) {
        arr.push(splittedText[i + y]);
      }
    }
    let paragraph = arr.join(". ") + ".";
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}
