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
    setTimeout($('body').loading('toggle'),1000);
    loadHeaderInformation();
}



$('#submitButton').click(function(){ 
    'use strict';
    $.post("http://localhost:3000/results", $("#formContact").serialize());
});