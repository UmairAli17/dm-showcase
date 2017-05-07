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
    $(".end").hide();
    window.localStorage.clear();

    $(".end").click(function() {
        window.localStorage.clear();
        window.location.reload();
    });

    //fades in the current question. Essentially the onme that appears first.

    //The first question is given the value of 0. the second question is given value of 1. and so and so forth. essentially places the questions into an
    //array of sorts. 
    $($questions.get(currentQuestion)).fadeIn();


	$options.click(function(){
        answers = new Object();

	    var question = ($(this).attr('name'))
	    var proc_val = ($(this).data('proc-val'))
        var ips_val = ($(this).data('ips-val'))

        //make an object out of that question and assign it the data-attribute value of proc_val
        answers[question.pps] = proc_val
        //this will create a key "ips" for the json to send to local storage. the key takes the data from the ips=val dataattribute in the answer question buttons
        answers[question.ips] = ips_val
        
        
        
        $($questions.get(currentQuestion)).fadeOut(function () {
        	//then hide the currentQuestion and add one. So if it's question One then +1 so you get question two
        	currentQuestion = currentQuestion + 1;
            if(currentQuestion == totalQuestions){
            	console.log("You've reached the end of the quiz!");
                sum_values();
                
               
            }
            //else if($($questions.get(currentQuestion)).fadeIn()){
            else if($($questions.get(currentQuestion)).fadeIn() && localStorage.getItem('pps') && localStorage.getItem('ips')){
                //parse values to jSON
                pps = JSON.parse(localStorage.getItem('pps'));
                ips = JSON.parse(localStorage.getItem('ips'));
            }else{
                pps=[];
                ips=[];
            }
            //Send the value proc_val values to the jSOn array.
            pps.push(proc_val)
            ips.push(ips_val)
            localStorage.setItem('pps', JSON.stringify(pps));
            localStorage.setItem('ips', JSON.stringify(ips));
	   })
    });
    
    

    var sum_values = function()
    {
        var total_sum = 0;
        var pps_sum = 0;
        var ips_sum = 0;
        var pps = $.parseJSON(localStorage.getItem('pps'));
        var ips = $.parseJSON(localStorage.getItem('ips'));

        var mergedTotals = pps.concat(ips);
        
        var totalSum = $.each(mergedTotals, function (i, value) {
            total_sum += value;
        });
        
        var ppsSum = $.each(pps, function(i, value){
            pps_sum += value;
        });
        
        var ipsSum = $.each(ips, function(i, value){
            ips_sum += value;
        });
        
        if(pps_sum >= ips_sum)
        {
            $(".quiz-end").append(total_sum + '<br> Total Level of Procatination' + '<br><br>' + 'You Are What We Call a "Pure Procastinator"')
            $(".end").show();
        }
        else{
            $(".quiz-end").append(total_sum + '<br> Total Level of Procatination' + '<br><br>' + '</br>' +'You Are an Irrational Procastinator"')
            $(".end").show();
        }
    }
    
    



    
});
