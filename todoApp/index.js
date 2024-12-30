const myList = document.querySelector(".myList");
const addBtn = document.querySelector(".addTodoBtn")
const inputForm = document.querySelector("#inputForm");
const myForm = document.querySelector(".myform");
const checkBox = document.querySelector(".checkBox");



let allData = JSON.parse(localStorage.getItem("data") ) || [];



function ShowItems(){

  let newHtmlList = " " ;

  allData.forEach((element) => {
 newHtmlList  += `<li class="flex listItems" id="${element.id}">
     <span class="itemName">${element.name}</span>
     <div class="itemManipulator ">
     <input type="checkbox" name="" id="">
     <button class="deleteBtn">X</button>
     </div>
     </li>
     `

         
  });
  myList.innerHTML = newHtmlList;

};


ShowItems();



addBtn.addEventListener('click', function(e) {
  e.preventDefault();


  const newTodo = inputForm.value;
  if(newTodo.trim() === ''){

    alert("Please enter a valid todo");
    return;
  }else {

 const UniqueID = Math.floor(Math.random() * 1000);  


allData.push({name : newTodo.trim(), id : UniqueID});

localStorage.setItem("data", JSON.stringify(allData));

ShowItems();



inputForm.value = "";
}
});






myList.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteBtn')) {
    const parent = e.target.parentNode.parentNode;
    const id = parseInt(parent.id); // Convert id to number
    console.log(id);

    allData = allData.filter(item => item.id !== id); // Compare with a number
    localStorage.setItem("data", JSON.stringify(allData));

    parent.remove();
  }

  if (e.target.type === 'checkbox') {
    const ourTodoText = e.target.parentNode.previousElementSibling;
    if (e.target.checked) {
      ourTodoText.style.textDecoration = 'line-through';
    } else {
      ourTodoText.style.textDecoration = 'none';
    }
  }
});
