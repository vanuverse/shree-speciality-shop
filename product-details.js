/* =====================================================
   SHREE PRODUCT DETAILS JAVASCRIPT
===================================================== */


/* ================= PRODUCT IMAGES ================= */

const productImages = [

    "images/products/butterfly-1.jpg",

    "images/products/butterfly-2.jpg",

    "images/products/butterfly-3.jpg",

    "images/products/butterfly-4.jpg",

    "images/products/butterfly-5.jpg"

];


let currentImage = 0;



function changeImage(image, thumbnail) {

    document.getElementById(
        "mainProductImage"
    ).src = image;


    document.querySelectorAll(
        ".thumbnail"
    ).forEach(item => {

        item.classList.remove("active");

    });


    thumbnail.classList.add("active");


    currentImage =
        productImages.indexOf(image);


    document.getElementById(
        "imageNumber"
    ).textContent =
        `${currentImage + 1} / ${productImages.length}`;

}



/* ================= NEXT IMAGE ================= */

function nextImage() {

    currentImage++;

    if (
        currentImage >=
        productImages.length
    ) {

        currentImage = 0;

    }


    document.getElementById(
        "mainProductImage"
    ).src =
        productImages[currentImage];


    updateImageNumber();

}



/* ================= PREVIOUS IMAGE ================= */

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            productImages.length - 1;

    }


    document.getElementById(
        "mainProductImage"
    ).src =
        productImages[currentImage];


    updateImageNumber();

}



/* ================= IMAGE NUMBER ================= */

function updateImageNumber() {

    document.getElementById(
        "imageNumber"
    ).textContent =
        `${currentImage + 1} / ${productImages.length}`;

}



/* ================= COLOUR ================= */

function selectColour(button) {

    document.querySelectorAll(
        ".colour"
    ).forEach(item => {

        item.classList.remove("selected");

    });


    button.classList.add("selected");


    document.getElementById(
        "selectedColour"
    ).textContent =
        button.dataset.colour;

}



/* ================= SIZE ================= */

function selectSize(button) {

    document.querySelectorAll(
        ".size-options button"
    ).forEach(item => {

        item.classList.remove("selected");

    });


    button.classList.add("selected");


    document.getElementById(
        "selectedSize"
    ).textContent =
        button.textContent;

}



/* ================= QUANTITY ================= */

let quantity = 1;


function increaseQty() {

    quantity++;

    document.getElementById(
        "quantity"
    ).textContent = quantity;

}


function decreaseQty() {

    if (quantity > 1) {

        quantity--;

    }


    document.getElementById(
        "quantity"
    ).textContent = quantity;

}



/* ================= WISHLIST ================= */

function toggleWishlist(button) {

    button.classList.toggle("active");


    if (
        button.classList.contains("active")
    ) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}



/* ================= ADD TO CART ================= */

function addProductToCart() {

    let cart =
        Number(
            localStorage.getItem(
                "shreeCartCount"
            )
        ) || 0;


    cart += quantity;


    localStorage.setItem(
        "shreeCartCount",
        cart
    );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (cartCount) {

        cartCount.textContent = cart;

    }


    alert(
        "Butterfly Vibes T-shirt added to cart ♡"
    );

}



/* ================= MOBILE MENU ================= */

function openMenu() {

    document
        .getElementById("mobileMenu")
        .classList.add("open");

}


function closeMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("open");

}w