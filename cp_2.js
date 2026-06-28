function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.log("An error occurred:", error.message);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();

        displayProducts(products);

    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-container");

    // Clear existing products
    container.innerHTML = "";

    // Display only the first 5 products
    products.slice(0, 5).forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product-card");

        const image = document.createElement("img");
        image.src = product.fields.image[0].url;
        image.alt = product.fields.name;

        const name = document.createElement("h2");
        name.textContent = product.fields.name;

        const price = document.createElement("p");
        price.textContent = "$" + (product.fields.price / 100).toFixed(2);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);

        container.appendChild(card);
    });
}

function handleError(error) {
    console.log("An error occurred:", error.message);
}

fetchProductsThen();
fetchProductsAsync();