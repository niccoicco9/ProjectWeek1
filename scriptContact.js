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
    setTimeout($('body').loading('toggle'),2000);
    loadHeaderInformation();
}



function submitPost(){
    'use strict';
    var persona = {
        "name": {
            "title": "mr",
            "first": "Dries",
            "last": "Mertens"
        }
    };

    $.post("http://localhost:3000/results", persona).done(function(data){
        alert("Dati caricati: " + data);
    });

}