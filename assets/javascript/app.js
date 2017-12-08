//Variables
var correct = 0
var wrong = 0
var unanswered = 0
var seconds = 30




//timer
function run() {
	seconds = set setInterval(decrement, 1000)
}


function decrement(){
	seconds--;
     
     //  Show the number in the #show-number tag.
     $("#timer").html(" " + seconds + " seconds");
    
    //  Once number hits one...
    if (seconds === 1) {
        $("#timer").html(" " + seconds + " second");
    }
      //  Once number hits zero...
    else if (seconds === 0) {
        //  ...run the stop function.
        $('#start').hide();
        hide();
        rSummary();
        stop();
    }
}

function stop(){
	clearInterval(seconds);
}


//calculate th score
$('input[type=radio]').on("change", function() {
	//count how many anwsers are wrong
   	minus = $('input[value=wrong]:checked').length;
	//count how many anwsers are right
   	plus =  $('input[value=correct]:checked').length;
	//count how many went unanwsered
   	unanswered = (6-(plus + minus));
});  
      ;


//Start the coundown
function run() {
    intervalId = setInterval(decrement, 1000);
}
function stop(){
	alert("Done!"
		<br>
		"Correct answers:" + correct,
		<br>
		"Wrong answers:" + wrong,
		<br>
		"Unanswered:" + unanswered);
	
}

//Hide the questions and other contents
$(window).on("load", hide);

$('#start').on('click', function(){
    $(this).hide();
    show();
    run();
});

$('#done').on('click', function(){
    $('#start').hide();
    hide();
    rSummary();
    stop();
});

