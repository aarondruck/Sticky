// http://stackoverflow.com/questions/15036386/make-image-drawn-on-html5-canvas-draggable-with-javascript
// http://simonsarris.com/project/canvasdemo/demo2.html
// http://stackoverflow.com/questions/19100009/dragging-and-resizing-an-image-on-html5-canvas
// http://simonsarris.com/blog/225-canvas-selecting-resizing-shape
// http://creativedroplets.com/html5-and-multitouch-hammer-js/
// http://touchpunch.furf.com/
// http://jqueryui.com/download/
// http://jsfiddle.net/V92Gn/

//var can3 = document.getElementById('canvas3');
//var ctx3 = can3.getContext('2d');

$(".btn-place").click(function(){
    $(".topbarslidedown").animate({
      opacity: 0
    }, 100);
    $(".topbarslidedown").css("z-index","-9999");
});

$(".btn-remove").click(function(){
    $("#newimage").hide();
    $(".topbarslidedown").animate({
      opacity: 0
    }, 100);
    $(".topbarslidedown").css("z-index","-9999");
});


$(".sticker-1").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/fox-mask.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-2").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/sunglasses.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-3").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/mustache.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-4").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/hat.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-5").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/scarf.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-6").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/tail.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-7").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/bandana.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-8").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/eyebrows.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-9").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/eyepatch.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-10").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/beret.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-11").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/earring.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});

$(".sticker-12").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/bowtie.png");
    $("#newimage").show();
    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1,
    }, 1);
    $(".topbarslidedown").css("z-index","10000");

});



