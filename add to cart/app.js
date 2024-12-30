const cart = document.querySelector(".cart");
const closeBTn = document.querySelector(".closeCart-btn");
const cartBox = document.querySelector(".hiddenCartBox");
const navCart = document.querySelector(".cart h3 sup");

cart.addEventListener("click", () => {
  cartBox.classList.toggle("showCartBox");
});

closeBTn.addEventListener("click", () => {
  cartBox.classList.toggle("showCartBox");
});

products.forEach((product) => {
  const cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML += `
    <div class="cards">
            <div class="imageContainer">
              <img src=${product.imgSrc} alt="" />
            </div>
            <h2 class="productName">${product.name}</h2>
            <p class="description">${product.description}
            </p>
            <p class="price">${product.price}<span>$</span></p>
            <button class="add-btn" onclick ="addToCart(${product.id})">Add To cart</button>
          </div>`;
});

let cartArr = []


function addToCart(id){

    if(cartArr.some((item)=> item.id === id)){
        changeItemValue('inc', id);

    }else{
        const item = products.find(product => product.id === id)
        cartArr.push({...item,numberOfUnit:1})
}
updateCart()

}

function updateCart(){
    renderCartItems();
    renderSubTotal()
}




function renderCartItems(){
    const itemInCart = document.querySelector(".cartItem");
    itemInCart.innerHTML = '';
    
    
    cartArr.forEach((car) => {
    itemInCart.innerHTML += `
<div class="cartItemContainer">
  <div class="imageContainer" onclick = "removeCartItem(${car.id})">
    <img src=${car.imgSrc} alt=${car.name} />
  </div>
  <h2 class="cartBoxName">${car.name}</h2>
  <div class="decButton" onclick = "changeItemValue('dec',${car.id})" >-</div>
  <p class="itemQuantity">( ${car.numberOfUnit} )</p>
  <div class="incButton" onclick = "changeItemValue('inc',${car.id})" >+</div>
</div>
  `
  renderSubTotal()
});
}




function changeItemValue(value,id){
    cartArr =  cartArr.map((item)=>{
        let numberOfUnit = item.numberOfUnit;
         if(item.id === id ){
         if(value === 'inc' && numberOfUnit < item.instock ){
         numberOfUnit++;
     } else if(value === 'dec'){
         if(numberOfUnit > 1  ) {
             numberOfUnit--;
            }else if(numberOfUnit < 1){
            removeCartItem(id)
        }
        }}
        
        return{
            ...item,
            numberOfUnit,
            
        }})
        renderCartItems()
    }





    function renderSubTotal(){
        const cartFooter = document.querySelector('.cartFooter')
        let totalPrice =0,totalCart =0;
       cartArr.forEach((item)=>{
            totalPrice += item.price * item.numberOfUnit;
            totalCart += item.numberOfUnit;
        })
        cartFooter.innerHTML = `
        <div class="totalPrice">Total Price :( ${totalPrice.toFixed(2)}<span>$</span> )</div>
        <div class="totalItems">Total Items :( <span>${totalCart}</span> )</div> `
        navCart.textContent = totalCart;
        

    }




    function removeCartItem(ln){
        cartArr = cartArr.filter((item) =>item.id !== ln)
    updateCart()
    }

