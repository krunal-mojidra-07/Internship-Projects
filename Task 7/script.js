const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const toast = document.getElementById("toast");
const darkToggle = document.getElementById("darkToggle");
const formBox = document.getElementById("formBox");
const successBox = document.getElementById("successBox");
const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");

/* TOAST */
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

/* FORM SUBMIT */
sendBtn.onclick = () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if(!name || !email || !message || !email.includes("@")){
    formBox.classList.add("shake");
    showToast("Please enter valid details ❌");
    setTimeout(()=>formBox.classList.remove("shake"),300);
    return;
  }

  // LOADING
  btnText.style.display="none";
  loader.style.display="block";

  setTimeout(()=>{
    loader.style.display="none";
    btnText.style.display="block";

    formBox.style.display="none";
    successBox.style.display="block";
  },1500);
};

/* DARK MODE */
darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
};
