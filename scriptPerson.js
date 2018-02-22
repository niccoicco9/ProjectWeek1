/* exported loadInformation */
/* global extractRandomUser, loadHeaderInformation */

function loadInformation(){
    'use strict';
    var persona = extractRandomUser('It');

    //Header
    loadHeaderInformation(persona);
    
    //Body
    document.getElementById('divName').textContent = persona.name.first + ' ' + persona.name.last;  //Aggiorno il nome e cognome
    document.getElementById('idFigure').src = persona.picture.large; //Aggiorno l'immagine del profilo
    document.getElementById('dataAge').textContent = calculateAge(persona.dob);
    document.getElementById('dataAddress').textContent = persona.location.street + ', ' + persona.location.city + ' ' + persona.location.postcode + ', ' + persona.location.state; //Aggiorno l'indirizzo
    document.getElementById('dataEmail').textContent = persona.email;   //Aggiorno l'e-mail
    document.getElementById('dataPhone').textContent = persona.phone;   //Aggiorno il numero di casa
    document.getElementById('dataMobile').textContent = persona.cell;   //Aggiorno il numero di cellulare
}



//Questa funzione mi permette di ricavare dalla stringa in cui è contenuto la data in formato internazionale
//prima singolarmente anno, mese e giorno e poi, successivamente mi permette di calcolarmi l'età come
//sottrazione tra la data attuale e la data di nascita della persona.
//Quando vado a fare il ritorno sottraggo 1970 perché vengono determinati a partire dall 1-1-1970.
function calculateAge(dateOfBorn){
    'use strict';
    var year = dateOfBorn.substr(0,4);
    var month = dateOfBorn.substr(5,2);
    var day = dateOfBorn.substr(8,2);
    var age = new Date(Date.now() - new Date(year,month,day,0,0,0,0).getTime());
    return (age.getUTCFullYear() - 1970);
}