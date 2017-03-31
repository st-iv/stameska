    $(document).ready(function () {
        $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута        href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { 
                $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500); 
            }
            return false; 
        });
    });

    // top

var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});




$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});

  $(window).resize(function() {
    if ($(window).width() < 992 ){
        $backToTop.css('display','none');
    }
});

// TABS TIES
var category = function(cat) {

  $('[data-category]').each(function() {
    var _cat = String( $(this).data('category') );
    
    if( cat === 'null' || cat === _cat){
      $(this).removeClass('hide');
    }else if( cat !== _cat ){
      $(this).addClass('hide');
    };
  });
};

$('a.catalog__item').click(function() {
  var cat = $(this).attr('href');
  
  category( cat );
  
  return false;
});
    //end blueasyTabs

// add class
$(".horizontal-nav li a").click(function(e) {
  e.preventDefault();
  $(".horizontal-nav li a").removeClass('active');
  $(this).addClass('active');
})

// tabmenu

function tabmenu() {
  var $trigger = $('.trigger-nav'),
      $menu = $('.trigger-victim');

  $trigger.click(function() {
    $(this).next($menu).slideToggle();
  });
  $(window).resize(function() {
    if ($(window).width()>992 ){
        $menu.removeAttr('style');
    }
  });
}
tabmenu();



