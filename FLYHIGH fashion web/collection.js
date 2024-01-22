var productCollection = document.getElementById("product")
var searchBar = document.getElementById("search")
var productBox = productCollection.querySelectorAll("div")

searchBar.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productBox.length; count + 1) {
        var productName = productBox[count].querySelector("p").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productBox[count].style.display = "none"
        }

        else {
            productBox[count].style.display = "block"
        }
    }

})
