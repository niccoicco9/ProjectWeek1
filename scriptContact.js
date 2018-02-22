/* exported loadInformation */
/* global loadHeaderInformation, $*/

function loadInformation(){
    'use strict';
    setTimeout($('body').loading('toggle'),2000);
    loadHeaderInformation();
}