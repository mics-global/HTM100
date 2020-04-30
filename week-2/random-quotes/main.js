
const random_quotes_url = 'https://programming-quotes-api.herokuapp.com/quotes/random'
var xhr = new XMLHttpRequest();
get_and_update_random_quote();

function get_and_update_random_quote(){
    xhr.open("GET", random_quotes_url, true);
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        $("#author").text(response.author);
        $("#quote").text(response.en);
    };
    xhr.send();
}

$(document).ready(function() {
    $("#get-quote").click(function(){
        get_and_update_random_quote();
    });     
});
