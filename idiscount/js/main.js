;(function(){
	'use strict';

  /*FORM*/
  $(document).ready(function(){
    $('.input_onkeyup').each(function(){
      if ($(this).val().length > 0){
        $(this).parent().find("label").addClass('active');
      }
    });
  });
  $('.input_onkeyup').focus(function(){
    $(this).parent().find("label").addClass('active');
  });
  $('.input_onkeyup').focusout(function(){
    
    if ($(this).val().length == 0){
      $(this).parent().find("label").removeClass('active');
    }
  });

  //размер бэкграунда под экран
  function heightDetect(){
      $("#first").css("height", $(window).height());
      var centerContent = $("#first").find(".void-space");
      centerContent.css("height", $(window).height() / 3.8);
  };
  heightDetect()
  $(window).resize(function(){
      heightDetect();
  }); 

  $('.to-bottom').click(function(){
      $('html, body').stop(true,false).animate({scrollTop: $('#second').offset().top}, 1000);
      return false;
  });

  //SLIDER
  $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: true,
      slide: 'div'
  });

	//animation
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  if(!isMobile) {
		$('.landing-rows').find('.col-6.left').addClass('anim-left');
    $('.landing-rows').find('.col-6.right').addClass('anim-right');

    $('.anim-right').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRightSmall',
      offset: 300
    });
    $('.anim-left').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInLeftSmall',
      offset: 300
    });
    $('.anim-up').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUpSmall',
      offset: 300
    });
		$('.anim-up-up').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 300
    });

    (function(){
      var totalHeight = -135;

      $('.path-watch').viewportChecker({
        offset: 300,
        classToAdd: 'passed',
        repeat: true,
        callbackFunction: function(element){
          var passedElem = element.attr("data-path");

          totalHeight = element.offset().top - $("#second").offset().top + 165;
          $('#path-line').css("min-height", totalHeight);

          // var passedElem = element.attr("data-path");
          // var elemHeight = passedElem === "path-1" ? element.height() / 2 : element.height();
          // totalHeight += elemHeight;
          // $('#path-line').css("min-height", totalHeight);
        }
     });
    }());
    
  };

})();
