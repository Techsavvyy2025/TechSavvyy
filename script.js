document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchBox = document.getElementById("search-box");

    searchButton.addEventListener("click", function () {
        const query = searchBox.value.trim();
        if (query) {
            alert("Searching for: " + query);
            // Here you can implement actual search logic or redirect
        } else {
            alert("Please enter a topic or course to search.");
        }
    });
});
