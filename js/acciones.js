// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert("Deslizo a la izquierda",function(){"Aplicacion8","Aceptar"})
});

$('#derecha').on("swiperight",function(){
	navigator.notification. confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 1:
			navigator.notification.vibrate (1000);
			break;
		}
	},"Aplicacion8","Beep,Vibrar,Cancelar");
		
});
},false);
});
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
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
	  document.addEventListener("pause",function(){
		  escribehistoria ('la app se pausó');
	  },false);
	  document.addEventListener("resume",function(){
		  escribehistoria ('la app se reinició');
	  },false);
	  document.addEventListener("online",function(){
		  escribehistoria ('la app se conecto a la red');
	  },false);
	  document.addEventListener("offline",function(){
		  escribehistoria ('la app se desconecto a la red');
	  },false);
	  
	  },false);
	  
});

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}