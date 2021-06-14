(function() {
    console.warn('Script correctly linked to web page');

    let selectAllOptions = document.getElementById('all');
    let optionsNodelist = document.forms[0].elements.option;
    
    // adding an event listener to the "select all" checkbox
    selectAllOptions.addEventListener('change', function() {
        
        // "select all" checkbox state
        let allOptionsState = selectAllOptions.checked;

        // sets the checked status of each checkbox equal to the checked status
        // of the "select all" checkbox
        optionsNodelist.forEach(item => {
            item.checked = allOptionsState;
        })
    });

    // adding an event listener to the checkboxes but the "select all" checkbox
    optionsNodelist.forEach(item => {
        item.addEventListener('change', function() {
            
            // checks if every checkbox but the "select all" one is checked
            let allchecked = Array.from(optionsNodelist).every(item => {
                return item.checked == true;
            })
            
            // "select all" checkbox only checked if all the options are checked
            allchecked == false ? selectAllOptions.checked = false : selectAllOptions.checked = true;
        });
    });
})();