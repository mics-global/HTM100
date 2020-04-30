
var xhr = new XMLHttpRequest();
const random_lyric_url = 'https://api.lyrics.ovh/v1/';
const artist_song = [
    ['Coldplay', 'Adventure of a Lifetime'],
    ['Eminem', 'Lose Yourself (From "8 Mile" Soundtrack)'],
    ['Eminem', 'Without Me'],
    ['Eminem', 'Darkness'],
    ['Taylor Swift', 'Blank Space'],
    ['Diana Krall', 'Jingle Bells'],
    ['One Direction', 'Long Way Down'],
    ['Tones and I', 'Dance Monkey'],
    ['Lil Nas X', 'Old Town Road']
];

$(document).ready(function() {

    set_attribute_include_new_line_and_tab();
    
    get_and_update_random_lyric();

    $("#get-lyric").click(function(){
        get_and_update_random_lyric();
    });     

});


function get_and_update_random_lyric(){
    random_artist_song = get_random_artist_lyric()
    
    xhr.open(
        "GET",
        get_build_url_from_artist_lyric(
            random_artist_song
        ),
        true
    );
    
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        $("#artist").text(random_artist_song[0]);
        $("#song").text(random_artist_song[1]);
        $("#lyric").text(response.lyrics);
    };

    xhr.send();
}

function set_attribute_include_new_line_and_tab(){
    $('#lyric').css('white-space','pre-wrap');
}

function get_build_url_from_artist_lyric(artist_lyric){
    var artist = artist_lyric[0];
    var lyric = artist_lyric[1];
    return random_lyric_url + '/' + artist + '/' + lyric;
}

function get_random_artist_lyric(){
    return artist_song[Math.floor(Math.random()*artist_song.length)];
}