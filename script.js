document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.querySelector(".buy");

  buyButton.addEventListener("click", () => {
    const userId = document.querySelectorAll("input")[0].value;
    const zoneId = document.querySelectorAll("input")[1].value;
    const payment = document.querySelector("select").value;

    if (userId === "" || zoneId === "") {
      alert("Please enter your User ID and Zone ID.");
      return;
    }

    alert(
      "Order Received!\n\n" +
      "User ID: " + userId +
      "\nZone ID: " + zoneId +
      "\nPayment: " + payment +
      "\n\nThank you!"
    );
  });
});