var cells = document.getElementsByClassName("element");

function buildTableOfElements() {
    for(let i = 0; i < element_data.length; i++) {

        cells[i].innerHTML = `
            <div class='td-container'>
                <div class='atom-number'>${element_data[i].atomic_number}</div>

                <div class='symbol-mass-container'>
                    <b class='symbol'>${element_data[i].symbol}</b>
                    <span class='mass'>${element_data[i].mass}</span>
                </div>
            </div>
        `;

        cells[i].classList.add(`${element_data[i].class_type}`);

        cells[i].setAttribute("onmouseover", "showDetails(this)");
        cells[i].setAttribute("onmouseleave", "hideDetails()");

        cells[i].setAttribute("data-name", element_data[i].name);
        cells[i].setAttribute("data-atomicnumber", element_data[i].atomic_number);
        cells[i].setAttribute("data-symbol", element_data[i].symbol);
        cells[i].setAttribute("data-mass", element_data[i].mass);
        cells[i].setAttribute("data-type", element_data[i].type);
        cells[i].setAttribute("data-boilingpoint", element_data[i].boiling_point);
        cells[i].setAttribute("data-discovered", element_data[i].discovered);
        cells[i].setAttribute("data-description", element_data[i].description);
        cells[i].setAttribute("data-whereitsused", element_data[i].where_its_used);
        cells[i].setAttribute("data-whereitsfrom", element_data[i].where_its_from);
    }
}

buildTableOfElements();




function showDetails(elem){
    setTextOf("symbol-text", elem.dataset.symbol);
    setTextOf("detail-name-title", "Name: ");
    setTextOf("detail-name-text", elem.dataset.name);
    setTextOf("detail-mass-title", "Mass: ");
    setTextOf("detail-mass-text", elem.dataset.mass);
    setTextOf("detail-atomic-number-title", "Atomic Number: ");
    setTextOf("detail-atomic-number-text", elem.dataset.atomicnumber);
    setTextOf("detail-boiling-point-title", "Boiling Point: ");
    setTextOf("detail-boiling-point-text", elem.dataset.boilingpoint + " &deg;C");
    setTextOf("detail-type-title", "Type: ");
    setTextOf("detail-type-text", elem.dataset.type);
    setTextOf("detail-discovered-title", "Discovered: ");
    setTextOf("detail-discovered-text", elem.dataset.discovered);
    setTextOf("info-description-title", "Description");
    setTextOf("info-description-text", elem.dataset.description);
    setTextOf("info-where-used-title", "Where it's used");
    setTextOf("info-where-used-text", elem.dataset.whereitsused);
    setTextOf("info-where-from-title", "Where it's from");
    setTextOf("info-where-from-text", elem.dataset.whereitsfrom);
}


function hideDetails(){
    setTextOf("symbol-text", "");
    setTextOf("detail-name-title", "");
    setTextOf("detail-name-text", "");
    setTextOf("detail-mass-title", "");
    setTextOf("detail-mass-text", "");
    setTextOf("detail-atomic-number-title", "");
    setTextOf("detail-atomic-number-text", "");
    setTextOf("detail-boiling-point-title", "");
    setTextOf("detail-boiling-point-text", "");
    setTextOf("detail-type-title", "");
    setTextOf("detail-type-text", "");
    setTextOf("detail-discovered-title", "");
    setTextOf("detail-discovered-text", "");
    setTextOf("info-description-title", "");
    setTextOf("info-description-text", "");
    setTextOf("info-where-used-title", "");
    setTextOf("info-where-used-text", "");
    setTextOf("info-where-from-title", "");
    setTextOf("info-where-from-text", "");
}


function setTextOf(id, newText){
    document.getElementById(id).innerHTML = newText;
}
