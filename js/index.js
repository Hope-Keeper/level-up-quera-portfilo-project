var taggleBtn = document.querySelector("#nav-menu-toggler");
var menu = document.querySelector("#nav-menu-container");
taggleBtn.addEventListener("click", function clickHandler() {
  console.log("jgvhkgckhg");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// function clickHandler() {
//   console.log(menu);

//   console.log("jhfh");
//   menu.style.display = "block";
// }
