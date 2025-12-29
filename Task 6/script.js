const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");
const darkToggle = document.getElementById("darkToggle");

/* CARD MODAL */
cards.forEach(card=>{
  card.onclick = ()=>{
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;
    modal.style.display="flex";
  };
});

closeModal.onclick = ()=> modal.style.display="none";
modal.onclick = e => { if(e.target===modal) modal.style.display="none"; }

/* DARK MODE */
darkToggle.onclick = ()=>{
  document.body.classList.toggle("dark");
};
