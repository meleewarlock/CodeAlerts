import code from "https://js.getcode.com/v1";

document.addEventListener("DOMContentLoaded", () => {
  const { button } = code.elements.create("button", {
    currency: "usd",
    destination: "oiAoqXGkjuQTtQEScNP5uCXq4ZR8xWn3RKsMfWSWPeX",
    amount: 1.0,
    label: "Donate with Code",
    appearance: "dark",
  });

  button.mount("#button-container");

  button.on("success", async (paymentResponse) => {
    const donorName = document.getElementById("donorName").value;
    const donationMessage = document.getElementById("donationMessage").value;
    // Since the amount is fixed, it's set directly here
    const donationAmount = "1.00";

    try {
      const serverResponse = await fetch("/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName,
          donationMessage,
          donationAmount, // Add the donation amount here
          transactionId: paymentResponse.transactionId,
        }),
      });

      if (serverResponse.ok) {
        alert("Payment completed. Thank you for your donation!");
      } else {
        alert("There was an issue with your donation.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your donation.");
    }
  });
});
