


/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
           
            /*====================================
              LOAD APPROPRIATE MENU BAR
           ======================================*/
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

          
     
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

$(document).ready(function(){


    $(".submenu > a").click(function(e) {
      e.preventDefault();
      var $li = $(this).parent("li");
      var $ul = $(this).next("ul");
  
      if($li.hasClass("open")) {
        $ul.slideUp(350);
        $li.removeClass("open");
      } else {
        $(".nav > li > ul").slideUp(350);
        $(".nav > li").removeClass("open");
        $ul.slideDown(350);
        $li.addClass("open");
      }
    });
    
  });
