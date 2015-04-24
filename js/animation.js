$(function() {

  $('img', '#ruota').each(function() {
  
    var $img = $(this);
    $img.hover(function() {
    
      $img.stop(true, true).animate({
        top: - 32
      }, 'slow', function() {
      
        $img.addClass('rotated');
      
      
      });
    
    }, function() {
    
      $img.stop(true, true).animate({
        top: 0
      }, 'slow', function() {
      
        $img.removeClass('rotated');
      
      });
    
    });
    
  
  
  });


});