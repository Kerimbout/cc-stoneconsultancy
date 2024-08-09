document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptButton');
    const denyButton = document.getElementById('denyButton');

    acceptButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Optionally, save the consent status in local storage or cookies
        localStorage.setItem('cookieConsent', 'accepted');
    });

    denyButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Optionally, save the denial status in local storage or cookies
        localStorage.setItem('cookieConsent', 'denied');
    });

    // Optional: Check if the consent status is already stored
    if (localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'none';
    }
});