(function() {
  'use strict';

  // make refresh go to home to avoid glitch
  window.location.replace('#home2');
  document.body.style.overflowY = "visible";
AOS.init();

  var circle = document.querySelector('#circle');
  var main = document.querySelector('#main');
  var h1Main = document.querySelector('#h1Main');
  var landh1 = document.querySelector('.landing-wrap');
  var getColour;
  var section = document.querySelectorAll('.section');
  var num1 = document.querySelector('#num1');
  var getArrows = 2; // placeholder value to prevent error

  expandPt1();
  expandPt2();
  setScreenshotHeight()

// Set heights for scrolling containers and mobile screenshots
function setScreenshotHeight(){
  var screenshot1 = document.querySelector('#screenshot1');
  var screenshotHeight = window.getComputedStyle(screenshot1, null)
    .getPropertyValue("height");
  var screenshotContainer = document.querySelectorAll(
    '.screenshotContainer');
  $('.screenshot-scroll').height(screenshotHeight);
  $('.mobile-img').height(screenshotHeight);
}

  function expandPt1() {
    // Get the current colour to display as back ground
    var getColour = window.getComputedStyle(circle, null)
      .getPropertyValue("background-color");
    circle.classList.remove('animation');
    circle.style.background = getColour;
    circle.classList.remove('circle');
    circle.classList.add('full-screen');
    circle.classList.add('clipy');
    // reveal the first section first
    section[0].classList.remove('shrink');
    $("#main").css("display", "block");
    // Initialize AOS after circle expands
    // AOS.init({disable: 'mobile'});
  }

  // Bring the remaining elements back to normal ::::::::::::::::::::::::::::::
  function expandPt2() {
    setTimeout(function() {
      // set colour so page fades to black
      circle.style.background = '#232428';
      // rezize remaining sections
      section[1].classList.remove('shrink');
      section[2].classList.remove('shrink');
      section[3].classList.remove('shrink');
      section[4].classList.remove('shrink');
      // Hide landing header
      landh1.style.display = 'none';
    }, 1000); // set timeout ends
  }

}()); // iife ends
