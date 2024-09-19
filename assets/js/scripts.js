function rotateImageOne() {
  document.querySelector("#image-1").style.rotate = "360deg";
}

function deleteImage() {
  document.querySelector("#image-1").style.display = "none";
}

function addText() {
  var p = document.createElement("p");
  var article = document.querySelector("article.text");

  p.textContent =
    "The easiest way to get icons on your website is with a Kit. It's your very own custom version of Font Awesome, all bundled up with only the icons, tools, and settings you need.";
  p.style.color = "#f11";
  article.appendChild(p);
}

function addImage() {
  var image = document.createElement("img");
  var figure = document.querySelector(".frame");

  // you can add src to img two ways
  image.src = "https://picsum.photos/id/1050/300";
  // image.setAttribute("src", "https://picsum.photos/id/1050/300")

  // image.alt = "this is an image added via javascript"
  image.setAttribute("alt", "this is an image added via javascript");

  image.width = 500;

  figure.appendChild(image);
}

function readText() {
    var span = document.querySelector("span#txt")
    var text = document.querySelector("input[data-some-word]")
    var value = text.value

    span.innerHTML = value
}
