/* exported loadHeaderInformation */

function loadHeaderInformation(persona){
    'use strict';

    //Controllo se ho in ingresso le informazioni relative ad una persona in ingresso: se non è cosi,
    //allora sicuramente stiamo facendo girare la pagina relativa alla stessa persona di prima e pertanto
    //dobbiamo usare gli stessi nomi di prima che li abbiamo salvati in localStorage
    if(!persona){
        persona = {
            name: {
                first: localStorage.name,
                last: localStorage.surname
            }
        };
        console.log(persona);
    }
    var headerSurname = document.getElementById('headerSurname').cloneNode(true);
    headerSurname.textContent = persona.name.last;
    var headerName = document.getElementById('headerName');
    headerName.textContent = persona.name.first + ' ';
    headerName.appendChild(headerSurname);
    var title = document.getElementById('headTitle');
    title.textContent = (persona.name.first + ' ' + persona.name.last).toUpperCase();
}