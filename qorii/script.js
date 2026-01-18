const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
const closeBtn = document.getElementById('close-btn');

burgerMenu.addEventListener('click', () => {
  burgerNav.style.width = '100vw';
});

closeBtn.addEventListener('click', () => {
  burgerNav.style.width = '0';
});


const productbtn = document.getElementById("productbtn");
const productnav = document.getElementById("productnav");

productbtn.addEventListener("click", () => {
  if(productnav.style.display === "block"){
      productnav.style.display = "none";       // nav იხურება
      productbtn.classList.remove("open");     // X -> +  
  } else {
      productnav.style.display = "block";      // nav იხსნება
      productbtn.classList.add("open");        // + -> X  
  }
});