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
    resizeContactUs()
});


function resizeContactUs(){
    if(window.innerWidth < 680){
        document.getElementsByTagName('section')[0].style.flexDirection = 'column';
        document.getElementsByTagName('section')[0].style.justifyContent = 'center';
        document.getElementById('contactArticle').style.margin = '15px auto';
        document.getElementById('messageArticle').style.margin = 'auto';
        document.getElementById('contactArticle').style.width = document.getElementById('email').clientWidth - 50 ;
        document.getElementById('containerButton').style.justifyContent = 'space-around';
    } else{
        document.getElementsByTagName('section')[0].style.flexDirection = 'row';
        document.getElementsByTagName('section')[0].style.justifyContent = 'space-between';
        document.getElementById('contactArticle').style.width = '20%';
        document.getElementById('contactArticle').style.margin = '15px';
        document.getElementById('messageArticle').style.margin = '0px';
        document.getElementById('containerButton').style.justifyContent = 'flex-end';
    }
}