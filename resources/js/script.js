$( document ).ready(function() {
    $('body').scrollspy({ target: '#main-nav', offset: 130 })

    // $(window).on('activate.bs.scrollspy', function (e,obj) {
    //   console.log(obj.relatedTarget);
    // });

    var underFullpage = new fullpage('#fullpage', {
      anchors: ['underPage', 'gradPage', 'phdPage'],
      sectionsColor: ['#f8f8f8', '#ffffff', '#f8f8f8'],
      autoScrolling: false,
      css3: true,
      fitToSection: false
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });

    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: ($(hash).offset().top - 80)
          }, 1000, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        }
      });

    var converter = new showdown.Converter()
    $.get( "home.md", function( data ) {
        text      = data,
        html      = converter.makeHtml(text);
        $("#targetDiv").html(html);
      });
});