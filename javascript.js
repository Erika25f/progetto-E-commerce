function calculateTotal() {
  var priceElements = document.querySelectorAll(".card-text.price");
  var quantityElements = document.querySelectorAll(".form-control.quantity");
  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (subtotalElement && shippingCostElement && totalAmountElement) {
    var subtotal = 0;

    priceElements.forEach(function(priceElement, index) {
      var priceString = priceElement.textContent;
      var price = parseFloat(priceString.replace(/[^0-9.,]/g, "").replace(",", "."));
      var quantity = parseInt(quantityElements[index].value);
      var total = price * quantity; onchange
      subtotal += total;

      var totalElement = quantityElements[index].parentNode.nextElementSibling;
      totalElement.textContent = "Totale: €" + total.toFixed(2);
    });

    subtotalElement.textContent = "€" + subtotal.toFixed(2);

    var shippingCost = 2.0; // Inserisci il valore effettivo dei costi di spedizione
    shippingCostElement.textContent = "€" + shippingCost.toFixed(2);

    var totalAmount = subtotal + shippingCost;
    totalAmountElement.textContent = "€" + totalAmount.toFixed(2);
  }
}
