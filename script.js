 // Ensure the modal is hidden initially
 $("#serviceModal").hide();

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

//  Modal Script start here!
$(document).ready(function() {
    // Data for each service
    const servicesData = {
        Heizung: {
            title: "Heizung",
            descriptionTop: "Sie planen einen Neubau oder möchten Ihre veraltete Heizung ersetzen, um Energiekosten zu sparen? <br> Wir beraten Sie gerne kompetent und individuell zu Energieträgern, Fördermöglichkeiten und Komfortfunktionen und finden die passende lösung für Ihre Ansprüche und Ihr Budget.",
            imgSrc: "img/1.jpeg",
            descriptionBottom: "Ausführliche Einweisung in die Bedienung einer Viessmann Brennwertanlage"
        },
        Sanitär: {
            title: "Sanitär",
            descriptionTop: "Wir sind Ihr Fachbetrieb für die Planung und Installation sämtlicher Rohrleitungen imm Neubau oder bei Sanierung. Gasleitungen, Wasserleitungen und Abwasserleitungen werden uns sauber und fachgerecht verlegt. Zusätzlich prüfen wir zertifiziert Abwasserleitungen auf Dichtheit.",
            imgSrc: "img/2.jpeg",
            descriptionBottom: "Bottom description for Sanitär service."
        },
        Badezimmer: {
            title: "Badezimmer",
            descriptionTop: "Sie planen einen Neubau oder möchten Ihr Badezimmer sanieren? <br> Wir planen und realisieren Ihr Traumbad gemeinsam mit Ihnen. Verwandeln Sie Ihr Badezimmer in Ihre persönliche Wellnessoase und beraten Sie zu den Möglichkeiten modernen Badezimmergestaltung.",
            imgSrc: "img/3.jpeg",
            descriptionBottom: "Bottom description for Badezimmer service."
        }
    };

    // Event listener for "view" buttons inside the .Leistungen-box
    $(".Leistungen-box").on("click", "button", function(event) {
        event.preventDefault();

        // Get the service type based on the h3 text within .info
        const serviceType = $(this).closest(".info").find("h3").text().trim();
        const serviceData = servicesData[serviceType];

        // Check if the service data exists
        if (serviceData) {
            // Populate the modal with data
            $("#modalTitle").text(serviceData.title);
            $("#modalDescriptionTop").html(serviceData.descriptionTop);
            $("#modalImage").attr("src", serviceData.imgSrc);
            $("#modalDescriptionBottom").text(serviceData.descriptionBottom);

            // Show the modal
            $("#serviceModal").fadeIn();
        }
    });

    // Close modal when the close button is clicked
    $(".close").on("click", function() {
        $("#serviceModal").fadeOut();
    });

    // Close modal when clicking outside of the modal content
    $(window).on("click", function(event) {
        if ($(event.target).is("#serviceModal")) {
            $("#serviceModal").fadeOut();
        }
    });
});


// تأكد من تشغيل الكود بعد تحميل DOM
document.addEventListener('DOMContentLoaded', initializeTyped);