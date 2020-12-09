function chooseLang(lng){
    switch (lng) {
        case "NL":

            localStorage.setItem('language', lng);
            setSpanLanguage('language-picker-not-mobile', 'NL');
            setSpanLanguage('language-picker-mobile', 'NL');

            $.getJSON('languages/nl.json', function (data) {
                fillIn(data);
                // $('#contents').text(data.test);
            });

            document.getElementById("concertagenda").style.display = "block";
            document.getElementById("languages-concertagenda").style.display = "block";

            enableCannotListenButtons();

            break;

        case "EN":
            hideConcertAgenda();

            localStorage.setItem('language', lng);

            setSpanLanguage('language-picker-not-mobile', 'EN');
            setSpanLanguage('language-picker-mobile', 'EN');

            $.getJSON('languages/en.json', function (data) {
                fillIn(data);
            });


            disableCannotListenButtons();
            break;

        case "FR":
            hideConcertAgenda();

            localStorage.setItem('language', lng);
            setSpanLanguage('language-picker-not-mobile', ' FR');
            setSpanLanguage('language-picker-mobile', ' FR');

            $.getJSON('languages/fr.json', function (data) {
                fillIn(data);
            });

            disableCannotListenButtons();
            break;

        case "DE":
            hideConcertAgenda();

            localStorage.setItem('language', lng);
            setSpanLanguage('language-picker-not-mobile', ' DE');
            setSpanLanguage('language-picker-mobile', ' DE');

            $.getJSON('languages/de.json', function (data) {
                fillIn(data);
            });

            disableCannotListenButtons();
            break;
    }
}

function disableCannotListenButtons(){
    const cannotListenButtons = document.getElementsByClassName('cannot-listen');

    for (let i = 0; i < cannotListenButtons.length; i ++) {
        cannotListenButtons[i].classList.add('disabled');
    }
}

function enableCannotListenButtons(){
    const cannotListenButtons = document.getElementsByClassName('cannot-listen');

    for (let i = 0; i < cannotListenButtons.length; i ++) {
        cannotListenButtons[i].classList.remove('disabled');
    }
}

function fillIn(data){
    Object.keys(data).forEach(function(key) {
        // console.table('Key : ' + key + ', Value : ' + data[key]);
        $('.' + key).text(data[key]);
    })
}

function setSpanLanguage(id, lng){

    let span = document.getElementById(id);

    span.removeChild(span.childNodes[0]);
    span.appendChild(document.createTextNode(lng));
}

function hideConcertAgenda(){
    document.getElementById("concertagenda").style.display = "none";
    document.getElementById("languages-concertagenda").style.display = "none";
}