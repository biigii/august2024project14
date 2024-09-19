// var h1 = document.querySelector("h1");

// h1.style.color = "#f11";
// h1.style.fontSize = "5em";

// function
// function myFirstFunction() {
//     var body = document.body;
//     body.style.backgroundColor = "#fe1"
// }

// myFirstFunction();

function changeBodyBackground() {
  document.body.style.backgroundColor = "#69f";
}

document
  .querySelector("#btn-1")
  .addEventListener("click", changeBodyBackground);

function changeH1Styling() {
  var h1 = document.querySelector("h1");
  h1.style.color = "#ff1";
  h1.style.textAlign = "center";
  h1.style.fontSize = "4em";
}

document.querySelector("#btn-2").addEventListener("click", changeH1Styling);
