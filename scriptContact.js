/* exported loadInformation */
/* global extractRandomUser, loadHeaderInformation */

function loadInformation(){
    'use strict';
    var persona = extractRandomUser('It');
    loadHeaderInformation(persona);
}