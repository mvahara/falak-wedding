// ========================================
// WEDDING COUNTDOWN
// ========================================

const weddingDate = new Date("December 2, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


// ========================================
// SIMPLE SCROLL ANIMATION
// ========================================

const sections = document.querySelectorAll(
    ".intro, .details, .countdown-section, .message"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});
function checkPassword() {
    const correctPassword = "Mohammad";
    const enteredPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("passwordError");

    if (enteredPassword === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
