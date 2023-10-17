const taggleBtn = document.querySelector("#nav-menu-toggler");
const menu = document.querySelector("#nav-menu-container");
const navUl = document.querySelector("#nav-menu-list");
const opensvg = document.querySelector(".open");
const closesvg = document.querySelector(".close");
// taggleBtn.addEventListener("click", function clickHandler() {
//   console.log("jgvhkgckhg");
//   if (menu.className == "") {
//     menu.className = "collapse1";
//     navUl.className = "collapse2";
//     opensvg.style.display = "block";
//     closesvg.style.display = "none";
//   } else {
//     menu.className = "";
//     navUl.className = "";
//     opensvg.style.display = "none";
//     closesvg.style.display = "block";
//   }
// });

// function clickHandler() {
//   console.log(menu);

//   console.log("jhfh");
//   menu.style.display = "block";
// }

taggleBtn.addEventListener("click", function clickHandler() {
  console.log("jgvhkgckhg");
  menu.classList.toggle("collapse1");
  navUl.classList.toggle("collapse2");

  if (navUl.className == "nav-menu-list collapse2") {
    opensvg.style.display = "none";

    closesvg.style.display = "block";
  } else {
    opensvg.style.display = "block";

    closesvg.style.display = "none";
  }

  // if (navUl.className == "collapse2") {
  //   navUl.className = "nav-menu-list";
  // } else {
  //   navUl.className = "collapse2";
  //   menu.className = "collapse1";
  // }

  // if (menu.className == "") {
  //   menu.className = "collapse1";
  //   navUl.className = "collapse2";
  //   opensvg.style.display = "block";
  //   closesvg.style.display = "none";
  // } else {
  //   menu.className = "";
  //   navUl.className = "";
  //   opensvg.style.display = "none";
  //   closesvg.style.display = "block";
  // }
});
