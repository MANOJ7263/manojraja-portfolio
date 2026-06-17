(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Project Iframe Viewer Modal Logic
  $(document).ready(function () {
    var $modal = $("#projectModal");
    var $iframe = $("#projectModalIframe");
    var $loader = $("#projectModalLoader");
    var $title = $("#projectModalTitle");
    var $externalLink = $("#projectExternalLink");

    // Click handler for portfolio items or button
    $(".open-project-btn, .portfolio-item").on("click", function (e) {
      var $target = $(this).closest(".portfolio-item");
      if (
        $(e.target).closest("a").length &&
        !$(e.target).closest(".open-project-btn").length
      ) {
        return;
      }

      var projectUrl =
        $(this).attr("data-project-url") || $target.attr("data-project-url");
      var projectTitle =
        $(this).attr("data-project-title") ||
        $target.attr("data-project-title");

      if (projectUrl) {
        e.preventDefault();
        e.stopPropagation();

        $title.html(projectTitle + ' <span class="badge">Live View</span>');
        $externalLink.attr("href", projectUrl);
        $loader.removeClass("hidden");
        $iframe.attr("src", projectUrl);
        $modal.addClass("show");

        $("body").css("overflow", "hidden");
      }
    });

    // Iframe load handler to hide the loading spinner
    $iframe.on("load", function () {
      $loader.addClass("hidden");
    });

    // Close modal function
    function closeModal() {
      $modal.removeClass("show");
      $("body").css("overflow", "");
      setTimeout(function () {
        $iframe.attr("src", "about:blank");
      }, 400);
    }

    // Close button click
    $("#projectModalCloseBtn").on("click", function (e) {
      e.preventDefault();
      closeModal();
    });

    // Click overlay backdrop to close
    $("#projectModalOverlay").on("click", closeModal);

    // Escape key to close
    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && $modal.hasClass("show")) {
        closeModal();
      }
    });
  });
})(jQuery);
