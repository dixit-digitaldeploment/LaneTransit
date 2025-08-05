jQuery(document).ready(function () {
  jQuery(".center-grp .wp-block-table").each(function () {
    jQuery(this).wrap('<div class="table-wrapper"></div>');
  });
  const $carousel = jQuery("#demo");

  // Handle click on any dot (in any caption)
  $carousel.find(".carousel-indicators li").on("click", function () {
    const index = jQuery(this).data("slide-to");
    $carousel.carousel(index);
  });

  // On slide change, update dots in all captions
  $carousel.on("slide.bs.carousel", function (e) {
    $carousel.find(".carousel-indicators li").removeClass("active");
    $carousel
      .find(`.carousel-indicators li[data-slide-to="${e.to}"]`)
      .addClass("active");
  });
  jQuery(".owl-general .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    margin: 10,
    nav: true,
    autoWidth: false,
    items: 1,
    navText: [
      '<img src="/wp-content/themes/planeteriaweb/img/arrow_forward.svg">',
      '<img src="/wp-content/themes/planeteriaweb/img/arrow_forward.svg">',
    ],
    navContainer: ".owl-general .custom-nav",
    /*responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1,
			    stagePadding: 200
        }
    }*/
  });

  // for thumb slider
  // jQuery(document).ready(function () {
  //   var bigimage = jQuery(".thumb #big");
  //   var thumbs = jQuery(".thumb  #thumbs");
  //   //var totalslides = 10;
  //   var syncedSecondary = true;

  //   bigimage
  //     .owlCarousel({
  //       // loop: true,
  //       dots: false,
  //       autoplay: true,
  //       margin: 10,
  //       nav: false,
  //       autoWidth: false,
  //       items: 1,
  //       // navText: [
  //       //   '<img src="/wp-content/themes/planeteriaweb/img/arrow_forward.svg">',
  //       //   '<img src="/wp-content/themes/planeteriaweb/img/arrow_forward.svg">',
  //       // ],
  //       // navContainer: ".owl-general .custom-nav",
  //     })
  //     .on("changed.owl.carousel", syncPosition);

  //   thumbs
  //     .on("initialized.owl.carousel", function () {
  //       thumbs.find(".owl-item").eq(0).addClass("current");
  //     })
  //     .owlCarousel({
  //       items: 5,
  //       dots: true,
  //       nav: true,
  //       margin: 4,
  //       navText: [
  //         '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
  //         '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
  //       ],
  //       smartSpeed: 200,
  //       slideSpeed: 500,
  //       slideBy: 5,
  //       responsiveRefreshRate: 100,
  //     })
  //     .on("changed.owl.carousel", syncPosition2);

  //   function syncPosition(el) {
  //     //if loop is set to false, then you have to uncomment the next line
  //     //var current = el.item.index;

  //     //to disable loop, comment this block
  //     var count = el.item.count - 1;
  //     var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

  //     if (current < 0) {
  //       current = count;
  //     }
  //     if (current > count) {
  //       current = 0;
  //     }
  //     //to this
  //     thumbs
  //       .find(".owl-item")
  //       .removeClass("current")
  //       .eq(current)
  //       .addClass("current");
  //     var onscreen = thumbs.find(".owl-item.active").length - 1;
  //     var start = thumbs.find(".owl-item.active").first().index();
  //     var end = thumbs.find(".owl-item.active").last().index();

  //     if (current > end) {
  //       thumbs.data("owl.carousel").to(current, 100, true);
  //     }
  //     if (current < start) {
  //       thumbs.data("owl.carousel").to(current - onscreen, 100, true);
  //     }
  //   }

  //   function syncPosition2(el) {
  //     if (syncedSecondary) {
  //       var number = el.item.index;
  //       bigimage.data("owl.carousel").to(number, 100, true);
  //     }
  //   }

  //   thumbs.on("click", ".owl-item", function (e) {
  //     e.preventDefault();
  //     var number = jQuery(this).index();
  //     bigimage.data("owl.carousel").to(number, 300, true);
  //   });
  // });

  const mainSwiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 5, //スライドの枚数と同じ値を指定 
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
    on: {
      slideChange: function () {
        const current = this.realIndex + 1;
        const total = this.slides.length; // Remove duplicate slides created by loop
        document.getElementById(
          "thumb-counter"
        ).innerText = `${current} / ${total}`;
      },
    },
  });
  const thumbsSwiper = new Swiper(".thumb-slider", {
    slidesPerView: "5",
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  mainSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = mainSwiper;

  // Function to activate the tab based on URL fragment
  var hash = window.location.hash;
  if (hash) {
    jQuery('.nav-link[href="' + hash + '"]').tab("show");
  }

  // Update URL when tab is clicked
  jQuery('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    history.pushState(null, null, e.target.hash);
  });

  //Navbar
  if (jQuery(window).width() < 1200) {
    // jQuery(
    //   ".navbar-nav  > li.menu-item-has-children, .navbar-nav  > li.megamenu_item   "
    // ).append('<div class="plusMinus"></div>');
    // jQuery(
    //   ".navbar-nav  > li.menu-item-has-children  > .plusMinus , .navbar-nav  > li.megamenu_item  > .plusMinus"
    // ).click(function () {
    //   //jQuery(".show-mobile").slideToggle('fast');
    //   //jQuery(this).parent().siblings('li').find('ul.sub-menu').slideUp("fast");
    //   //jQuery(this).parent().siblings('li').find('.plus-minus').removeClass("minusIcon");
    //   jQuery(this)
    //     .parent()
    //     .find(".dropdown-menu ,.megamenu_drop,.megamenu")
    //     .slideToggle("fast");
    //   jQuery(this).parent().toggleClass("activeBlue");
    //   jQuery(this).toggleClass("minsicon");
    // });
    // //jQuery(".select_language ").insertBefore('.navbar-toggler  ');
    // // jQuery(".soc_nav_wrap ").insertAfter('.nav_bottom');
    // // jQuery(".social_media ").insertAfter('.nav_bottom  ');
    // jQuery(".megamenu_drop  li.menu-item-has-children  ").append(
    //   '<div class="pls_minus"></div>'
    // );

    // jQuery(".megamenu_drop  li.menu-item-has-children  .pls_minus").click(
    //   function () {
    //     jQuery(this).parent().find(".sub-menu").slideToggle("fast");
    //     jQuery(this).parent().toggleClass("active-item");
    //     jQuery(this).toggleClass("minus-info");
    //   }
    // );
    jQuery(".wp-block-advgb-table").each(function () {
      jQuery(this).wrap('<div class="table-wrap"></div>');
    });
    jQuery(".wp-block-group > table").wrap('<div class="table-wrapper"></div>');
  }
  /*if (jQuery(window).width() < 992 ) {
           jQuery('.navbar-nav  > li.megamenu_item   ').append('<div class="plusMinus"></div>');
           jQuery(".navbar-nav  > li.megamenu_item   > .plusMinus").click( function () {
           jQuery(this).parent().find('.megamenu').slideToggle("fast");
           jQuery(this).parent().toggleClass('activeBlue');
           jQuery(this).toggleClass("minsicon");
           });
           }
           */
  jQuery(".navbar-toggler").on("click", function () {
    jQuery(this).toggleClass("active");
    jQuery(".main_header").toggleClass("headerActive");
  });
  // jQuery(".dropdown-menu  > li.menu-item-has-children").append(
  //   '<div class="plus-minus"></div>'
  // );
  // jQuery(".dropdown-menu   > li.menu-item-has-children  > .plus-minus").click(
  //   function () {
  //     jQuery(this).parent().find(" > .mega-submenu").slideToggle("fast");
  //     jQuery(this)
  //       .parent()
  //       .siblings("li")
  //       .find(" > ul.mega-submenu")
  //       .slideUp("fast");
  //     jQuery(this)
  //       .parent()
  //       .siblings("li")
  //       .find(".plus-minus")
  //       .removeClass("minus-icon");
  //     jQuery(this).toggleClass("minus-icon");
  //   }
  // );

  // jQuery(".mega-submenu  > li.menu-item-has-children").append(
  //   '<div class="plus-minus"></div>'
  // );
  // jQuery(".mega-submenu   > li.menu-item-has-children  > .plus-minus").click(
  //   function () {
  //     jQuery(this).parent().find(">.mega-submenu").slideToggle("fast");
  //     jQuery(this)
  //       .parent()
  //       .siblings("li")
  //       .find("> ul.mega-submenu")
  //       .slideUp("fast");
  //     jQuery(this)
  //       .parent()
  //       .siblings("li")
  //       .find(".plus-minus")
  //       .removeClass("minus-icon");
  //     jQuery(this).toggleClass("minus-icon");
  //   }
  // );
  jQuery(".text_card_block .btn_sm  ")
    .parents(".img_text_card_col")
    .find(".text-img-wrap")
    .addClass("has-button ");

  jQuery(".advgb-accordion-body").each(function () {
    jQuery(this).wrapInner('<div class="accordion-content"></div>');
  });
  /*
                     jQuery('.main_content > *').wrapAll('<div class="main-wrap"></div>');*/
  if (window.location.hash) {
    var target = jQuery(window.location.hash); // Get the element based on the hash
    if (target.length) {
      // Check if the element exists
      var offset = jQuery(".advgb-tabs-panel").outerHeight() + 30; // Adjust the offset
      jQuery("html, body").animate(
        {
          scrollTop: target.offset().top - offset, // Scroll to the element
        },
        1000
      );
    }
  }
  jQuery(".rel_forms").parent(".col_right").addClass("has_forms ");
  jQuery(".alerticon").parent(".rtTitle").addClass("p-left ");
  jQuery('a[href$=".pdf"]').each(function () {
    // Open the PDF link in a new window
    jQuery(this).attr("target", "_blank");
  });
  jQuery(".carousel-inner").each(function () {
    if (jQuery(this).children("div").length === 1)
      jQuery(this)
        .siblings(
          ".carousel-indicators, .carousel-control-prev, .carousel-control-next"
        )
        .hide();
  });
  jQuery(".img_block .img_block_descr").each(function () {
    // Check if this div contains a p tag
    if (jQuery(this).find("p").length === 0) {
      // If no p tag is found, add the class to the closest div
      jQuery(this).closest(".img_block").addClass("no-p-tag");
    }
  });
  jQuery(".main_wrapper").attr("id", "page_content");
  jQuery(".links li .expand_det").matchHeight({
    byRow: true,
    property: "height",
    target: null,
    remove: false,
  });

  jQuery(".img_text_card_col .text_card_block ").matchHeight({
    byRow: true,
    property: "height",
    target: null,
    remove: false,
  });
  jQuery(".advgb-accordion-item .advgb-accordion-body").css("border", "0px");

  //Translate using keyboard
  setTimeout(function () {
    let $translateButton = jQuery(".gt_selected");
    let $translateMenu = jQuery(".gt_option");

    if ($translateButton.length && $translateMenu.length) {
      $translateButton.on("click", function () {
        setTimeout(function () {
          let $iframe = jQuery(".gt_option");
          if ($iframe.length) {
            $iframe.attr("tabindex", "-1").focus();
          }
        }, 500);
      });
      jQuery(document).on("keydown", function (event) {
        if (event.key === "Escape") {
          let $iframe = jQuery(".gt_option");
          if ($iframe.length) {
            $iframe.hide();
            $translateButton.focus();
          }
        }
      });
    }
  }, 2000);
});

jQuery(window).on("resize", function () {
  /*
   if (jQuery(window).width() < 1200) {
      jQuery(".select_language ").insertBefore('.navbar-toggler  ');
      jQuery(".soc_nav_wrap ").insertAfter('.nav_bottom');
   }
   if (jQuery(window).width() > 1200) {
      jQuery(".select_language ").insertBefore('.top_search  ');
      jQuery(".soc_nav_wrap ").insertBefore('.select_language');
   }*/
});

//Url in window target
(function ($, window) {
  var adjustAnchor = function () {
    var $anchor = jQuery(":target"),
      fixedElementHeight = 150;

    if ($anchor.length > 0) {
      jQuery("html, body")
        .stop()
        .animate(
          {
            scrollTop: $anchor.offset().top - fixedElementHeight,
          },
          200
        );
      window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
    }
  };

  jQuery(window).on("hashchange load", function () {
    adjustAnchor();
  });
})(jQuery, window);

//Header shrink on scroll
jQuery(document).on("scroll ", function () {
  if (jQuery(document).scrollTop() > 0) {
    jQuery(".main_header ").addClass("shrink ");
  } else {
    jQuery(".main_header ").removeClass("shrink ");
  }
});

//main accordion

(function ($) {
  jQuery(".accmain .acctitle").click(function (j) {
    var dropDown = jQuery(this).closest(".acccard").find(".accpanel");
    jQuery(this).closest(".accmain").find(".accpanel").not(dropDown).slideUp();
    if (jQuery(this).hasClass("active")) {
      jQuery(this).removeClass("active");
    } else {
      jQuery(this)
        .closest(".accmain")
        .find(".acctitle.active")
        .removeClass("active");
      jQuery(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);
(function ($) {
  /* jQuery('.accordion_event > li:eq(0) .acco_title').addClass('active').next().slideDown();*/

  jQuery(".acc__main .acc__title").on("click keydown", function (event) {
    if (event.type === "click" || event.key === "Enter" || event.key === " ") {
      var dropDown = jQuery(this).closest(".acc__card").find(".acc__panel");
      var parentAccordion = jQuery(this).closest(".acc__main");

      parentAccordion.find(".acc__panel").not(dropDown).slideUp();
      parentAccordion
        .find(".acc__title.active")
        .not(this)
        .removeClass("active");

      if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
      } else {
        jQuery(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      event.preventDefault();
    }
  });
})(jQuery);
jQuery(function () {
  jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(window).on("load", function () {
  jQuery(".wp-block-image.alignleft,  .wp-block-image.alignright").wrap(
    '<div class="left_right_wraper"></div>'
  );
});

function checkOverflow() {
  jQuery(".advgb-tabs-wrapper").each(function () {
    var $tabs = jQuery(this).find(".advgb-tabs-panel");
    if ($tabs[0].scrollWidth > $tabs[0].clientWidth) {
      jQuery(this).addClass("overflowing");
    } else {
      jQuery(this).removeClass("overflowing");
    }
  });
}

// Initial check
checkOverflow();

// Check on window resize
jQuery(window).on("resize", function () {
  checkOverflow();
});

function checkOverflow1() {
  jQuery(".kt-tabs-wrap").each(function () {
    var $tabs1 = jQuery(this).find(".kt-tabs-title-list");
    if ($tabs1[0].scrollWidth > $tabs1[0].clientWidth) {
      jQuery(this).addClass("overflowing");
    } else {
      jQuery(this).removeClass("overflowing");
    }
  });
}

// Initial check
checkOverflow1();

// Check on window resize
jQuery(window).on("resize", function () {
  checkOverflow1();
});

function setHeroHeight() {
  var headerHeight = jQuery("header").outerHeight();
  var alertbar = jQuery(".alert-area").is(":visible")
    ? jQuery(".alert-area").outerHeight()
    : 0;
  jQuery(".main_wrapper, .main_banner").css("padding-top", headerHeight + "px");
  if (jQuery("#wpadminbar").length) {
    jQuery(".alert-area").css("top", headerHeight + 30 + "px");
    jQuery(".kt-tabs-title-list").css(
      "top",
      headerHeight + alertbar + 30 + "px"
    );
  } else {
    jQuery(".alert-area").css("top", headerHeight + "px");
    jQuery(".kt-tabs-title-list").css("top", headerHeight + alertbar + "px");
  }
}

// Initial run
// setHeroHeight();

// Observe header size changes
// const header = document.querySelector("header");

// if (header && "ResizeObserver" in window) {
//   const resizeObserver = new ResizeObserver(() => {
//     setHeroHeight();
//   });
//   resizeObserver.observe(header);
// }

jQuery(document).ready(function () {
  jQuery(".swap").click(function (e) {
    e.preventDefault();
    let fromVal = jQuery("#fromInput").val();
    let toVal = jQuery("#toInput").val();
    jQuery("#fromInput").val(toVal);
    jQuery("#toInput").val(fromVal);
  });
});

// for header megamenu desktop
if (jQuery(window).width() >= 1200) {
  jQuery(document).ready(function () {
    // Handle click on parent menu
    jQuery(".menu-item-has-children > .nav-link").on("click", function (e) {
      e.preventDefault(); // prevent default anchor behavior

      var $parentItem = jQuery(this).parent(); // get .nav-item
      var $dropdown = $parentItem.find(".megamenu").first();

      // Close all other dropdowns
      jQuery(".menu-item-has-children")
        .not($parentItem)
        .removeClass("active")
        .find(".megamenu")
        .slideUp(200);

      // Toggle current one
      $parentItem.toggleClass("active");
      $dropdown.stop(true, true).slideToggle(200);
    });

    // Optional: Click outside to close
    jQuery(document).on("click", function (e) {
      if (!jQuery(e.target).closest(".menu-item-has-children").length) {
        jQuery(".menu-item-has-children").removeClass("active");
        jQuery(".megamenu").slideUp(200);
      }
    });
  });
}
// mega menu mobile
if (jQuery(window).width() < 1200) {
  jQuery(document).ready(function ($) {
    // Main megamenu open
    jQuery(".menu-item-has-children > a").on("click", function (e) {
      e.preventDefault();

      const $trigger = jQuery(this);
      const $megamenu = $trigger.next(".megamenu");
      const $wrapper = $megamenu.children(".megamenuWrapper");

      // Add back button only once
      if ($wrapper.children(".mega-menu-item.back-button").length === 0) {
        $wrapper.prepend(
          '<div class="mega-menu-item back-button"><a class="back" href="#">' +
            $trigger.text() +
            "</a></div>"
        );

        // Back from main megamenu
        $wrapper.find(".back").on("click", function (e) {
          e.preventDefault();
          $megamenu.hide();
        });
      }

      $megamenu.show();
    });

    // Nested submenu (megasubmenu2) open
    jQuery(".megasubmenu .menu-item-has-children > a").on("click", function (
      e
    ) {
      e.preventDefault();

      const $trigger = jQuery(this);
      const $submenu = $trigger.next(".megasubmenu2");

      // Add back button only once
      if ($submenu.children(".back-button").length === 0) {
        $submenu.prepend(
          '<div class="nav-item back-button"><a class="back nav-item" href="#">' +
            $trigger.text() +
            "</a></div>"
        );

        // Back from nested submenu
        $submenu.find(".back").on("click", function (e) {
          e.preventDefault();
          jQuery(this).closest(".megasubmenu2").hide();
        });
      }

      $submenu.show();
    });
  });
}

// from multiselect
jQuery(document).ready(function () {
  jQuery(".custom-multiselect").each(function () {
    const $container = jQuery(this);
    const $dropdownButton = $container.find(".dropdown-toggle");
    const $dropdownMenu = $container.find(".dropdown-menu");
    const $checkboxes = $dropdownMenu.find('input[type="checkbox"]');
    const $selectedItems = $container.find(".selected-items");

    // Prevent dropdown from closing when clicking inside
    $dropdownMenu.on("click", function (e) {
      e.stopPropagation();
    });

    // Toggle dropdown visibility
    $dropdownButton.on("click", function (e) {
      e.stopPropagation(); // Prevent the click event from propagating to the document
      $dropdownMenu.toggleClass("show");
    });

    // Close dropdown when clicking outside
    jQuery(document).on("click", function () {
      $dropdownMenu.removeClass("show");
    });

    // Update selected items and button label
    function updateSelectedItems() {
      const selectedOptions = [];
      $selectedItems.empty();

      $checkboxes.each(function () {
        if (jQuery(this).is(":checked")) {
          const value = jQuery(this).val();
          console.log(jQuery(this));
          const name = jQuery(this).attr("name");
          selectedOptions.push(name);

          const $item = jQuery(`
                  <span class="route-item r-${value}">
                ${name}
                      <span class="remove" data-value="${value}">✕</span>
                  </span>
                  `);
          $selectedItems.append($item);
        }
      });

      // Update button label
      if (selectedOptions.length === 0) {
        // $dropdownButton.text();
      } else if (selectedOptions.length === 1) {
        $dropdownButton.children(".selected-labels").text(selectedOptions[0]);
      } else {
        $dropdownButton.children(".selected-labels").text(`${selectedOptions}`);
      }
    }

    // Handle checkbox change
    $checkboxes.change(updateSelectedItems);

    // Remove selected item
    $selectedItems.on("click", ".remove", function () {
      const value = jQuery(this).data("value");
      $checkboxes.filter(`[value="${value}"]`).prop("checked", false);
      updateSelectedItems();
    });

    // Initialize selected items on page load
    updateSelectedItems();
  });
});
