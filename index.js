'use strict';

function getImage() {
    fetch ("https://dog.ceo/api/breeds/image/random/"+document.getElementById("numSelected").value+"")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
    var i;
    console.log(responseJson);
    console.log(responseJson.message.length);
    for (i=0; i<responseJson.message.length; i++) {
        console.log(i);
        console.log(responseJson.message[i])
        $(".dogPic").append('<img src='+(responseJson.message[i])+' class="dogPic">')
    }
}

function watchForSubmit() {
    $("form").submit(event => {
        event.preventDefault();
        getImage();
    });
}

$(function() {
    console.log("Waiting for submission");
    watchForSubmit();
});