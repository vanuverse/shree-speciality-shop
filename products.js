/* =====================================================
   SHREE SHOP JAVASCRIPT
===================================================== */


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

}



/* ================= CATEGORY FILTER ================= */

function filterCategory(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(item => {

            item.classList.remove("active");

        });


    button.classList.add("active");


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "Women" ||
            category === "New Arrivals"
        ) {

            product.style.display = "";

        } else {

            if (
                productCategory === category
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        }

    });

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



/* ================= FILTER DROPDOWN ================= */

function toggleFilter(element) {

    const box =
        element.parentElement;


    const content =
        box.querySelector(".filter-content");


    if (!content) {
        return;
    }


    if (
        content.style.display === "none"
    ) {

        content.style.display = "block";

    } else {

        content.style.display = "none";

    }

}



/* ================= SORT ================= */

function sortProducts() {

    const value =
        document.getElementById(
            "sortProducts"
        ).value;


    const grid =
        document.getElementById(
            "productGrid"
        );


    const products =
        Array.from(
            grid.querySelectorAll(
                ".product-card"
            )
        );


    if (value === "low") {

        products.sort(
            (a, b) =>
                Number(a.dataset.price) -
                Number(b.dataset.price)
        );

    }


    if (value === "high") {

        products.sort(
            (a, b) =>
                Number(b.dataset.price) -
                Number(a.dataset.price)
        );

    }


    if (value === "new") {

        products.sort(
            (a, b) =>
                Number(b.dataset.new === "true") -
                Number(a.dataset.new === "true")
        );

    }


    products.forEach(product => {

        grid.appendChild(product);

    });

}



/* ================= SEARCH ================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value.toLowerCase().trim();


            const products =
                document.querySelectorAll(
                    ".product-card"
                );


            products.forEach(product => {

                const name =
                    product
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();


                if (
                    name.includes(search)
                ) {

                    product.style.display = "";

                } else {

                    product.style.display =
                        "none";

                }

            });

        }
    );

}



/* ================= CART COUNT ================= */

const savedCart =
    localStorage.getItem(
        "shreeCartCount"
    );


if (savedCart) {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (cartCount) {

        cartCount.textContent =
            savedCart;

    }

}



/* ================= PRODUCT CLICK ================= */

document
    .querySelectorAll(".product-card")
    .forEach(card => {

        card.addEventListener(
            "dblclick",
            function () {

                window.location.href =
                    "product-details.html";

            }
        );

    });