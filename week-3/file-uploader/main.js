const dictionary_base_url = 'https://cors-anywhere.herokuapp.com/https://file.io'
var xhr = new XMLHttpRequest();

$.fn.setClass = function(classes) {
    this.attr('class', classes);
    return this;
};

function get_metrics(){
    xhr.open("POST", dictionary_base_url, true);
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);        
        console.log(response);
        $("#link").text('File Link: ' + response);
        $('p').css('visibility','inherit');
        $('p').setClass('alert alert-success');
    };
    xhr.send(JSON.stringify(return_params_dictionary()));
}

function auto_elements_styling(){
    // Main Div Styling
    $('.container').css('margin-top','50px');
    // Output URL Styling
    $('p').css('margin-top','20px');
    $('p').setClass('alert alert-success');
    $('p').css('visibility','hidden');
    // Button
    $('button').setClass('btn btn-primary');
}

function return_params_dictionary(){
    var params = {};
    var filepath = $('#file').val();
    params['file'] = filepath;
    return params;
}

$(document).ready(function() {
    $("button").click(function(){
        get_metrics();
    });

    auto_elements_styling();
});

