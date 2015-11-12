( function( $ ) {


$(window).scroll(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active'); 
  var checkElement = $(this).next();

    if ((checkElement.is('ul')) && (checkElement.is(':visible')).scrollTop()>0)
     {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp('normal');
     }
    else
     {
      $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
     }
 });



$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		

});
});
} )( jQuery );

