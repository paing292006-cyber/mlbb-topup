let selectedPackage = "";

const cards = document.querySelectorAll(".card");
const buyBtn = document.querySelector(".buy");

cards.forEach(card => {
  card.addEventListener("click", () => {

    cards.forEach(c => c.style.border = "2px solid transparent");

    card.style.border = "2px solid #00bfff";

    selectedPackage = card.querySelector("h4").innerText;

    buyBtn.innerText = "BUY " + selectedPackage;
  });
});

buyBtn.addEventListener("click", () => {

  const userId = document.querySelectorAll("input")[0].value;
  const zoneId = document.querySelectorAll("input")[1].value;

  if(userId=="" || zoneId==""){
    alert("Please enter User ID and Zone ID");
    return;
  }

  if(selectedPackage==""){
    alert("Please select a package");
    return;
  }

  alert(
`Order Successful!

Package : ${selectedPackage}

User ID : ${userId}

Zone ID : ${zoneId}

We'll process your order shortly.`
);

});