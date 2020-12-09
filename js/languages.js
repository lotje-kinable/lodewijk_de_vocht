function firstLoadLanguage(lng)
{
    switch (lng)
    {
        case "nl":
            $.getJSON('languages/nl.json', function(data) {
                fillIn(data);
            });
            document.getElementById("concertagenda").style.display = "block";
            document.getElementById("languages-concertagenda").style.display = "block";

            enableCannotListenButtons();

            break;
        case "en":
            $.getJSON('languages/en.json', function(data) {
                fillIn(data);
            });
            document.getElementById("concertagenda").style.display = "none";
            document.getElementById("languages-concertagenda").style.display = "none";

            disableCannotListenButtons();
            break;

        case "fr":
            $.getJSON('languages/fr.json', function(data) {
                fillIn(data);
            });
            document.getElementById("concertagenda").style.display = "none";
            document.getElementById("languages-concertagenda").style.display = "none";


            disableCannotListenButtons();
            break;

        case "de":
            $.getJSON('languages/de.json', function(data) {
                fillIn(data);
            });
            document.getElementById("concertagenda").style.display = "none";
            document.getElementById("languages-concertagenda").style.display = "none";

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

function changeLanguage(clicked_element_id)
{
    const element = document.getElementById(clicked_element_id);


    let lng = element.options[element.selectedIndex].value;

    switch (lng)
    {
        case "nl":

            localStorage.setItem('language', lng);
            $("#languages-not-mobile").val(lng);
            $("#languages-mobile").val(lng);

            $.getJSON('languages/nl.json', function(data) {
                fillIn(data);
                // $('#contents').text(data.test);
            });

            document.getElementById("concertagenda").style.display = "block";
            document.getElementById("languages-concertagenda").style.display = "block";

            enableCannotListenButtons();

            break;
        case "en":
            hideConcertAgenda();

            localStorage.setItem('language', lng);
            $("#languages-not-mobile").val(lng);
            $("#languages-mobile").val(lng);

            $.getJSON('languages/en.json', function(data) {
                fillIn(data);
            });


            disableCannotListenButtons();
            break;

        case "fr":
            hideConcertAgenda()

            localStorage.setItem('language', lng);
            $("#languages-not-mobile").val(lng);
            $("#languages-mobile").val(lng);

            $.getJSON('languages/fr.json', function(data) {
                //do stuff with your data here
                fillIn(data);
            });


            disableCannotListenButtons();
            break;

        case "de":
            hideConcertAgenda();

            $.getJSON('languages/de.json', function(data) {
                //do stuff with your data here
                fillIn(data);
                // $('#contents').text(data.test);
            });

            disableCannotListenButtons();

            localStorage.setItem('language', lng);
            $("#languages-not-mobile").val(lng);
            $("#languages-mobile").val(lng);
            break;
    }
}

function hideConcertAgenda(){
    document.getElementById("concertagenda").style.display = "none";
    document.getElementById("languages-concertagenda").style.display = "none";
}
