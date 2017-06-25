
 var counterModule = (function(jq){
 var counter = 0;

var increaseCounter = function(){
	counter++;
}

var getCounter = function(){
	   $('div').css('font-size', '158px');
	   $('div').hide(11000);
	return counter;
}
return{
	getCounter: getCounter,
	increaseCounter: increaseCounter
}
 }(jQuery))
 counterModule.increaseCounter();
 counterModule.increaseCounter();
 counterModule.increaseCounter();
 console.log('value is' + counterModule.getCounter());
 module1.textContent=counterModule.getCounter()