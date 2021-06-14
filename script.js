(function() {
    console.warn('Script correctly linked to web page');

    let selectAllOptions = document.getElementById('all');
    let optionsNodelist = document.forms[0].elements.option;
    
    
    selectAllOptions.addEventListener('change', function() {
        let allOptionsState = selectAllOptions.checked;

        console.log('select all checkboxes: ' + allOptionsState);

        if (allOptionsState) {
            optionsNodelist.forEach(item => { item.checked = true; });
        } else optionsNodelist.forEach(item => { item.checked = false; });
    });

})();