$(document).ready(function() {

      //Canvas screen// // // // // // // //

      // add image to canvas

      //

      // Clear button

      // New button
      $(".startover-btn").click(function(){
        $("#canvas-area").animate({
          opacity: 0
        }, 100);
        $("#canvas-area").css("z-index","0");
        $("#main").animate({
          opacity: 1
        }, 100);
        $("#main").css("z-index","3");

      });

      // Stickers button
      $(".stickers-btn").click(function(){
        $("#stickers-screen").animate({
          top: 0
        }, 200);
      });

      $(".sticker-1").click(function(){
        //alert("test");
        //add object element to canvas


      });

      $(".close-btn").click(function(){
        $("#stickers-screen").animate({
          top: 1000
        }, 200);
        //$("#stickers").css("z-index","0");
      });

      $(".done-btn").click(function(){
        $("#canvas-area").append('<div class="overlay" style="position: absolute; top: 0; left: 0; background: rgba(0,0,0,0.5); width: 100%; height: 100%; z-index: 8888;"></div');
        $( "#done-panel" ).css("z-index","9999");
        $( "#done-panel" ).animate({
            bottom: "-20"
          }, 200);
      });



      $("#btn-clear").click(function(){
        navigator.vibrate(100);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        $("#newimage").hide();
        $("#newimage").css({
          width: "100px",
          height: "100px",
          top: 10,
          left: 10
        })
        $(".overlay").remove();
        $( "#done-panel" ).animate({
            bottom: "-300"
        }, 200);

      });

      $("#btn-cancel").click(function(){
        $(".overlay").remove();
        $( "#done-panel" ).animate({
            bottom: "-300"
        }, 200);
      });

      $("#save-btn").click(function(){
        navigator.vibrate(200);
        $(".overlay").remove();
        $( "#done-panel" ).animate({
            bottom: "-300"
        }, 200);
      });



      // End Canvas screen// // // // // // //

});