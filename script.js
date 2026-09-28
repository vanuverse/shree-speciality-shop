/* =====================================================
   SHREE WEBSITE JAVASCRIPT
===================================================== */


/* ================= CART COUNT ================= */

let cartCount =
    Number(localStorage.getItem("shreeCartCount")) || 0;


const cartCounter =
    document.getElementById("cartCount");


if (cartCounter) {

    cartCounter.textContent = cartCount;

}


/* ================= MOBILE MENU ================= */

function openMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.add("open");

}


function closeMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.remove("open");

}


/* ================= WISHLIST ================= */

function toggleWishlist(button) {

    button.classList.toggle("active");


    if (button.classList.contains("active")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


/* ================= SEARCH ================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                const search =
                    this.value.trim();


                if (search !== "") {

                    window.location.href =
                        "products.html?search=" +
                        encodeURIComponent(search);

                }

            }

        }
    );

}


/* ================= ADD TO CART ================= */

function addToCart() {

    cartCount++;

    localStorage.setItem(
        "shreeCartCount",
        cartCount
    );


    if (cartCounter) {

        cartCounter.textContent =
            cartCount;

    }

}