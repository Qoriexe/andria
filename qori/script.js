document.getElementById("burger-menu").addEventListener("click", () => {
    document.getElementById("burger-nav").style.width = "100vh";
});


document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("burger-nav").style.width = "0px"
} )


document.addEventListener("DOMContentLoaded", () => {
    const productNav = document.getElementById("product-nav");
    const productNav2 = document.getElementById("product-nav2");
    const closeBtn = document.getElementById("product-close-btn");
    const plus = document.querySelector(".plus");

    productNav.addEventListener("click", () => {
        productNav2.style.display = "block";
        plus.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        productNav2.style.display = "none";
        plus.style.display = "inline";
    });
});

closeBtn.addEventListener("click", () => {
    productNav2.style.display = "none";
});


