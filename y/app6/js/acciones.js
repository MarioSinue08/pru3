// JavaScript Document}

$(document).ready(function(e){
    document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function (){
			navigator.notification.beep (1);
		})
		
		$('#vibrar').tap(function (){
			navigator.notification.vibrate (1000);
		})
		
	},false);
});