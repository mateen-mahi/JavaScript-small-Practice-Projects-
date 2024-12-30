
let allBtns = document.querySelectorAll('.btn');

let showResult = document.querySelector('.screen');




allBtns.forEach((btn) => {

  btn.addEventListener("click",(e)=>{
  showResult
  if (e.target.innerText === "="){
    showResult.value = eval(showResult.value);

  }
  else if (e.target.innerText === "C"){
    showResult.value = " ";
  }else {

  showResult.value +=  e.target.innerText
  }
    
  });

})
