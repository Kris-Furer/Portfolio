(function() {
  // make refresh go to home automatically opened landing
  window.location.replace('#home2');
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  AOS.init();

  //:::::::::::::::::::::::: Modals ::::::::::::::::::::::::::::::::::::::::

  // Mobile menu::::::::::::::::::::::::::::::::::::::::::::::::::::
  var mobOverlay = document.querySelector('.mob-overlay');
  var mobMenu = document.querySelector('.fa-bars');

  mobMenu.onclick = function() {
    $('.mob-overlay').fadeIn();
  };
  $('.fa-close').click(function() {
    $('.mob-overlay').fadeOut();
  });

  $('.closeModal').click(function() {
    $('.modalContainer').fadeOut();
    $('.modal').fadeOut();
  });
  $('.modalContainer').click(function() {
    $('.modalContainer').fadeOut();
    $('.modal').fadeOut();
  });

  // Contact Modal ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  var contactBtn = document.querySelectorAll('.contact')
  for (var i = 0; i < contactBtn.length; i++) {
    contactBtn[i].onclick = function() {
      $('.contactContainer').css('display', 'block');
      $('.contactModal').css('display', 'flex');
    }
  }
  // close contact with button
  $('.closeContact').click(function() {
    $('.contactModal').fadeOut();
    $('.contactContainer').fadeOut();
  });
  // close contact with modal container
  $('.contactContainer').click(function() {
    $('.contactContainer').fadeOut();
    $('.contactModal').fadeOut();
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $(".fa-chevron-circle-up").css('display', 'block');
  } else {
    $(".fa-chevron-circle-up").fadeOut()
  }
}


}()); // iife ends
