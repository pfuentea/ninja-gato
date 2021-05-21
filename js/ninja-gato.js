$(document).ready(function(){
    $('img').on('click', function() { 
      $old=  $(this).attr('src');
      $new=  $(this).attr('data-alt-src');
      $(this).attr('src', $new);
      $(this).attr('data-alt-src', $old);


    });
});