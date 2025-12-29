const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const allPosts = Array.from(document.querySelectorAll(".post"));
let filteredPosts = [...allPosts];

let currentPage = 1;
let postsPerPage = 2;

function renderPosts(){
  allPosts.forEach(p => p.style.display = "none");

  const start = (currentPage - 1) * postsPerPage;
  const end = currentPage * postsPerPage;

  filteredPosts.slice(start, end).forEach(p => {
    p.style.display = "block";
  });

  updatePagination();
  updateLoadMore();
}

function updatePagination(){
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  for(let i = 1; i <= totalPages; i++){
    const btn = document.createElement("button");
    btn.textContent = i;
    if(i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderPosts();
    };
    pagination.appendChild(btn);
  }
}

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  filteredPosts = allPosts.filter(post =>
    post.querySelector("h2").innerText.toLowerCase().includes(value)
  );
  currentPage = 1;
  renderPosts();
});

loadMoreBtn.onclick = () => {
  postsPerPage += 2;
  renderPosts();
};

function updateLoadMore(){
  loadMoreBtn.style.display =
    postsPerPage >= filteredPosts.length ? "none" : "inline-block";
}

renderPosts();
