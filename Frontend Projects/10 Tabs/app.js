//variables
const tabs = Array.from(document.querySelectorAll('.tabs'));
const sections = Array.from(document.querySelectorAll('section'));

//functions
function clearAllClass() {
    tabs.forEach(tab => { tab.className = "" });
    sections.forEach(section => { section.className = "" });
};
function updateUI (index) {
    tabs[index].className = "selected-tab tabs";
    sections[index].className = "show";
};
//Eventlistener
//tabs
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        let i = tabs.indexOf(tab);
        clearAllClass();
        updateUI(i);
    })
})