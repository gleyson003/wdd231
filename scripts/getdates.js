document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;
    
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;
});