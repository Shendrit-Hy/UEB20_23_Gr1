document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class "pricing-card"
    const pricingCards = document.querySelectorAll('.pricing-card');

    // Define prices for each table
    const prices = [
        [20, 30, 40, 50],    // 1 Month
        [100, 150, 200, 250], // 6 Months
        [200, 300, 400, 500]  // 1 Year
    ];

    // Loop through each pricing card
    pricingCards.forEach(function (card, index) {
        // Get the radio buttons within the current pricing card
        const radioButtons = card.querySelectorAll('input[type="radio"]');
        const orderButton = card.querySelector('.order-btn'); // Get the order button in the current card

        // Add event listener to each radio button
        radioButtons.forEach(function (button, buttonIndex) {
            button.addEventListener('change', function () {
                // Update the price display
                const priceDisplay = card.querySelector('.price');
                priceDisplay.textContent = prices[index][buttonIndex].toFixed(2) + "$";

                // Generate a unique ID within the range of 10 to 21 based on the index and buttonIndex
                const uniqueId = 10 + index * radioButtons.length + buttonIndex;

                // Update the href of the order button with the unique ID
                orderButton.href = `purchase-item.html?product=${uniqueId}`;
            });
        });
    });

    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Add event listener to each radio button
    radioButtons.forEach(function (button) {
        button.addEventListener('change', function () {
            // Update background image based on the selected radio button
            const imageName = button.getAttribute('data-image');
            document.body.style.backgroundImage = `url(${imageName})`;
        });
    });
});
