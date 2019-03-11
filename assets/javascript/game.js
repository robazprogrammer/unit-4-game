var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

// $(".crystal").attr('class');

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg', 
			'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642', 
			'http://jonvilma.com/images/crystal-5.jpg', 
			'https://static.turbosquid.com/Preview/2014/07/08__10_08_09/Crystals0010.jpgc22b2831-ae7a-4cb6-b4ac-612aa7f35ad7Original.jpg'];
		
	random_result = Math.floor(Math.random() * 69 ) + 30; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});