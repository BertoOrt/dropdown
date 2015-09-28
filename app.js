var dropdown = document.querySelector('.dropdown-title')
dropdown.addEventListener("click", function (e) {
  var list = document.querySelector('.dropdown-list')
  if (list.style.display !== "block") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
})

var checkbox = document.querySelector('#checkbox')
checkbox.addEventListener("click", function (e) {
  var box = document.querySelector('.checkbox')
  if (this.checked) {
    box.style.background = "orange"
  } else {
    box.style.background = "white"
  }
})

var tab = document.getElementsByClassName('tab')
for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (e) {
    console.log(e);
  })
}
