function loadHeaderInformation(persona){
    var headerSurname = document.getElementById('headerSurname').cloneNode(true);
    headerSurname.textContent = persona.name.last;
    var headerName = document.getElementById('headerName');
    headerName.textContent = persona.name.first + ' ';
    headerName.appendChild(headerSurname);
    var title = document.getElementById('headTitle');
    title.textContent = persona.name.first + ' ' + persona.name.last;
}