/* ==============================
   SHREE CUSTOMISER
================================ */

let selectedColour = "Black";
let selectedSize = "M";
let quantity = 1;

const basePrice = 799;


/* ==============================
   COLOUR
================================ */

const colourButtons =
    document.querySelectorAll(".shirt-colour");

colourButtons.forEach(button => {

    button.addEventListener("click", () => {

        colourButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedColour =
            button.dataset.colour;

        document.getElementById("colourName")
            .textContent = selectedColour;

        updateTshirtColour();

    });

});


function updateTshirtColour() {

    const tshirt =
        document.getElementById("tshirtPreview");

    const colours = {

        "Black": "#111111",

        "White": "#ffffff",

        "Sky Blue": "#a2b8e3",

        "Pink": "#f2b8c9",

        "Cream": "#eee1c7"

    };

    tshirt.style.background =
        colours[selectedColour];

}


/* ==============================
   SIZE
================================ */

const sizeButtons =
    document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedSize =
            button.dataset.size;

    });

});


/* ==============================
   TEXT PREVIEW
================================ */

const customText =
    document.getElementById("customText");

customText.addEventListener("input", () => {

    const preview =
        document.getElementById("printPreview");

    preview.textContent =
        customText.value ||
        "Your Design";

});


/* ==============================
   IMAGE UPLOAD
================================ */

const upload =
    document.getElementById("designUpload");

upload.addEventListener("change", function() {

    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {

        alert("Please upload an image file.");

        this.value = "";

        return;
    }

    const reader =
        new FileReader();

    reader.onload = function(event) {

        const preview =
            document.getElementById("printPreview");

        preview.innerHTML = "";

        const image =
            document.createElement("img");

        image.src =
            event.target.result;

        preview.appendChild(image);

    };

    reader.readAsDataURL(file);

});


/* ==============================
   QUANTITY
================================ */

document.getElementById("plus")
    .addEventListener("click", () => {

        quantity++;

        document.getElementById("quantity")
            .textContent = quantity;

        updatePrice();

    });


document.getElementById("minus")
    .addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            document.getElementById("quantity")
                .textContent = quantity;

            updatePrice();

        }

    });


/* ==============================
   PRICE
================================ */

function updatePrice() {

    const total =
        basePrice * quantity;

    document.getElementById("totalPrice")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;

}


/* ==============================
   ADD TO CART
================================ */

document.getElementById("addToCart")
    .addEventListener("click", () => {

        const product =
            document.getElementById("product").value;

        const placement =
            document.getElementById("placement").value;

        const text =
            document.getElementById("customText").value.trim();

        const error =
            document.getElementById("errorMessage");


        /* Basic validation */

        if (!product || !selectedColour || !selectedSize) {

            error.textContent =
                "Please select all product options.";

            return;
        }


        error.textContent = "";


        const customProduct = {

            id:
                "custom-" +
                Date.now(),

            type:
                "custom",

            name:
                "Customised " + product,

            price:
                basePrice,

            quantity:
                quantity,

            colour:
                selectedColour,

            size:
                selectedSize,

            placement:
                placement,

            customText:
                text

        };


        /* Existing cart */

        let cart =
            JSON.parse(
                localStorage.getItem("shreeCart")
            ) || [];


        cart.push(customProduct);


        localStorage.setItem(
            "shreeCart",
            JSON.stringify(cart)
        );


        /* Cart page */

        window.location.href =
            "cart.html";

    });