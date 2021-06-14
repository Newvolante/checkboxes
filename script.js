(function() {
    console.warn('Script correctly linked to web page');

    let selectAllOptions = document.getElementById('all');
    let optionsNodelist = document.forms[0].elements.option;
    
    
    selectAllOptions.addEventListener('change', function() {
        let allOptionsState = selectAllOptions.checked;

        console.log('select all checkboxes: ' + allOptionsState);

        optionsNodelist.forEach(item => {
            item.checked = allOptionsState;
        })
    });

    optionsNodelist.forEach(item => {
        item.addEventListener('change', function() {
            let allORNot = Array.from(optionsNodelist).every(item => {
                return item.checked == true;
            })
            
            if (allORNot == false) {
                selectAllOptions.checked = false;
            } else selectAllOptions.checked = true;
        });
    });
})();