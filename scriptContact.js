/* exported loadInformation */
/* global loadHeaderInformation, $*/
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
    // Questa funzione è fatta essenzialmente per vedere l'effetto svanire dopo un
    // secondo altrmimenti durerebbe troppo poco.
    setTimeout($('body').loading('toggle'),1000);

    // Carico le informazioni dell'header
    loadHeaderInformation();

    //Popolo le informazioni dei recapiti
    document.getElementById('myEmail').textContent = localStorage.mail;
    document.getElementById('myPhone').textContent = localStorage.phone;
    document.getElementById('myCell').textContent = localStorage.cell;
    document.getElementById('myAddress').textContent = localStorage.completeAddress;

    //Organizzo il contenuto della finestra
    resizeContactUs();
}



$('#submitButton').click(function(){ 
    'use strict';
    $.post("http://localhost:3000/results", $("#formContact").serialize());
});


/***************************************FUNZIONI GRAFICHE************************************ */
window.addEventListener('resize', function(){
    'use strict';
    resizeContactUs();
});


function resizeContactUs(){
    'use strict';
    //Mi permette di riposizionare gli elementi a destra ed a sinistra la barra dei contatti personali
    //e la form in modo che questi vengono visualizzati uno sopra l'altro
    if(window.innerWidth < 780){
        document.getElementsByTagName('section')[0].style.flexDirection = 'column';
        document.getElementsByTagName('section')[0].style.justifyContent = 'center';
        document.getElementById('contactArticle').style.margin = '15px auto';
        document.getElementById('messageArticle').style.margin = 'auto';
        document.getElementById('contactArticle').style.width = '80%';
    } else{
        document.getElementsByTagName('section')[0].style.flexDirection = 'row';
        document.getElementsByTagName('section')[0].style.justifyContent = 'space-between';
        document.getElementById('contactArticle').style.width = 'auto';
        document.getElementById('contactArticle').style.margin = '15px';
        document.getElementById('messageArticle').style.margin = '0px';
    }

    //Arrivati a 500 sono costretto a togliere dinamicamente il margine destro al bottone di submit
    //altrimenti sarebbe spostato tutt
    if(window.innerWidth < 500){
        document.getElementById('containerButton').style.flexDirection = 'column';
        document.getElementById('buttonSubmit').style.marginRight = '0px';
    } else {
        document.getElementById('containerButton').style.flexDirection = 'row';
        document.getElementById('buttonSubmit').style.marginRight = '20px';
    }
}