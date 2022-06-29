$( document ).ready(function() {
    var ctrlVideo = document.getElementById("banner-video"); 
     
    $('button').click(function(){
      if ($('button').hasClass("active")){
        
            ctrlVideo.play();
        
        $('button').html("Pause");
        $('button').toggleClass("active");
      } else {
        
            ctrlVideo.pause();
        
        $('button').html("play");
        $('button').toggleClass("active");
      }
    });
     
    });