//Mobile menu
$('.menu-top__btn').click(function() {
  $('.menu-top__list').toggleClass('menu-top__list--show');
  $('.menu-top').toggleClass('menu-top--opened');
});

$('.menu__btn').click(function() {
  $('.menu__list').slideToggle();
  $('.menu').toggleClass('menu--opened');
});

$('.footer__btn').click(function() {
  $(this).next().slideToggle();
})

//City choice
$('.header__btn').click(function() {
  $('.header__list').slideToggle();
})

//Mobile sidebar
if (window.innerWidth < 1022) {
  $('.sidebar__title').click(function() {
    $('.sidebar__list').slideToggle();
  })
}
