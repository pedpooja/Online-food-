document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".flip-card").forEach(function (card) {
        card.addEventListener("click", function () {
            var isFlipped = card.getAttribute("aria-pressed") === "true";
            card.setAttribute("aria-pressed", String(!isFlipped));
        });
    });

    
    
    var loginModal = document.getElementById("login-modal");
    var loginForm = document.getElementById("login-form");
    var closeButtons = document.querySelectorAll(".modal-close");

    function openModal(modal) {
        if (modal) {
            modal.classList.add("show");
            modal.setAttribute("aria-hidden", "false");
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
        }
    }

    document.querySelectorAll(".nav-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var action = button.getAttribute("data-action");

            if (action === "login") {
                openModal(loginModal);
      
            } else if (action === "logout") {
                var confirmLogout = confirm("Are you sure you want to log out?");
                if (confirmLogout) {
                    alert("You have been logged out successfully.");
                }
            }
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var closeTarget = button.getAttribute("data-close");
            if (closeTarget === "login") {
                closeModal(loginModal);
            } 
            
        });
    });

    [loginModal, ].forEach(function (modal) {
        if (modal) {
            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });
    

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var emailValue = document.getElementById("login-email").value.trim();
            var passwordValue = document.getElementById("login-password").value.trim();

            if (!emailValue || !passwordValue) {
                alert("Please enter your email and password.");
                return;
            }

            alert("Login successful. Welcome back!");
            loginForm.reset();
            closeModal(loginModal);
        });
    }
    var imagePreviewBox = document.getElementById("image-preview");
    var photoInput = document.getElementById("Food-photo");

    if (photoInput) {
        photoInput.addEventListener("change", function () {
            if (photoInput.files && photoInput.files.length > 0) {
                var file = photoInput.files[0];
                var previewUrl = URL.createObjectURL(file);

                if (imagePreviewBox) {
                    imagePreviewBox.innerHTML = "<img src='" + previewUrl + "' alt='Selected crop leaf preview'>";
                    imagePreviewBox.classList.add("show");
                }
            }
        });
    }

    if (FoodAnalysisForm) {
        FoodAnalysisFormAnalysisForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var FoodSelect = document.getElementById("crop");
            var FoodName = cropSelect ? cropSelect.value : "";
            var selectedFile = photoInput && photoInput.files && photoInput.files.length > 0 ? photoInput.files[0] : null;

            if (!FoodName) {
                if (FoodAnalysisResult) {
                    FoodAnalysisResult.innerHT;
                    FoodAnalysisResult.classList.add("show");
                }
                return;
            }

            var analysisMap = {
                pizza: {
                  
    
                },
              burger: {
                  
                },
                manchurian: {
                  }
            };

            var result = analysisMap[FoodName] || {
          
            };
        });
    }
});
// Shopping Cart
let cart = [];

// Add Food to Cart
function addToCart(name, price) {

    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    displayCart();

    alert(name + " added to cart!");
}


// Display Cart
function displayCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
    }

    cart.forEach((item, index) => {

        let div = document.createElement("div");

        div.innerHTML = `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;

        cartItems.appendChild(div);

        totalPrice += item.price;
    });

    total.innerText = totalPrice;
}


// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}


// Place Order
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Your order has been placed successfully!");

    cart = [];

    displayCart();
}