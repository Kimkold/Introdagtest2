function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("#name ").value;
  document.querySelector("h3").textContent +=
    " din alder er " + document.querySelector("#age").value;
}
document.querySelector("button").addEventListener("click", sayHello);
