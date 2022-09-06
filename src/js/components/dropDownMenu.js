document.addEventListener("DOMContentLoaded", dropDownMenu());
document.getElementById('itemBuyCripto').addEventListener("click", dropDownMenu);

function dropDownMenu() {
let item = document.getElementById('subnavBuyCripto');
  if (item.style.display == "none"){
      item.style.display = "block";
  } else {
    item.style.display = "none"}
};

export default dropDownMenu;
