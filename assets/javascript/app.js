
  $(document).ready(function(){


    // Full height images toggle
    $(".js-full-height").click(function( event ) {
      $('body').toggleClass('full-height');
    });

    // Open all scenarios
    $(".js-open-all").click(function( event ) {
      $('details').attr('open', true);
      $(".js-close-all").show();
      $(this).hide();
    });

    // Close all scenarios
    $(".js-close-all").click(function( event ) {
      $('details').attr('open', false);
      $(".js-open-all").show();
      $(this).hide();
    });

    // Opens full-screen view of current screen
    $(".js-open-screen").click(function( event ) {
      var screen = $(this).parents('.screen')
      openScreen(screen);
    });

    // Go to next screen when in full-screen view
    $(".js-next-screen").click(function ( event ) {
      var screen = $(this).parents('.screen');

      if(screen.next().length){
        openScreen(screen.next());
      } else {
        closeScreen(screen);
      }

    });

    // Go to previous screen when in full-screen view
    $(".js-prev-screen").click(function ( event ) {
      var screen = $(this).parents('.screen');

      if(screen.prev().length){
        openScreen(screen.prev());
      } else {
        closeScreen(screen);
      }
    });

    // Handle Keyboard
    $(document).keydown(function(event){
      // Find the currently zoomed screen
      var screen = $('.zoomed-in');
      switch (event.which) {
        case 13: event.preventDefault(); break;
        case 39: openScreen(screen.next()); break; // Right
        case 37: openScreen(screen.prev()); break; // Left
        case 27: closeScreen(screen); break;
      }
    });


    // Close full-screen view
    $(".js-close-screen").click(function( event ) {
      var screen = $(this).parents('.screen');
      closeScreen(screen);
    });

    // Slider
    $("#slider").change(function() {
      updateSlider(this.value);
    });

    // Opens a screen in full-screen view
    function openScreen(screen){

      $('.zoomed-in').removeClass('zoomed-in');

      screen.addClass('zoomed-in');
      // Stop rest of page from scrolling when scrolling the popup
      if ($(document).height() > $(window).height()) {
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('noscroll').css('top',-scrollTop);
      }

    };

    // Closes a screen in full-screen view
    function closeScreen(screen){

      screen.removeClass('zoomed-in');

      // Re-enable scrolling of rest of page
      var scrollTop = parseInt($('html').css('top'));
      $('html').removeClass('noscroll');
      $('html,body').scrollTop(-scrollTop);

    };

    // Zoom slider
    function updateSlider(slideAmount) {

      $('.image').css('font-size', slideAmount+"%");

      // show notes if zoom is over 300%
      if (slideAmount > 300) {
        $('.note').addClass('visible');
      } else if (slideAmount <= 300) {
        $('.note').removeClass('visible');
      }
    }

  });

  Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
  });

  var template = document.getElementById('template').innerText,
      hb_compiled = Handlebars.compile(template);



  function applyData(data){
    document.getElementById('content').innerHTML = Handlebars.compile(template)(data);
  }

  applyData(data);
