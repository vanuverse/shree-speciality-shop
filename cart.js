/* =====================================================
   SHREE CART JAVASCRIPT
===================================================== */

let couponDiscount = 0;


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(button, change) {

    const product = button.closest(".cart-product");

    const quantityBox =
        product.querySelector(".quantity-control");

    const quantityText =
        quantityBox.querySelector("span");

    let quantity =
        parseInt(quantityText.innerText);

    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    quantityText.innerText = quantity;


    updateProductTotal(product);

    updateCartTotal();
}


/* =====================================================
   PRODUCT TOTAL
===================================================== */

function updateProductTotal(product) {

    const price =
        parseInt(product.dataset.price);

    const quantity =
        parseInt(
            product
                .querySelector(".quantity-control span")
                .innerText
        );

    const total = price * quantity;

    product.querySelector(".product-total")
        .innerText = "₹" + total.toLocaleString("en-IN");

}


/* =====================================================
   UPDATE CART TOTAL
===================================================== */

function updateCartTotal() {

    const products =
        document.querySelectorAll(".cart-product");

    let subtotal = 0;

    let itemCount = 0;


    products.forEach(product => {

        const price =
            parseInt(product.dataset.price);

        const quantity =
            parseInt(
                product
                    .querySelector(".quantity-control span")
                    .innerText
            );

        subtotal += price * quantity;

        itemCount += quantity;

    });


    const shipping =
        subtotal >= 999 ? 99 : 99;


    const total =
        subtotal + shipping - couponDiscount;


    document.getElementById("subtotal")
        .innerText =
        "₹" + subtotal.toLocaleString("en-IN");


    document.getElementById("discount")
        .innerText =
        "− ₹" +
        couponDiscount.toLocaleString("en-IN");


    document.getElementById("grandTotal")
        .innerText =
        "₹" + total.toLocaleString("en-IN");


    document.getElementById("cartCount")
        .innerText = itemCount;


    const mobileCart =
        document.querySelector(".mobile-bottom-nav b");

    if (mobileCart) {
        mobileCart.innerText = itemCount;
    }

}


/* =====================================================
   REMOVE PRODUCT
===================================================== */

function removeProduct(button) {

    const product =
        button.closest(".cart-product");

    const productName =
        product.querySelector("h3").innerText;

    const confirmRemove =
        confirm(
            `Remove "${productName}" from your cart?`
        );

    if (!confirmRemove) {
        return;
    }


    product.remove();

    updateCartTotal();


    const remaining =
        document.querySelectorAll(".cart-product").length;


    if (remaining === 0) {

        document.querySelector(".cart-products")
            .innerHTML = `

                <div class="empty-cart">

                    <div class="empty-cart-icon">
                        ♡
                    </div>

                    <h2>Your cart is feeling empty</h2>

                    <p>
                        Find something that feels like you.
                    </p>

                    <button
                        onclick="continueShopping()"
                    >
                        Start Shopping →
                    </button>

                </div>

            `;

    }

}


/* =====================================================
   COUPON
===================================================== */

function applyCoupon() {

    const code =
        document
            .getElementById("couponCode")
            .value
            .trim()
            .toUpperCase();

    const message =
        document.getElementById("couponMessage");


    if (code === "SHREE10") {

        couponDiscount = 180;

        message.innerText =
            "Coupon applied! You saved ₹180 ♡";

        message.style.color = "#4d7c59";


    } else if (code === "") {

        couponDiscount = 0;

        message.innerText =
            "Please enter a coupon code.";

        message.style.color = "#b44";


    } else {

        couponDiscount = 0;

        message.innerText =
            "Invalid coupon code.";

        message.style.color = "#b44";

    }


    updateCartTotal();

}


/* =====================================================
   CHECKOUT
===================================================== */

function goToCheckout() {

    const products =
        document.querySelectorAll(".cart-product");

    if (products.length === 0) {

        alert(
            "Your cart is empty. Add something you love first ♡"
        );

        return;

    }


    window.location.href = "checkout.html";

}


/* =====================================================
   CONTINUE SHOPPING
===================================================== */

function continueShopping() {

    window.location.href = "products.html";

}


/* =====================================================
   INITIAL CALCULATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(".cart-product")
            .forEach(updateProductTotal);

        updateCartTotal();

    }
);