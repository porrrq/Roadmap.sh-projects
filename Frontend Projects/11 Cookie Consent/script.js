const cookieConsentBtn = document.querySelector('.cookie-consent-btn')
const cookieElement = document.querySelector('.container')
let cookieConsent


function removeCookieUI() {
        cookieElement.className = "container hide"; 
};
function checkCookieConsent() {
    return localStorage.getItem("cookieConsent") === "true";
};
cookieConsentBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true");
    removeCookieUI();
});
    
if (checkCookieConsent()) { removeCookieUI(); };