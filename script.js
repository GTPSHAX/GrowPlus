const btnNav = document.querySelector("#btn-nav");
const navHp = document.querySelector(".navHp")
btnNav.addEventListener("click", () => {
  if (navHp.style.display == "block") navHp.style.display = "none", document.querySelector("#btn-nav > div").style.backgroundColor = "#ED2B2A", document.querySelector("#btn-nav > div").style.color = "#DDDDDD";
  else navHp.style.display = "block", document.querySelector("#btn-nav > div").style.backgroundColor = "#DDDDDD", document.querySelector("#btn-nav > div").style.color = "#ED2B2A";
})