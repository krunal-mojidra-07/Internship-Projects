const sections = document.querySelectorAll(".section");
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

sections.forEach(sec => observer.observe(sec));
timelineItems.forEach(item => observer.observe(item));
