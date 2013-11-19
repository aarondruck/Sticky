// JavaScript Document
$(function(){
    var zoom = new ZoomView('#zoom','#zoom :first');
    // var zoom2 = new ZoomView('#zoom2','#zoom2 :first');
    // var zoom3 = new ZoomView('#zoom3','#zoom3 :first');
    });


    /**
    * Inspired by Jesse Guardiani - May 1st, 2012
    */

	var zIndexBackup = 10;

    function DragView(target) {
      this.target = target[0];
      this.drag = [];
      this.lastDrag = {};


      this.WatchDrag = function()
      {
        if(!this.drag.length) {
          return;
        }

        for(var d = 0; d<this.drag.length; d++) {
          var left = $(this.drag[d].el).offset().left;
          var top = $(this.drag[d].el).offset().top;

          var x_offset = -(this.lastDrag.pos.x - this.drag[d].pos.x);
          var y_offset = -(this.lastDrag.pos.y - this.drag[d].pos.y);

          left = left + x_offset;
          top = top + y_offset;

          this.lastDrag = this.drag[d];

          this.drag[d].el.style.left = left +'px';
          this.drag[d].el.style.top = top +'px';

          //set left drag boundary
          if(this.drag[d].el.style.left == "20px"){
            //alert("touch");
          }

        }
      }

      this.OnDragStart = function(event) {
        var touches = event.originalEvent.touches || [event.originalEvent];
        for(var t=0; t<touches.length; t++) {
          var el = touches[t].target.parentNode;

		  if(el.className.search('polaroid') > -1){

				 el = touches[t].target.parentNode.parentNode;
		  }
			el.style.zIndex = zIndexBackup + 1;
			zIndexBackup = zIndexBackup +1;

          if(el && el == this.target) {
			$(el).children().toggleClass('upSky');
            this.lastDrag = {
              el: el,
              pos: event.touches[t]
            };
            return;
          }

        }
      }

      this.OnDrag = function(event) {
        this.drag = [];
        var touches = event.originalEvent.touches || [event.originalEvent];
        for(var t=0; t<touches.length; t++) {
          var el = touches[t].target.parentNode;

		if(el.className.search('polaroid') > -1){
				 el = touches[t].target.parentNode.parentNode;
		  }

          if(el && el == this.target) {
            this.drag.push({
              el: el,
              pos: event.touches[t]
            });
          }
        }
      }

      this.OnDragEnd = function(event) {
		  	this.drag = [];
        	var touches = event.originalEvent.touches || [event.originalEvent];
		 	for(var t=0; t<touches.length; t++) {
          			var el = touches[t].target.parentNode;

		  			if(el.className.search('polaroid') > -1){
				 			el = touches[t].target.parentNode.parentNode;
		  			}
					$(el).children().toggleClass('upSky');

		  }
      }
    }


    function ZoomView(container, element) {

        container = $(container).hammer({
            prevent_default: true,
            scale_treshold: 0,
            drag_min_distance: 0
        });

        element = $(element);


        var displayWidth = container.width();
        var displayHeight = container.height();

        //These two constants specify the minimum and maximum zoom
        var MIN_ZOOM = 1;
        var MAX_ZOOM = 3;

        var scaleFactor = 1;
        var previousScaleFactor = 1;

        //These two variables keep track of the X and Y coordinate of the finger when it first
        //touches the screen
        var startX = 0;
        var startY = 0;

        //These two variables keep track of the amount we need to translate the canvas along the X
        //and the Y coordinate
        var translateX = 0;
        var translateY = 0;

        //These two variables keep track of the amount we translated the X and Y coordinates, the last time we
        //panned.
        var previousTranslateX = 0;
        var previousTranslateY = 0;

        //Translate Origin variables

        var tch1 = 0,
            tch2 = 0,
            tcX = 0,
            tcY = 0,
            toX = 0,
            toY = 0,
            cssOrigin = "";

        container.bind("transformstart", function(event){

            //We save the initial midpoint of the first two touches to say where our transform origin is.
            e = event

            tch1 = [e.touches[0].x, e.touches[0].y],
            tch2 = [e.touches[1].x, e.touches[1].y]

            tcX = (tch1[0]+tch2[0])/2,
            tcY = (tch1[1]+tch2[1])/2

            toX = tcX
            toY = tcY

            var left = $(element).offset().left;
            var top = $(element).offset().top;

            //alert(left);
            //$(".leftside").html(-(left) + toX)/scaleFactor);

            cssOrigin = (-(left) + toX)/scaleFactor +"px "+ (-(top) + toY)/scaleFactor +"px";



            //alert((-(top) + toY)/scaleFactor);
            //add to html in div
        })

        container.bind("transform", function(event) {
            scaleFactor = previousScaleFactor * event.scale;

            scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));
            transform(event);
        });

        container.bind("transformend", function(event) {
            previousScaleFactor = scaleFactor;
        });


        /**
        * on drag
        */
        var dragview = new DragView($(container));
        container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));
        container.bind("drag", $.proxy(dragview.OnDrag, dragview));
        container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));

        setInterval($.proxy(dragview.WatchDrag, dragview), 10);



        function transform(e) {
            //We're going to scale the X and Y coordinates by the same amount
            //var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotateZ("+ e.rotation +"deg)";
            var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +")";

            var p = $( ".polaroid" );
            var position = p.position();
            $( ".leftside" ).text( position.left );
            $( ".topside" ).text( position.top );

            element.css({
                webkitTransform: cssScale,
                webkitTransformOrigin: cssOrigin,

                transform: cssScale,
                transformOrigin: cssOrigin,
            });

            //alert(scaleFactor);
        }

    }