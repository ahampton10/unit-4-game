var targetNumber = "";
var wins = 0; 
var losses = 0; 
var counter = 0; 
var images = ["./assets/images/pinkcrystal.png", "./assets/images/purplecrystal.png", "./assets/images/yellowcrystal.png", "./assets/images/bluecrystal.png"]; 


function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19; 
}

function crystalReset () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>"); 
        crystal.addClass("crystal"); 
        crystal.attr("src", images[i]); 
        crystal.attr("value", (Math.floor(Math.random() * 12)+ 1)); 
        crystal.attr("height", "100"); 
        $(".crystal-images").append(crystal); 
    }
}

function htmlReset () {
    $(".target-number").html(targetNumber); 
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses:" + losses + "</p>"); 
    $(".score-number").html(counter); 
    $(".crystal-images").empty(); 
}

function totalReset () {
    randomTargetNumber (); 
    counter = 0; 
    htmlReset (); 
    crystalReset (); 
}

randomTargetNumber (); 
htmlReset (); 
crystalReset (); 

function crystalClick () {
    counter += parseInt($(this).attr("value")); 
    $(".score-number").html(counter); 
    if (counter == targetNumber) {
        wins++; 
        totalReset (); 
    }
    else if (counter > targetNumber) {
        losses ++; 
        totalReset (); 
    }; 
}; 
$(document).on("click", ".crystal", crystalClick);