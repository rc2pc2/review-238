/*
 * Dati tre array contenenti
 * Creare un carosello come nell'foto alegata e
 * al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e nel suo angolo in basso a destra
 * dovranno essere aggiunti il titolo e il testo.
*/

/* Hanno bisogno del:
 * addEventListener
 * Manipolazione del DOM ---> getElementsByClassName querySelector classList remove add
 * ARRAY
 */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];


let item = '';
let thumb = '';
let active = 1;

// Ciclo per ogni elemento dell'array di immagini
for (let i = 0; i < items.length; i++) {
    item += `
        <div class="item">
            <img src="${items[i]}" alt="">
        </div>`
    thumb += `
        <div class="thumb">
            <img src="${items[i]}" alt="">
        </div>
    `
}

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');

prev.addEventListener('click', function() {
    /**
     * Questa implementazione, ovvero la cattura dell'indice con conseguente gestione della funzionalità di loop, è assegnata come bonus.
     */
    if(active == 0) {
        active = items.length - 1;

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    // Vedi riga 52
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) {
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});