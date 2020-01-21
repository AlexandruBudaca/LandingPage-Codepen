
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#111");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})