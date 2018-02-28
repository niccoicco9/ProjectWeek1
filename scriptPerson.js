/* exported loadInformation */
/* global loadHeaderInformation, $ */

$('body').loading({
    onStart: function(loading) {
        'use strict';
        loading.overlay.slideDown(400);
    },
    onStop: function(loading) {
        'use strict';
        loading.overlay.slideUp(400);
    },
    theme: 'dark'
  });


function loadInformation(){
    'use strict';
    $.getJSON('https://randomuser.me/api/', function(persona){
        if (persona){
             $('body').loading('toggle');
        }
        else {
            setTimeout($('body').loading('toggle'),2000);
        }


        //Header
        loadHeaderInformation(persona.results[0]);
        localStorage.name = persona.results[0].name.first;
        localStorage.surname = persona.results[0].name.last;

        //Effettuo il localStorage per queste informazioni che mi serviranno nella pagina dei contatti
        localStorage.mail = persona.results[0].email;
        localStorage.phone = persona.results[0].phone;
        localStorage.cell = persona.results[0].cell;
        localStorage.completeAddress = persona.results[0].location.street + ' - ' + persona.results[0].location.city + ' (' + persona.results[0].nat + ')';
        console.log(persona.results[0]);
        
        //Body
        document.getElementById('divName').textContent = persona.results[0].name.first + ' ' + persona.results[0].name.last;  //Aggiorno il nome e cognome
        document.getElementById('idFigure').src = persona.results[0].picture.large; //Aggiorno l'immagine del profilo
        document.getElementById('dataAge').textContent = calculateAge(persona.results[0].dob);
        document.getElementById('dataAddress').textContent = persona.results[0].location.street + ', ' + persona.results[0].location.city + ' ' + persona.results[0].location.postcode + ', ' + persona.results[0].location.state; //Aggiorno l'indirizzo
        document.getElementById('dataEmail').textContent = persona.results[0].email;   //Aggiorno l'e-mail
        document.getElementById('dataPhone').textContent = persona.results[0].phone;   //Aggiorno il numero di casa
        document.getElementById('dataMobile').textContent = persona.results[0].cell;   //Aggiorno il numero di cellulare

        //Modello gli elementi in base alla dimensione 
        responsiveElementImageName();
        responsiveTableInfo();
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





/*****************************************FUNZIONI GRAFICHE*************************************/
window.addEventListener('resize', function(){
    'use strict';
    responsiveElementImageName();
    responsiveTableInfo();
});

//Questa funzione mi permette di rendere responsive la parte superiore dove appaiono immagini, nome/cognome e link social
function responsiveElementImageName(){
    'use strict';
    if(window.innerWidth < 570){
        document.getElementById('articleImageName').style.flexDirection = 'column';
        document.getElementById('containerBaseInfo').style.borderBottom = '2px solid #EEE';
        document.getElementById('containerBaseInfo').style.borderTop = '2px solid #EEE';
        document.getElementById('containerBaseInfo').style.marginTop = '10px';
        document.getElementById('containerBaseInfo').style.paddingTop = '10px';
    } else{
        document.getElementById('articleImageName').style.flexDirection = 'row';
        document.getElementById('containerBaseInfo').style.borderBottom = 'none';
        document.getElementById('containerBaseInfo').style.borderTop= 'none';
        document.getElementById('containerBaseInfo').style.marginTop = '0px';
        document.getElementById('containerBaseInfo').style.paddingTop = '0px';
    }
}

//Questa funzione mi serve essenzialmente per rendere responsive la tabella:
//questa, perché essenzialmente è poco responsive di sua natura, ho preferito farla
//attraverso l'uso del flex
function responsiveTableInfo(){
    'use strict';
    if(window.innerWidth < 570){

        var nodeClass = document.getElementsByClassName('rowTable');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexDirection = 'column';
        }
        
        nodeClass = document.getElementsByClassName('colonna1');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexBasis = 'auto';
        }

        nodeClass = document.getElementsByClassName('colonna2');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexBasis = 'auto';
        }
    } else{
        var nodeClass = document.getElementsByClassName('rowTable');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexDirection = 'row';
        }


        nodeClass = document.getElementsByClassName('colonna1');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexBasis = '20%';
        }

        nodeClass = document.getElementsByClassName('colonna2');
        for(var i = 0; i < nodeClass.length; i++){
            nodeClass.item(i).style.flexBasis = '80%';
        }

    }
}