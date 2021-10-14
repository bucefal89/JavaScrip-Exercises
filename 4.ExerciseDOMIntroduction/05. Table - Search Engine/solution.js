function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField");
    let inputText = input.value.toLowerCase();

    const tableRows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < tableRows.length; i++) {
      let text = tableRows[i].textContent.toLowerCase();
      if (text.includes(inputText)) {
        tableRows[i].classList.add("select");
      } else {
        tableRows[i].classList.remove("select");
      }
    }
    input.value = "";
  }
}
