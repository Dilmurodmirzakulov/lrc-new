$(document).ready(function () {
  $(".wu-comments-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black"/></svg></button>',
      responsive: [
        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
  });

  let t = $("#back-top");
  $(window).on("scroll", function () {
    ($scrollTop = $(window).scrollTop()),
      (t = $("#back-top")),
      $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

    $scrollTop > 0
      ? $(".es-navbar").addClass("es-navbar-fixed")   
      : $(".es-navbar").removeClass("es-navbar-fixed");
  });
  ($htmlBody = $("html, body")),
    t.length &&
      t.on("click", function (t) {
        $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
      });
  $("input[data-plugin='phone-mask']").inputmask({
    mask: "+\\9\\9\\8 99 999-99-99",
  });
  $("input[data-plugin='birthday-mask']").inputmask({ mask: "99.99.9999" });
});
