function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const subtotal = document.getElementById("subtotal");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0) {
        cartItems.innerHTML = "<p>your cart is empty</p>";
        subtotal.innerHTML = "";
        document.getElementById("checkoutBtn").style.display='none';
        return;
     }

    let total =0;
    cartItems.innerHTML = cart.map((item,index) => {
      total += item.price;
      return `
      <div class="cart-item">
      <div>
      <img src=${item.image}/>
      <h3>${item.name}</h3>
      <p>${item.descripyion}</p>
      <div class="price">Rs ${item.price}</div>
      </div>
      <button onclick = "removeFormCart(${index})">Remove</button>
      </div>
      `;
})
    .join("");

    subtotal.innerHTML = `<strong> Subtotal:</strong> Rs ${total}`;
    document.getElementById("checkoutBtn").style.display = "inline-block";
}

function removeFormCart(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
    window.location.href = "checkout.html";
});

loadCart();