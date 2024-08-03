var input = document.getElementById('userInput');
ul = document.querySelector("ul")
itemsTotal = document.getElementsByTagName("li")

input.addEventListener('keypress', function(event) {
  if(event.key == 'Enter'){
    event.preventDefault();
    let value = document.getElementById("userInput").value;
    li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

    liButton = document.createElement("button");
    liButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(liButton);

	liButton.addEventListener("click", deleteListItem);
  }

  function deleteListItem (){
    this.parentElement.remove()
  }

  
        
})