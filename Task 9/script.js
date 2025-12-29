// Dark mode
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.classList.toggle("ri-moon-line");
  toggleBtn.classList.toggle("ri-sun-line");
};

// Toast
const toast = document.getElementById("toast");
function showToast(msg){
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

// Wishlist
document.querySelectorAll(".wishlist").forEach(btn => {
  btn.onclick = () => {
    const added = btn.classList.toggle("ri-heart-fill");
    btn.classList.toggle("ri-heart-line");

    btn.style.color = "red";
    btn.classList.add("blink");
    setTimeout(() => btn.classList.remove("blink"), 600);

    if (added) {
      showToast("Product added to Wishlist ❤️");
    }
  };
});

// Cart
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.onclick = () => {
    showToast("Added to Cart 🛒");
  };
});

// Modal
const modal = document.getElementById("productModal");
document.getElementById("productImg").onclick = () => {
  modal.classList.add("active");
};
document.querySelector(".close").onclick = () => {
  modal.classList.remove("active");
};
modal.onclick = e => {
  if(e.target === modal) modal.classList.remove("active");
};
