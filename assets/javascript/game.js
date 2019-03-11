var random_Number;
var current_Number = 0;
var lost = 0;
var win = 0;


var resetAndStart = function () {

	$(".crystals").empty();

	var images = ["assets/images/crystal1.jpg","assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];
		
	random_Number = Math.floor(Math.random() * 102 ) + 19; 


	$("#result").html('Random Number: ' + random_Number);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 12) + 1;

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

	$("#current_Number").html("Total Score: " + current_Number);

}


resetAndStart();


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	current_Number += num;


	$("#current_Number").html("Total score: " + current_Number);

	console.log(current_Number);

	if(current_Number > random_Number){

		lost++;

		$("#lost").html("Losses: " + lost);

		current_Number = 0;

		resetAndStart();

	} 
	else if(current_Number === random_Number){

		win++;

		$("#win").html("Wins: " + win);

		current_Number = 0;

		resetAndStart();

	}

});