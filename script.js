/* nav prodotti*/
// JS per la barra di navigazione
const navbarItems = document.querySelectorAll('.navbar-item');
const navbarBoxes = document.querySelectorAll('.navbar-box');
const navbarBoxesArray = Array.from(navbarBoxes);

navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener('click', (event) => {
        event.preventDefault();

        // Aggiunge la classe "active" all'elemento cliccato
        navbarItems.forEach((item) => {
            item.classList.remove('active');
        });
        navbarItem.classList.add('active');

        // Mostra il box corrispondente all'elemento cliccato e nasconde gli altri
        const target = navbarItem.getAttribute('data-target');
        navbarBoxesArray.forEach((box) => {
            if (box.getAttribute('id') === target) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });

        // Mostra il container dei box
        const navbarBoxesContainer = document.querySelector('.navbar-boxes');
        navbarBoxesContainer.style.display = 'block';
    });
});


function addToCart() {
  var productName = src="https://i.pinimg.com/564x/01/2c/6b/012c6b62e29c42c66a2120aa41cdd133.jpg";
window.location.href = 'carrello.html';
}


//carrello
function calculateTotal() {
  var priceElement = document.querySelector(".card-text.price");
  var quantityElement = document.querySelector(".form-control.quantity");
  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (priceElement && quantityElement && subtotalElement && shippingCostElement && totalAmountElement) {
    var priceString = priceElement.textContent;
    var price = parseFloat(priceString.replace(/[^0-9.,]/g, "").replace(",", "."));
    var quantity = parseInt(quantityElement.value);
    var total = price * quantity;

    var totalElement = quantityElement.parentNode.nextElementSibling;
    totalElement.textContent = "Totale: €" + total.toFixed(2);

    subtotalElement.textContent = "€" + total.toFixed(2);

    var shippingCost = 2.0; // Inserisci il valore effettivo dei costi di spedizione
    shippingCostElement.textContent = "€" + shippingCost.toFixed(2);

    var totalAmount = total + shippingCost;
    totalAmountElement.textContent = "€" + totalAmount.toFixed(2);
  }
};

function removeProduct(event) {
  var card = event.target.closest(".card");
  card.remove();

  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (subtotalElement && shippingCostElement && totalAmountElement) {
    subtotalElement.innerHTML = "€0,00";
    shippingCostElement.innerHTML = "€0,00";
    totalAmountElement.innerHTML = "€0,00";
  }
};
