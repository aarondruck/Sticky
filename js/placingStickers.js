

     //get rotation degrees
      function getRotationDegrees(obj) {
          var matrix = obj.css("-webkit-transform") ||
          obj.css("-moz-transform")    ||
          obj.css("-ms-transform")     ||
          obj.css("-o-transform")      ||
          obj.css("transform");
          if(matrix !== 'none') {
              var values = matrix.split('(')[1].split(')')[0].split(',');
              var a = values[0];
              var b = values[1];
              var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
          } else { var angle = 0; }
          return (angle < 0) ? angle +=360 : angle;
      }

      // intro screen
      $("#intro-screen").click(function(){
        $("#intro-screen").fadeOut(300);
      })
      // end intro screen

      var d_canvas = document.getElementById('canvas');
      var context = d_canvas.getContext('2d');
      var sticker = document.getElementById('newimage');

      d_canvas.width  = 324;
      d_canvas.height = 486;
      d_canvas.style.width  = '324px';
      d_canvas.style.height = '486px';
      var currentScale;
      var newleftsideside;
      var newtopsideside;
      var newWidth;
      var newHeight;

      $("#newimage").hide();

      $('.btn-place').click(function() {

          $(".overlay").remove();
          $( "#done-panel" ).animate({
              bottom: "-300"
          }, 200);

          var $sticker = $("#newimage"),
              $canvas = $('#canvas');

          var sticker_x = $sticker.offset().left - $canvas.offset().left,
              sticker_y = $sticker.offset().top - $canvas.offset().top;

          var leftside = $("#zoom").css("left");
          var topside = $("#zoom").css("top");
          var newleftside = parseInt(leftside);
          var newtopside = parseInt(topside);
          var attr = $('.polaroid').attr('style');

          if (typeof attr !== 'undefined' && attr !== false) {
            //alert("has style attr");
            //scaled
            function matrixToArray(matrix) {
                return matrix.substr(7, matrix.length - 8).split(', ');
            }
            matrix = matrixToArray($(".polaroid").css("transform"));
            currentScale = matrix[3];
            newWidth = 100 * currentScale;
            newHeight = 100 * currentScale;
            newleftsideside = newleftside + parseInt($(".leftside").html());
            newtopsideside = newtopside + parseInt($(".topside").html());
            context.drawImage(sticker, newleftsideside, newtopsideside, newWidth, newHeight);
            $sticker.hide();
          }

          else {
            //alert("does not have style attr");
            currentScale = 1;
            newWidth = 100 * currentScale;
            newHeight = 100 * currentScale;
            newleftsideside = parseInt(sticker_x);
            newtopsideside = parseInt(sticker_y);
            context.drawImage(sticker, newleftsideside, newtopsideside, newWidth, newHeight);
            $sticker.hide();
          }


      });