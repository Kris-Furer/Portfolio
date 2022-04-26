(function() {
  var circle = document.querySelector('#circle');
  var main = document.querySelector('#main');
  var h1Main = document.querySelector('#h1Main');
  var landh1 = document.querySelector('.landing-wrap');
  var getColour;
  var section = document.querySelectorAll('.section');



  pageTransistion();


  function pageTransistion() {
    compressCircle();
    // Hover effect starts:::::::::::::::::::::::::::::::::::
    circle.addEventListener('mouseover', function() {
      expandPt1();
      expandPt2();
      $('#home').removeClass("no-scroll")
      $('html').removeClass("no-scroll")

    });


    // Compress page and before hover ::::::::::::::::::::::::::
    function compressCircle() {
      // Hide inner body so circle is clean
      $("#main").css("display", "none");
      $(".fa-chevron-down").css("display", "none");
      // Shirnk elements before circle expands
      for (var i = 0; i < section.length; i++) {
        section[i].classList.add('shrink');
      }
    }

    // Bring back the body to normal on hover ::::::::::::::::::::::::::::::::
    function expandPt1() {
      // Get the current colour to display as back ground
      var getColour = window.getComputedStyle(circle, null)
        .getPropertyValue("background-color");

      circle.classList.remove('animation');
      circle.classList.remove('circle');
      circle.style.background = getColour;
      circle.classList.add('full-screen');
      circle.classList.add('clipy');
      // reveal the first section first
      section[0].classList.remove('shrink');
      $("#main").css("display", "block");
      $(".fa-chevron-down").css("display", "block");
      AOS.init({disable: 'mobile'});

    }

    // Set mobile and scrolling images to same height as screenshot
    var screenshot1 = document.querySelector('#screenshot1');
    var screenshotHeight = window.getComputedStyle(screenshot1, null)
      .getPropertyValue("height");
    $('.screenshot-scroll').height(screenshotHeight);
    $('.mobile-img').height(screenshotHeight);
    // Bring the remaining elements back to normal ::::::::::::::::::::::::::
    function expandPt2() {
      setTimeout(function() {
        // set colour so page fades to black
        circle.style.background = '#232428';
        // rezize remaining sections
        section[1].classList.remove('shrink');
        section[2].classList.remove('shrink');
        section[3].classList.remove('shrink');
        section[4].classList.remove('shrink');
        section[5].classList.remove('shrink');
        section[6].classList.remove('shrink');
        // Hide landing header

        landh1.style.display = 'none';
      }, 1000); // set timeout ends
    }
  }
}());
