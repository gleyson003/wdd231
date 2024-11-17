//Toggle Menu
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});


//Companies Cards
async function fetchCompanies() {
    try {
        
        const response = await fetch('https://gleyson003.github.io/wdd231/chamber/data/members.json'); 
        const data = await response.json(); 
        
        const gridContainer = document.querySelector('.grid');
        
       
        gridContainer.innerHTML = '';

        
        data.forEach(company => {
            
            const card = document.createElement('section');
            card.classList.add('company-card'); 

            const icon = document.createElement('img');
            icon.src = `images/companies_logos/${company.icon}`; 
            icon.alt = company.name;
            card.appendChild(icon);

            const address = document.createElement('p');
            address.textContent = `Adress: ${company.adresse}`;
            card.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${company.phone}`;
            card.appendChild(phone);

            const website = document.createElement('a');
            website.href = company.website;
            website.target = '_blank';
            website.textContent = company.website;
            card.appendChild(website);

            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar os dados das empresas:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchCompanies);


//Filter function
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



// Footer current year and moddification
document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;
    
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = 'Last modification: ' + lastModification;
});