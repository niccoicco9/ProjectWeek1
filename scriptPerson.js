/* exported loadInformation */
/* global loadHeaderInformation */

function loadInformation(){
    'use strict';
    $.getJSON('https://randomuser.me/api/', function(persona){

        //Header
        loadHeaderInformation(persona.results[0]);
        localStorage.name = persona.results[0].name.first;
        localStorage.surname = persona.results[0].name.last;
        console.log(persona.results[0]);
        
        //Body
        document.getElementById('divName').textContent = persona.results[0].name.first + ' ' + persona.results[0].name.last;  //Aggiorno il nome e cognome
        document.getElementById('idFigure').src = persona.results[0].picture.large; //Aggiorno l'immagine del profilo
        document.getElementById('dataAge').textContent = calculateAge(persona.results[0].dob);
        document.getElementById('dataAddress').textContent = persona.results[0].location.street + ', ' + persona.results[0].location.city + ' ' + persona.results[0].location.postcode + ', ' + persona.results[0].location.state; //Aggiorno l'indirizzo
        document.getElementById('dataEmail').textContent = persona.results[0].email;   //Aggiorno l'e-mail
        document.getElementById('dataPhone').textContent = persona.results[0].phone;   //Aggiorno il numero di casa
        document.getElementById('dataMobile').textContent = persona.results[0].cell;   //Aggiorno il numero di cellulare
    });
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