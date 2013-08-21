$(function(){

  $('#previous_frame').click(slideLeft);
  $('#next_frame').click(slideRight);

  function slideLeft(event){
    event.preventDefault();

    //next line offsets frame by +360px
    var $self = $(this);
    $(this).unbind('click'); //let animation finish before another click
    //need to compensate by offsetting -360px before animating or else
    //newly added pane will slide off to left
    $(".frames").prepend($(".frames li:last-child"));
    $('.frames').css('left', '-360px');
    $('.frames').animate({'left': '+=360px'}, 'slow', function() {
      $self.on('click', slideLeft); //allow clicks after animation complete
    });
    
  }



  function slideRight(event){
    event.preventDefault();
    $('.frames').animate({'left': '-=360px'}, 'slow', function() {
      $(".frames").append($(".frames li:first-child"));
      // debugger;
      $('.frames').css('left', '0');
    });
  }
  


});