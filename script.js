// Toggle the visibility of the additional project details
function toggleDetails(button) {
    const moreInfo = button.nextElementSibling;
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        button.textContent = "Show More";
    } else {
        moreInfo.style.display = "block";
        button.textContent = "Show Less";
    }
}

// Reset scroll position to top on page unload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Redirect to the top of the page (home section) on page load
window.addEventListener('load', function() {
    if (window.location.hash) {
        window.location.hash = '';  // Clear any existing hash
    }
    window.location.hash = "#home";  // Redirect to #home section
});