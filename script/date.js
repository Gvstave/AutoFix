const date = new Date();
const currentYear = date.getFullYear();

const showCurrentYear = document.getElementById('showCurrentYear') || 2026;
showCurrentYear.innerText = currentYear;