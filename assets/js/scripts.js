function add() {
    var value = document.querySelector("#input").value;
    var ul = document.querySelector("ul.list");
    var li = document.createElement("li");

    li.textContent = value;
    ul.appendChild(li)
}


for (var counter = 1; counter <= 200; counter++) {
    var figure = document.querySelector("figure.images")
    var img = document.createElement("img")
    img.src = "https://picsum.photos/id/" + counter + "/100"

    figure.appendChild(img)
}


// var countries = ["new zealand", "australia", "usa", "uk", "japan"]


// function createList(country) {
//     var h2 = document.createElement("h2");
//     h2.textContent = country;
//     document.body.appendChild(h2)
// }

// countries.forEach(createList)