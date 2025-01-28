(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $('.navbar').addClass('sticky-top shadow-sm bg-black');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm bg-black');
        }
    });
    
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


  document.addEventListener("DOMContentLoaded", function () {
    const scrollInner = document.querySelector(".scroll-inner");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let autoScroll;

    // Auto-scroll functionality
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        scrollInner.scrollLeft += 250; // Scroll right
      }, 2000);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    // Start auto-scroll
    startAutoScroll();

    // Pause auto-scroll on hover
    scrollInner.addEventListener("mouseenter", stopAutoScroll);
    scrollInner.addEventListener("mouseleave", startAutoScroll);

    // Prev button functionality
    prevBtn.addEventListener("click", () => {
      scrollInner.scrollLeft -= 250; // Scroll left
      stopAutoScroll(); // Pause auto-scroll on manual action
    });

    // Next button functionality
    nextBtn.addEventListener("click", () => {
      scrollInner.scrollLeft += 250; // Scroll right
      stopAutoScroll(); // Pause auto-scroll on manual action
    });
  });

  

  
  // Text to type out
  const text = "Enjoy Our Delicious Meal";
  const heading = document.getElementById("typing-heading");
  
  let currentIndex = 0;

  // Typing function
  function typeText() {
    // Add the next character to the heading
    heading.innerHTML = text.substring(0, currentIndex + 1);

    // Move to the next character
    currentIndex++;

    // If not finished, call typeText again
    if (currentIndex < text.length) {
      setTimeout(typeText, 150); // Adjust speed (150ms per character)
    }
  }

  // Start typing animation
  typeText();

  

