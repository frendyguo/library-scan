$(document).ready(function() {
  $('.navMobile__menu').click(function() {
    const drawer = $('.drawer');
    if (drawer.hasClass('drawer_open')) {
      $('body').css('overflow', 'initial');
      $('.drawer').removeClass('drawer_open');
    } else {
      $('body').css('overflow', 'hidden');
      $('.drawer').addClass('drawer_open');
    }
  });

  $('#close-navigation-btn').click(function() {
    $('body').css('overflow', 'initial');
    $('.drawer').removeClass('drawer_open');
  });
});