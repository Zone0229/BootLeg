// Bind dollar signs to query selector (IE8+)
var $ = document.querySelector.bind(document);

function preventStandardForm(evt) {
    // prevent standard form from submitting
    evt.preventDefault();
}


function queryAutocomplete(input) {
    var service =   axios.get(`https://api.dp.la/v2/items?q=*&api_key=9097a0c7f9cd2d30eef1b6b4b50b6127`);
}

function handleTabbingOnInput(evt) {
    // *Handles Tab event on delivery-location input
    if (evt.target.id == "pac-input") {
        // Remove active class
        evt.target.className = '';

        // Check if a tab was pressed
        if (evt.which == 9 || evt.keyCode == 9) {
            queryAutocomplete(evt.target.value);
        }
    }
}

// ***** Initializations ***** //
// initialize pac search field //
var pacInput = $('#pac-input');
pacInput.focus();

// Initialize Autocomplete
var options = {
    componentRestrictions: {
        country: 'us'
    }
};
var autocomplete = new google.maps.places.Autocomplete(pacInput, options);
// ***** End Initializations ***** //

// ***** Event Listeners ***** //
google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var result = autocomplete.getPlace();
    if (typeof result.address_components == 'undefined') {
        queryAutocomplete(result.name);
    } else {
        console.log(result.address_components);
    }
});

// Tabbing Event Listener
if (document.addEventListener) {
    document.addEventListener('keydown', handleTabbingOnInput, false);
} else if (document.attachEvent) { // IE8 and below
    document.attachEvent("onsubmit", handleTabbingOnInput);
}

// search form listener
var standardForm = $('#search-shop-form');
if (standardForm.addEventListener) {
    standardForm.addEventListener("submit", preventStandardForm, false);
} else if (standardForm.attachEvent) { // IE8 and below
    standardForm.attachEvent("onsubmit", preventStandardForm);
}
// ***** End Event Listeners ***** //
