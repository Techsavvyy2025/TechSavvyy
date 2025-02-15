document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons
    const buttons = document.querySelectorAll(".tab-button");
    // Get all tab contents
    const contents = document.querySelectorAll(".tab-content");

    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");

            // Hide all tab contents
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Show the selected tab
            document.getElementById(tabId).classList.add("active");
        });
    });
});
