let alleLinks = document.querySelectorAll('nav a');
let deSecties = document.querySelectorAll('section');
 const  opties = {
     threshold: 1.0
 };
 const verwerkDoorsnijding = (entries, observer) => {
     entries.forEach( entry => {
         console.log(entry.target.parentNode.id + "doorsnijdt" + entry.isIntersecting);
         if( entry.isIntersecting){
             let link = zoekLink('#'+ entry.target.parentNode.id);
             maakActief(link);
         }
     });


}

let observer = new IntersectionObserver( verwerkDoorsnijding, opties);

deSecties.forEach( sectie => {
   observer.observe(sectie.getElementsByTagName('p')[0]);
});

observer.observe(deSecties[1]);

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
});

const zoekLink = (id) => {
     let link = document.querySelector('nav a[href="' + id +'"]');
     return link;
};