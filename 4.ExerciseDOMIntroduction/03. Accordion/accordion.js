function toggle() {
  const element = document.getElementById("extra");
  //   element.style.display = "block";

  let button = document.getElementsByClassName("button")[0];

  if (button.textContent == "More") {
    button.textContent = "Less";
  } else {
    button.textContent = "More";
  }

  if (element.style.display == "none" || element.style.display == "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
