
$(document).ready(function() {

  $(window).on('load',function(){
     $('.loader').fadeOut();
  });

  $(".contact_panel").children().css("display", "none");

  var sc;

//is in viewport function
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    var contact_panel_width,resume_view_width;

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

        if (isMobile.matches) {
           contact_panel_width=99.5+'%';
        }
        else{
           contact_panel_width=550;
        }

     $(".contact_click").click(function(){
        $(".contact_panel").children().css("display", "flex");
        $(".container").css("filter", "blur(25px)");
        $(".contact_close").css("display", "flex");
        $(".contact_panel").css("top", sc);
          $(".contact_panel").animate({
                width: contact_panel_width
                // width: 50 + '%'
            },600);
     });
     if (isMobile.matches) {

     }
     else{
       $(".resume_click").click(function(){
          $(".resume_view").css("display", "flex");
          $(".resume_view").css("z-index", "1");
          $(".container").css("filter", "blur(25px)");
            $(".resume_view").animate({
                  width: 95+'%',
                  height:95+'%'
              },300);
            $(".resume_view").children().css("display", "flex");
       });
     }

     $(".about_click").click(function(){
       document.getElementById("view-2").scrollIntoView({ behavior: 'smooth', block: 'start' });
     });

     $(".contact_close").click(function(){
        $(".contact_panel").animate({
                width: 0
            },600,function(){
              $(".container").css("filter", "none");
              $(".contact_close").css("display", "none");
              $(".contact_panel").children().css("display", "none");
            });

     });

     $(".resume_view_close").click(function(){
        $(".resume_view").animate({
                width: 0
            },600,function(){
        $(".resume_view").children().css("display", "none");
              $(".resume_view").css("z-index", "0");
              $(".container").css("filter", "none");
            });

     });

     $("#message").click(function(){
      if($("#name").val().length==0 || $("#email").val().length==0 || $("textarea").val().length==0 ){
       alert("\nForm incomplete !\n\nPlease Enter Your Name, Email and Message.");
      }
     });

     $("#exp").click(function(){
        document.getElementById("view-3").scrollIntoView({ behavior: 'smooth', block: 'start' });
     });
     $("#edu").click(function(){
        document.getElementById("view-4").scrollIntoView({ behavior: 'smooth', block: 'start' });
     });
//is in viewport code ends here

    $("#scroll-down").click(function(){
      console.log("View1-"+$("#view-1").isInViewport()+"\nView2-"+$("#view-2").isInViewport()+"\nView3"+$("#view-3").isInViewport());

        if($("#view-1").isInViewport()) {
          var elmnt = document.getElementById("view-2");
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
          $('#scroll-down').addClass("pulse-button_center");
        }
        else if($("#view-2").isInViewport()){
          // var elmnt = document.getElementById("view-1");
          // elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
           $("html, body").animate({ scrollTop: 0 }, "slow");
          $('#scroll-down>i').removeClass("down");
          $('#scroll-down>i').addClass("up");
          $('#scroll-down').addClass("pulse-button_right");
        }
        else  {
          var elmnt = document.getElementById("view-1");
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
          $('#scroll-down>i').removeClass("up");
          $('#scroll-down>i').addClass("down");
        }
    });

    $(window).on('resize scroll', function() {

        if ($('#view-2').isInViewport()) {
          $('.card').addClass("animated fadeInUpBig");
          $('.image').addClass("animated bounceInDown");
          $('#scroll-down').removeClass("pulse-button_center");
          $('#scroll-down').addClass("pulse-button_right");
          $('#scroll-down>i').removeClass("down");
          $('#scroll-down>i').addClass("up");
        }
        else if ($('#view-1').isInViewport()) {
            $('#scroll-down').addClass("pulse-button_center");
            $('#scroll-down').removeClass("pulse-button_right");
            $('#scroll-down>i').removeClass("up");
            $('#scroll-down>i').addClass("down");
          }

          sc = $(window).scrollTop();
        // pulse button goes right & upwards


    });
});




