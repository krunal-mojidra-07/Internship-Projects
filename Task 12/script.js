let cart = [];
let total = 0;

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartSidebar = document.getElementById("cartSidebar");
const toast = document.getElementById("toast");

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

function renderCart(){
  cartItems.innerHTML="";
  total=0;

  if(cart.length===0){
    cartItems.innerHTML="<p style='opacity:.6'>Your cart is empty 🛒</p>";
  }

  cart.forEach((item,i)=>{
    total+=item.price*item.qty;
    const li=document.createElement("li");
    li.innerHTML=`
      ${item.name}
      <div>
        <button onclick="changeQty(${i},-1)">−</button>
        ${item.qty}
        <button onclick="changeQty(${i},1)">+</button>
        <span onclick="removeItem(${i})">✖</span>
      </div>`;
    cartItems.appendChild(li);
  });

  cartCount.textContent=cart.length;
  totalPrice.textContent=total;
}

document.querySelectorAll(".add-btn").forEach(btn=>{
  btn.onclick=()=>{
    const card=btn.parentElement;
    const name=card.dataset.name;
    const price=Number(card.dataset.price);

    const found=cart.find(p=>p.name===name);
    found ? found.qty++ : cart.push({name,price,qty:1});

    renderCart();
    cartSidebar.classList.add("show");
    showToast("Added to cart 🛒");
  };
});

function changeQty(i,d){
  cart[i].qty+=d;
  if(cart[i].qty<=0) cart.splice(i,1);
  renderCart();
}

function removeItem(i){
  cart.splice(i,1);
  renderCart();
  showToast("Item removed ❌");
}

document.querySelectorAll(".wishlist").forEach(icon=>{
  icon.onclick=()=>{
    icon.classList.toggle("active");
    showToast("Wishlist updated ❤️");
  };
});

document.getElementById("openCart").onclick=()=>cartSidebar.classList.add("show");
document.getElementById("closeCart").onclick=()=>cartSidebar.classList.remove("show");

document.getElementById("checkoutBtn").onclick=()=>{
  cartSidebar.classList.remove("show");
  document.getElementById("checkout").style.display="block";
  showToast("Proceed to checkout");
};

document.querySelector(".place-order").onclick=()=>{
  showToast("Order placed successfully ✅");
  cart=[];
  renderCart();
};

document.getElementById("darkToggle").onclick=()=>{
  document.body.classList.toggle("dark");
};
