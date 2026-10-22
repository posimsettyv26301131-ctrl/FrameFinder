
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const status = document.querySelector("#status");
const emptyMessage = document.querySelector(".empty-message");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        status.textContent = "Please enter a search term.";
        emptyMessage.textContent = "Type something to start exploring.";
        return;
    }

    status.textContent = `Ready to search for "${searchTerm}".`;
    emptyMessage.textContent =
        "Image search will be available in the next part.";
});
