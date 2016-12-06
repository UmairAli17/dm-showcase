$(document).ready(function() {
	
	var $procScore = 0;
	//if I were to change the currentQuestion to 1 then it would display question two. 
	var currentQuestion = 0;
	var $questions = $('.questions');
	var $options = $('.options');
	//counts the number of questions. If there's 5 then it will say that there's 5 questions. Etc etc
	var totalQuestions = $('.questions').length;

	//hide all questions.
    $questions.hide();

    //fades in the current question. Essentially the onme that appears first.

    //The first question is given the value of 0. the second question is given value of 1. and so and so forth. essentially places the questions into an
    //array of sorts. 
    $($questions.get(currentQuestion)).fadeIn();
    sessionStorage.getItem('question');

	answers = new Object();

	$options.click(function(){
	    var answer = ($(this).attr('value'))
	    var question = ($(this).attr('name'))
	    var proc_val = ($(this).data('proc-val'))

        
        $($questions.get(currentQuestion)).fadeOut(function () {
        	//then hide the currentQuestion and add one. So if it's question One then +1 so you get question two
        	currentQuestion = currentQuestion + 1;
            if(currentQuestion == totalQuestions){
                var result = sum_values()
            	console.log("You've reached the end of the quiz!");
            }
            //else if($($questions.get(currentQuestion)).fadeIn()){
            else if($($questions.get(currentQuestion)).fadeIn() && sessionStorage.getItem('question')){
                //parse values to jSON
                quest = JSON.parse(sessionStorage.getItem('question'));
            }else{
                quest=[];
            }
            //Send the value proc_val values to the jSOn array.
            quest.push(proc_val)
            sessionStorage.setItem('question', JSON.stringify(quest));
            console.log(proc_val);
	   })
    });

    function sum_values(){
    var the_sum = 0;
        $.each(quest, function () {
             the_sum += this.proc_val
        });
        console.log(the_sum);
    }


    
});
