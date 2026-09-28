/* ===============================
   SHREE COUPLE PRODUCT
================================ */

let person1 = {
    size: "",
    colour: ""
};

let person2 = {
    size: "",
    colour: ""
};

let quantity = 1;


/* ===============================
   SIZE SELECTION
================================ */

function setupSizes(selector, person) {

    const buttons = document.querySelectorAll(selector);

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");

            person.size = button.dataset.size;

            updateSummary();

        });

    });

}


setupSizes(
    ".person1-size button",
    person1
);

setupSizes(
    ".person2-size button",
    person2
);


/* ===============================
   COLOUR SELECTION
================================ */

function setupColours(selector, person, textId) {

    const buttons = document.querySelectorAll(selector);

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");

            person.colour = button.dataset.colour;

            document.getElementById(textId).textContent =
                person.colour;

            updateSummary();

        });

    });

}


setupColours(
    ".person1-colour button",
    person1,
    "person1Colour"
);

setupColours(
    ".person2-colour button",
    person2,
    "person2Colour"
);


/* ===============================
   QUANTITY
================================ */

const quantityText =
    document.getElementById("quantity");

document.getElementById("plus")
    .addEventListener("click", () => {

        quantity++;

        quantityText.textContent = quantity;

        updateSummary();

    });


document.getElementById("minus")
    .addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            quantityText.textContent =
                quantity;

            updateSummary();

        }

    });


/* ===============================
   SUMMARY
================================ */

function updateSummary() {

    document.getElementById("summaryP1")
        .textContent =

        person1.size && person1.colour

        ? `${person1.size} / ${person1.colour}`

        : "Select size & colour";


    document.getElementById("summaryP2")
        .textContent =

        person2.size && person2.colour

        ? `${person2.size} / ${person2.colour}`

        : "Select size & colour";


    document.getElementById("summaryQty")
        .textContent = quantity;

}


/* ===============================
   ADD TO CART
================================ */

document.getElementById("addCoupleCart")
    .addEventListener("click", () => {

        const error =
            document.getElementById("errorMessage");


        if (
            !person1.size ||
            !person1.colour ||
            !person2.size ||
            !person2.colour
        ) {

            error.textContent =
                "Please select size and colour for both persons.";

            return;
        }


        error.textContent = "";


        const coupleProduct = {

            id: "couple-butterflies-001",

            type: "couple",

            name: "Butterflies Couple T-Shirt",

            price: 1499,

            quantity: quantity,

            person1: {
                size: person1.size,
                colour: person1.colour
            },

            person2: {
                size: person2.size,
                colour: person2.colour
            }

        };


        /* Get existing cart */

        let cart =
            JSON.parse(
                localStorage.getItem("shreeCart")
            ) || [];


        /* Add couple product */

        cart.push(coupleProduct);


        /* Save */

        localStorage.setItem(
            "shreeCart",
            JSON.stringify(cart)
        );


        /* Go to cart */

        window.location.href =
            "cart.html";

    });


/* ===============================
   WISHLIST
================================ */

document.getElementById("wishlistBtn")
    .addEventListener("click", () => {

        const wishlist =
            JSON.parse(
                localStorage.getItem("shreeWishlist")
            ) || [];

        const product = {

            id: "couple-butterflies-001",

            name: "Butterflies Couple T-Shirt",

            price: 1499,

            type: "couple"

        };


        if (
            !wishlist.some(
                item => item.id === product.id
            )
        ) {

            wishlist.push(product);

            localStorage.setItem(
                "shreeWishlist",
                JSON.stringify(wishlist)
            );

            document.getElementById(
                "wishlistBtn"
            ).textContent =
                "♥ Added to Wishlist";

        }

    });