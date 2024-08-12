let input = document.getElementById("search-input");
let btn = document.getElementById("search-button");
let categoriesList = document.getElementById("category-list");
let categories = categoriesList.getElementsByTagName("li");


function Seacrh() {
  const currentVal = input.value.toLowerCase();
  console.log(currentVal);
  for (let i = 0; i < categories.length; i++) {
    const catz = categories[i].innerText.toLocaleLowerCase() 
    if (catz.includes(currentVal)) {
      categories[i].style.display = ""; // Show matching category
    } else {
      categories[i].style.display = "none"; // Hide non-matching category
    }
  }
}


input.addEventListener("keyup", Seacrh);
btn.addEventListener('click', Seacrh);