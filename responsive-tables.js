$(document).ready(function() {
  
  $("table.responsive").each(function(i, element) {
        $(element).wrap("<div class='table-wrapper' />");	 
 });   
	

   $(window).on('load',function() { 
      if(!$('.handle').hasClass('left') && !$('.handle').hasClass('right')){     
	  $(".table-wrap").each(function () { 
			$(this).prepend(" <a href='#' class='handle left ' ></a> ");
      $(this).append(" <a href='#' class='handle right' ></a>");
    
	});
      }
 });
  $(window).resize(function() {      
	      if(!$('.handle').hasClass('left') && !$('.handle').hasClass('right')){     
	  $(".table-wrap").each(function () { 
			$(this).prepend(" <a href='#' class='handle left min' ></a> ");
      $(this).append(" <a href='#' class='handle right' ></a>");
      
    
	});
      }
 });
  $(window).on("redraw",function(){       
	      if(!$('.handle').hasClass('left') && !$('.handle').hasClass('right')){     
	  $(".table-wrap").each(function () {  
		$(this).prepend(" <a href='#' class='handle left min' ></a> ");
      $(this).append(" <a href='#' class='handle right' ></a>");
      
    
	});
      }
  });  
  
 
 
 var oldleftPos=0;
 var leftPos=0;
 $(".table-wrap").delegate(".right", "click", function(e) {
      e.preventDefault(); 

    /* find click event count */
      var $this = $(this),
      clickNum = $this.data('clickNum');
      if (!clickNum) clickNum = 1;
      if(clickNum==1){
        oldleftPos=0;
        leftPos=0;
      }
      $this.data('clickNum', ++clickNum);      
      leftPos = $this.prev('.table-wrapper').scrollLeft();      
      console.log(leftPos+""+oldleftPos);    

      $this.prev('.table-wrapper').animate({scrollLeft: leftPos + 50}, 200);         
      
       if(leftPos ==oldleftPos && oldleftPos%50 !=0) {
             $this.addClass('max');
         } else  $this.prev('left').removeClass('min');        
         oldleftPos= leftPos;     
        
		});    

    $(".table-wrap").delegate(".left", "click", function(e) {
		    e.preventDefault();
        var leftPos2 =  $(this).next('.table-wrapper').scrollLeft();  
        $(this).next('.table-wrapper').animate({scrollLeft: leftPos2 - 50}, 200); 

        if( $(this).next('.table-wrapper').scrollLeft() <= 50) {
            $(this).parent().find('.left').addClass('min');
         }else  $(this).parent().find('.right').removeClass('max');
         
	});
	   
});

   