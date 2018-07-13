
import lozad from 'lozad';

$(document).ready(function () {
    // alert(window.screen.availWidth + ',' + window.screen.availHeight);

    // Lazy Load library
    lozad('.lozad', {
        load: function (el) {
            el.src = el.dataset.src;
            el.onload = function () {
                el.classList.add('fade')
            }
        }
    }).observe()

    var gradTimer, sideTimer, comTimer;
    $('#fullpage').fullpage({
        anchors: ['mainPage', 'gradPage', 'sidePage', 'comingPage', 'labPage'],
        sectionsColor: ['#DEDEDE', '#DDDDDD', '#202020', '#DEDEDE', '#e8e8e8'],
        controlArrows: false,
        slidesNavigation: true,
        scrollBar: true,
        autoScrolling: false,
        lazyLoading: false,
        // normalScrollElements: '.scrollable-element',
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['Main Page', 'Graduation Projects', 'Side Projects', 'Up Coming', '']
        onLeave: function (index, nextIndex, direction) {
            // if (nextIndex == '0') {
            // }
            if (nextIndex == '1') {
                $('.js--wp-1').removeClass('animated fadeInDown');
                $('#focus_but').attr('checked', true);
                $('.js--wp-1-2').removeClass('animated fadeInDown');
                $('#bc_but').attr('checked', true);
            }
            if (nextIndex == '2') {
                $('.js--wp-2').removeClass('animated fadeInDown');
                $('#side_but').attr('checked', true);
            }
            if (nextIndex == '3') {
                $('.js--wp-3').removeClass('animated fadeInDown');
                $('#com_but').attr('checked', true);
            }
            if (nextIndex == '4') {
                $('.js--wp-4').removeClass('animated pulse');
            }
            // console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " + direction);
        },
        afterLoad: function (anchorLink, index) {
            if (anchorLink == 'gradPage') {
                setTimeout("$('.js--wp-1').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#focus_but').attr('checked',false);", 200);
                setTimeout("$('.js--wp-1-2').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#bc_but').attr('checked',false);", 200);
                // window.clearTimeout(gradTimer);
                // gradTimer = setTimeout(" $('#grad_but').attr('checked',true);", 9000);
            }

            if (anchorLink == 'sidePage') {
                setTimeout("$('.js--wp-2').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#side_but').attr('checked',false);", 200);
                window.clearTimeout(sideTimer);
                sideTimer = setTimeout(" $('#side_but').attr('checked',true);", 9000);
            }

            if (anchorLink == 'comingPage') {
                setTimeout("$('.js--wp-3').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#com_but').attr('checked',false);", 200);
                window.clearTimeout(comTimer);
                comTimer = setTimeout(" $('#com_but').attr('checked',true);", 5000);
            }

            if (anchorLink == 'labPage') {
                $('.js--wp-4').addClass('animated pulse');
            }
            // console.log('===============');
            // console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index);
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);

            if (anchorLink == 'gradPage' && slideIndex == 0) {
                setTimeout("$('.js--wp-1').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#focus_but').attr('checked',false);", 200);
            }

            //first slide of the second section
            if (anchorLink == 'gradPage' && slideIndex == 1) {
                setTimeout("$('.js--wp-1-2').addClass('animated fadeInDown');", 200);
                setTimeout(" $('#bc_but').attr('checked',false);", 200);
            }

            //second slide of the second section (supposing #secondSlide is the
            //anchor for the second slide
            // if (index == 2 && slideIndex == 'secondSlide') {
            //     alert("Second slide loaded");
            // }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            var leavingSlide = $(this);

            //leaving the first slide of the 2nd Section to the right
            if (index == 2 && slideIndex == 0) {
                $('.js--wp-1').removeClass('animated fadeInDown');
                $('#focus_but').attr('checked', true);
                $('.js--wp-1-2').removeClass('animated fadeInDown');
                $('#bc_but').attr('checked', true);
            }

            if (index == 2 && slideIndex == 1) {
                $('.js--wp-1').removeClass('animated fadeInDown');
                $('#focus_but').attr('checked', true);
                $('.js--wp-1-2').removeClass('animated fadeInDown');
                $('#bc_but').attr('checked', true);
            }

            //leaving the 3rd slide of the 2nd Section to the left
            // if (index == 2 && slideIndex == 1 && direction == 'left') {
            //     alert("Going to slide 2! ");
            // }
        }
    });
});

// CSS
require('../../vendors/css/jquery.fullPage.css');
require('../../resources/css/style.css');
