function search() {
  const table = document.querySelectorAll("#towns li");

  const arr = Array.from(table);

  const input = document.getElementById("searchText").value;

  result = [];

  for (let el of arr) {
    if (el.textContent.includes(input)) {
      el.style.fontWeight = "bold";
      el.style.textDecoration = "underline";
      result.push(el.textContent);
    } else {
      el.style.fontWeight = "normal";
      el.style.textDecoration = "";
    }
  }

  const finale = document.getElementById("result");

  finale.textContent = `${result.length} matches found`;
}
