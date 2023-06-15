/* nav prodotti*/
// JS per la barra di navigazione
const navbarItems = document.querySelectorAll('.navbar-item');
const navbarBoxes = document.querySelectorAll('.navbar-box');
const navbarBoxesArray = Array.from(navbarBoxes);

navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener('click', (event) => {
        event.preventDefault();

        // Aggiunge la classe "active" all'elemento cliccato
        navbarItems.forEach((item) => {
            item.classList.remove('active');
        });
        navbarItem.classList.add('active');

        // Mostra il box corrispondente all'elemento cliccato e nasconde gli altri
        const target = navbarItem.getAttribute('data-target');
        navbarBoxesArray.forEach((box) => {
            if (box.getAttribute('id') === target) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });

        // Mostra il container dei box
        const navbarBoxesContainer = document.querySelector('.navbar-boxes');
        navbarBoxesContainer.style.display = 'block';
    });
});
