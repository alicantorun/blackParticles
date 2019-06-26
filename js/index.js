jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop(),
      navbar = $(".navbar");
    if (scrollPos > 150) {
      navbar.addClass("navbar-alternative");
    } else {
      navbar.removeClass("navbar-alternative");
    }
  });
});

AOS.init();

Splitting();

$('.fa-arrow-circle-down').hover(
  function () {
    $(this).addClass('animated pulse')
  },
  function () {
    $(this).removeClass('animated pulse')
  }
)

$('.fa-arrow-circle-up').hover(
  function () {
    $(this).addClass('animated pulse')
  },
  function () {
    $(this).removeClass('animated pulse')
  }
)

var $tlt1 = $('.tlt1').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt1.on('mouseenter', function () {
  $tlt1.textillate('start');
});

var $tlt2 = $('.tlt2').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt2.on('mouseenter', function () {
  $tlt2.textillate('start');
});

var $tlt3 = $('.tlt3').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt3.on('mouseenter', function () {
  $tlt3.textillate('start');
});

var $tlt4 = $('.tlt4').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt4.on('mouseenter', function () {
  $tlt4.textillate('start');
});

var $tlt5 = $('.tlt5').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt5.on('mouseenter', function () {
  $tlt5.textillate('start');
});

var $tlt6 = $('.tlt6').textillate({
  autoStart: false,
  in: {
    effect: 'tada'
  }
});
$tlt6.on('mouseenter', function () {
  $tlt6.textillate('start');
});