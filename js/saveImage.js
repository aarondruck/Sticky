//Saving image to FFOS

//refresh the canvas
function refreshCanvas() {

      //clear the canvas
      var maincanvas2 = document.getElementById("canvas"); // get the canvas
      var ctx2 = maincanvas2.getContext('2d');
      ctx2.clearRect(0,0,maincanvas2.width,maincanvas2.height);

  		//reset the globalCompositeOperation to what it was
  		ctx2.globalCompositeOperation = 'source-over';
}


var count = 0;

function addDrawing() {

      //based on this:
      //http://stackoverflow.com/questions/17332071/trying-to-save-canvas-png-data-url-to-disk-with-html5-filesystem-but-when-i-ret
      //https://developer.mozilla.org/en-US/docs/WebAPI/Device_Storage#Add_a_file

      count++;

      var pictures = navigator.getDeviceStorage("pictures");
      // don't test on simulator, doesnt work.   and need to unplug the device to acutally test
      var maincanvas = document.getElementById("canvas"); // get the canvas



      // add a bg to the image
      var ctx = maincanvas.getContext('2d');
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, maincanvas.width, maincanvas.height);
      //



      var dataURL = maincanvas.toDataURL( "image/png" );
      var data = atob( dataURL.substring( "data:image/png;base64,".length ) ),
          asArray = new Uint8Array(data.length);



      for( var i = 0, len = data.length; i < len; ++i ) {
          asArray[i] = data.charCodeAt(i);
      }



      var photofile   = new Blob( [ asArray.buffer ], {type: "image/png"} );

      //problem here...
      var mainphoto = pictures.addNamed(photofile, "DCIM/FFOS-Sticky-App-Imgs/my-drawings" + count + ".png");
      //alert("test");


      refreshCanvas();

      //alert(count);
      request.onsuccess = function () {
        var nameofimage = this.mainphoto;
        alert('File "' + nameofimage + '" successfully wrote on the pictures');
      }


}


$(document).ready(function(){

		$("#save-btn").click(function(){
		    // unplug device to test
	      addDrawing();

		});

});