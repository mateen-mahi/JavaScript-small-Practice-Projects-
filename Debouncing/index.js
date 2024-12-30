const Input = document.querySelector('.inputClass');

const pTag = document.querySelector('.myText');

const Debouncing = (annyFunction , delay)=>{
  let TimeOutID;

  return function(...args){
    clearTimeout(TimeOutID);
    TimeOutID = setTimeout(()=>{
      annyFunction.call(this, ...args)

    }, delay);

  }
}



Input.addEventListener('input', Debouncing(function(e){
  pTag.innerText = e.target.value;
},500));


