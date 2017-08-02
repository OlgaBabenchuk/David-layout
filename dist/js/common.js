$(document).ready(function() {


	// time counter settings

    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement1, .spincrement2, .spincrement3, .spincrement5").spincrement({
            	decimalPlaces: 1,      			  // Сколько знаков оставлять после запятой
				decimalPoint: ",",
                duration: 2000
            });
            $(".spincrement4").spincrement({
                duration: 2000
            });
 
            show = false;
        }
    });



/* settings for cutting img  */ 
    var wow = new WOW(
	  {
	    boxClass:     'wow',
	    animateClass: 'animated',
	    offset:       0,
	    mobile:       true,
	    live:         true,
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: true 
	  }
	);
	wow.init();


/* settings for cutting img  */ 
  $(window).on('load', function(){
    $(".img-wrp").each(function(){      
      var containerRatio = $(this).width() / $(this).height();
      var img = new Image();
      img.src = $(this).find('img').attr('src');
      var imgRatio = img.width / img.height;
      if(containerRatio <= imgRatio) {
        $(this).find('img').css({width: 'auto', height: '100%'});
        var margin = (($(this).find('img').width() - $(this).width()) / -2 ) + 'px';
        $(this).find('img').css('margin-left', margin);
      } else {
        $(this).find('img').css({width: '100%', height: 'auto'});
        var margin = (($(this).find('img').height() - $(this).height()) / -2 ) + 'px';
        $(this).find('img').css('margin-top', margin);
      }
    });
  });


/*   toggle sidebar menu   */

	$(".toggle-menu").on("click", function() {
		$(".menu").css({'transform': 'translateX(0%)', 'transition': '0.5s', 'visibility': 'visible'});
		$(".overlay").css({'display': 'block', 'transition': '0.3s'});
		return false;
	});

	$(".toggle-close").on("click", function() {
		$(".menu").css({'transform': 'translateX(150%)', 'transition': '0.5s'});
		$(".overlay").css({'display': 'none', 'transition': '0.3s'});
		return false;
	});

/*------------------------------------------------------------------------
|                     SLIDERS SETTINGS                                    |
-------------------------------------------------------------------------*/

	$('.slider-main').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
	});

});


