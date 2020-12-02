function loadlang(lng)
{
    // var lng = document.getElementById("langselector").value;
    // var cnt = document.getElementById("contents");
    switch (lng)
    {
        case "nl":
            $.getJSON('languages/nl.json', function(data) {
                fillIn(data);
                // $('#contents').text(data.test);
            });
            document.getElementById("concertagenda").style.display = "block";
            document.getElementById("languages-concertagenda").style.display = "block";
            break;
        case "en":
            $.getJSON('languages/en.json', function(data) {
                fillIn(data);
                // $('#contents').text(data.test);
            });
            document.getElementById("concertagenda").style.display = "none";
            document.getElementById("languages-concertagenda").style.display = "none";
            break;
        case "fr":
            $.getJSON('languages/fr.json', function(data) {
                //do stuff with your data here
                fillIn(data);
                // $('#contents').text(data.test);
            });
            document.getElementById("concertagenda").style.display = "none";
            document.getElementById("languages-concertagenda").style.display = "none";
            break;
    }
}
// function loadlang()
// {
//     var lng = document.getElementById("langselector").value;
//     var cnt = document.getElementById("contents");
//     switch (lng)
//     {
//         case "nl":
//             $.getJSON('languages/nl.json', function(data) {
//                 fillIn(data);
//                 // $('#contents').text(data.test);
//             });
//             break;
//         case "en":
//             $.getJSON('languages/en.json', function(data) {
//                 fillIn(data);
//                 // $('#contents').text(data.test);
//             });
//             break;
//         case "fr":
//             $.getJSON('languages/fr.json', function(data) {
//                 //do stuff with your data here
//                 console.log(data.test);
//                 fillIn(data);
//                 // $('#contents').text(data.test);
//             });
//             break;
//     }
// }

function fillIn(data){
    Object.keys(data).forEach(function(key) {
        console.table('Key : ' + key + ', Value : ' + data[key]);
        $('.' + key).text(data[key]);
    })
}

$('.dropdown-toggle').dropdown();
$('#languages-dropdown li').on('click', function() {
    $('#dropdown_title').html($(this).find('a').html());
    $('#dropdown_sm_title').html($(this).find('a').html());
});

$('#languages-dropdown-sm li').on('click', function() {
    $('#dropdown_sm_title').html($(this).find('a').html());
    $('#dropdown_title').html($(this).find('a').html());
});

// $('img').on("error", function() {
//     $(this).attr('src', '/img/A_GEEN_VOORBLAD.png');
// });