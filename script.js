let cart = []

function addToCart(fruit, price){

cart.push({fruit,price})

displayCart()

}

function displayCart(){

let cartList = document.getElementById("cart")

cartList.innerHTML = ""

cart.forEach(item => {

let li = document.createElement("li")

li.textContent = item.fruit + " - ₹" + item.price

cartList.appendChild(li)

})

}