(function ($) {
  jQuery(document).ready(function($) {
    scroll();
    hamburger();
    accordian();
    contactForm();
    slider();
    navScroll();
    registerButton();
    testimonialScroller();
    programSwitcher();
    navLinkScrollActive();
    $(window).scroll(function() {
      navScroll();
      registerButton();
      navLinkScrollActive();      
    });
    $(window).resize(function(e) {
      resizeFix();
    });
  });
})(jQuery);

function scroll() {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}

function hamburger() {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('nav ul.navbar').slideToggle('slow');
  });
}

function accordian() {
  var accordion_trigger = $('.accordion-heading.accordionize');

  accordion_trigger.delegate('.accordion-toggle', 'click', function (event) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).addClass('inactive');
    } else {
      accordion_trigger.find('.active').addClass('inactive');
      accordion_trigger.find('.active').removeClass('active');
      $(this).removeClass('inactive');
      $(this).addClass('active');
    }
    event.preventDefault();
  });
}

function contactForm() {
  $("#contact-submit").on('click', function () {
    $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();
    $.ajax({
      type: "POST",
      url: "js/contact.php",
      data: fields,
      dataType: 'json',
      success: function (response) {
        if (response.status) {
          $('#contact-form input').val('');
          $('#contact-form textarea').val('');
        }
        $('#response').empty().html(response.html);
      }
    });
    return false;
  });
}

function slider() {
  var $slider = $('.slide-wrapper');
  var $offset = $slider.offset().left;
  var windowWidth = $(window).width() + $.scrollbarWidth();

  var sliderInterval = setInterval(function() {
    if ($offset * -1 + windowWidth >= $slider.width() - 50) {
      $offset = 0;
      $slider.animate({marginLeft: $offset}, 500);
    } else {
      $offset = $offset - windowWidth;
      $slider.animate({marginLeft: $offset}, 500);
    }
  }, 10000);

  $(window).resize(function(event) {
    clearInterval(sliderInterval);
    $offset = 0;
    $slider.animate({marginLeft: $offset}, 500);
    windowWidth = $(window).width() + $.scrollbarWidth();
    sliderInterval = setInterval(function() {
      if ($offset * -1 + windowWidth >= $slider.width() - 50) {
        $offset = 0;
        $slider.animate({marginLeft: $offset}, 500);
      } else {
        $offset = $offset - windowWidth;
        $slider.animate({marginLeft: $offset}, 500);
      }
    }, 10000);
  });

  $('i.slide-right').on('click', function() {
    // console.log('slide right');
    if ($offset * -1 + windowWidth >= $slider.width() - 50) {
      $offset = 0;
      $slider.animate({marginLeft: $offset}, 500);
    } else {
      $offset = $offset - windowWidth;
      $slider.animate({marginLeft: $offset}, 500);
    }
  });

  $('i.slide-left').on('click', function() {
    // console.log('slide left');
    if ($offset === 0) {
      $offset = (windowWidth) * -2;
      $slider.animate({marginLeft: $offset}, 500);
    } else {
      $offset = $offset + windowWidth;
      $slider.animate({marginLeft: $offset}, 500);
    }
  });
}

function navScroll() {
  var $scrollTop = $(window).scrollTop();
  if ($scrollTop >= 50) {
    $('nav').addClass('scrolled');
  } else {
    $('nav').removeClass('scrolled');
  }
}

function registerButton() {
  var scrollTop = $(window).scrollTop(),
      introTop = $('section#intro').offset().top;
  if (scrollTop >= introTop) {
    $('.register-button').fadeIn('fast');
  } else {
    $('.register-button').fadeOut('fast');
  }
}

function testimonialScroller() {
  var $quote = $('#testimonials .quote');
  var $text = $('#testimonials .quote .quote-text');
  var $author = $('#testimonials .quote .quote-author span');
  setInterval(function() {
    var indexNum = Math.floor(Math.random() * testimonials.length);
    var rand = testimonials[indexNum];
    $quote.fadeOut(function() {
      $(this).fadeIn();
      $text.text(rand.text).fadeIn();
      $author.text(rand.author).fadeIn();
    });
  }, 10000);
}

var testimonials = [
  {
    "text": "I personally feel that YMAA camp is an exceptional value as it provides halal channels of socializing, energizing and enhancing the knowledge of children. I would not hesitate to send my children to YMAA camp again next year.",
    "author": "Abbas"
  },
  {
    "text": "The best thing my child gained at the camp was that he got to interact with other children and adults and learn to be in an Islamic environment The camp offers a unique blend of challenging, enjoyable activities through which children grow. The staff take their jobs seriously and strive to do their best. We feel comfortable knowing our kids are somewhere safe, and fun.",
    "author": "Anonymous"
  },
  {
    "text": "A very well thought out and organized camp covering all areas of YMAA's motto in promoting a healthy mind, body and soul. A lovely and dedicated team of counselors, keep up the great work. Looking forward to more camps!",
    "author": "Anonymous"
  },
  {
    "text": "The camp was very conveniently located right off the 404. Camp counselors are friendly and polite. Kids had a blast each day!",
    "author": "Shams Ahsan"
  },
  {
    "text": "Hani loved his experience at the camp. He enjoyed all the activities. The activities were varied enough to keep his interest, and involve all aspects of learning. What's appreciated even more is that it strengthens the child's attachment to Muslim community, make Muslim friends and increases his religious knowledge, and applies the daily Islamic way of life, which is something that is deeply needed more than anything else these days. In addition to the usual activities of a camp, the involvement and participation in Muslim community, making Muslim friends at his age, and going through an Islamic daily routine including prayers and duas is extremely valuable and influential, especially at his age.",
    "author": "Al Radif Family"
  },
  {
    "text": "My son's experience at Camp was amazing. He enjoyed going there every day for two weeks, made new friends, learned many new academic, social, physical, and Islamic skills/knowledge. The coordinator and counselors were caring, friendly, and so much fun!! I will be sending my son next year and would highly recommend the best camp ever!",
    "author": "Jaffer Family"
  },
  {
    "text": "They made a lot of friends and gained a Lot of knowledge!",
    "author": "Rajabali Family"
  },
  {
    "text": "The fact that she never stopped talking about what she did at camp said it all for me. Loved how much she looked forward to going in the mornings. She loved the new friends she made and enjoyed games such as broken telephone and dodge-ball. I was thrilled to see her learn how to dribble a basketball and understand the game of soccer. Way to go guys you all ROCK!!!!!! Thanks for all the care, support and knowledge you imparted. May Allah bless all of you for always having the children's best interest at heart.",
    "author": "Najarali Family"
  }
];

$.scrollbarWidth = function() {
  var parent, child, width;

  if(width===undefined) {
    parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
    child=parent.children();
    width=child.innerWidth()-child.height(99).innerWidth();
    parent.remove();
  }

 return width;
};

function programSwitcher() {
  $('.button-bar a').on('click', function(event) {
    event.preventDefault();

    var $this = $(this);
    var targetProgram = $this.attr('href');

    $('.button-bar a').removeClass('active');
    $this.addClass('active');

    $('section#programs article').removeClass('active');
    $(targetProgram).addClass('active');
  });
}

function resizeFix() {
  if ($(window).width() > 900) {
    $('nav .navbar').css({'display': 'flex'});
  } else {
    $('nav .navbar').css({'display': 'none'});
  }
}

function navLinkScrollActive() {
  var scrollTop = document.body.scrollTop;

  var sections = document.querySelectorAll('body > section');
  sections.forEach(function(v, i) {
    var navLink = document.querySelector('nav .navbar li a[href="#' + v.getAttribute('id') + '"');
    var sectionOffsetTop = v.offsetTop - document.querySelector('nav').clientHeight;
    if (navLink) {
      if (scrollTop >= sectionOffsetTop) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });

  var activeLinks = document.querySelectorAll('nav .navbar li a.active');
  activeLinks.forEach(function(v, i) {
    if (i+1 !== activeLinks.length) v.classList.remove('active');
  });
}