let alleLinks = document.querySelectorAll('nav a');


//actief class verwijderen uit het menu
const verwijderActief = () =>{
    alleLinks.forEach((link) => {
        if( link.classList = 'actif'){
        link.classList.remove('actief');
        }
    });
}

//functie die actief-class teoevoegen
const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('actief');
}

alleLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
})