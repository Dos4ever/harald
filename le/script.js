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
