$( document ).ready(function() {
    console.log( "ready!" );
const observer = lozad(); // Initialize lozad.js for lazy loading
observer.observe();
/*-----------------------------------
    Banner Slider
-----------------------------------*/
jQuery('.hardware-text-slider').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplayTimeout: 7000,
  nav:false,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
jQuery('.airport-text-slider').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplayTimeout: 7000,
  nav:false,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
jQuery('.dashboard_slider').owlCarousel({
  loop:true,
  margin:0,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause:true,
  nav:true,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
jQuery('.dashboard_slider2').owlCarousel({
  loop:true,
  margin:0,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause:true,
  nav:true,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
jQuery('.dashboard_slider3').owlCarousel({
  loop:true,
  margin:0,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause:true,
  nav:true,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
jQuery('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    let target = jQuery(e.target).attr("data-bs-target"); // Active tab ka target get karein
    jQuery(target).find('.owl-carousel').each(function(){
        jQuery(this).trigger('refresh.owl.carousel'); // Carousel ko refresh karein
        jQuery(this).trigger('to.owl.carousel', [0, 200]); // Pehli slide pe le jaye
    });
});
var owl = $('.banner_slider').owlCarousel({
    loop: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
    }
}).on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index;
    $('.owl-item').removeClass('active-wow');
    $('.owl-item').eq(currentIndex).addClass('active-wow');
    new WOW().init();
});
$('.banner_text').hover(
    function() {
        owl.trigger('stop.owl.autoplay');
    },
    function() {
        owl.trigger('play.owl.autoplay', [7000]);
    }
);

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 100,
  mobile: true,
  live: true
}).init();
/*-----------------------------------
    Hero Section Effect
  -----------------------------------*/
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".slide__video").css({
    transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
  });
});
    
  // Select the section to observe
  /*-----------------------------------
    Hover Tilt Effect
  -----------------------------------*/
  $(".tilt-effect").tilt({
    maxTilt: 6,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    transition: true,
  });

/*-----------------------------------
    STICKY-HEADER
  -----------------------------------*/
window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
/*-----------------------------------
    SCROLL-TYPING
-----------------------------------*/
// var typed = new Typed('#typed2', {
//     strings: ['[{0 net Cost} + Ai + Data }] = $uccess'],
//     typeSpeed: 40,  // Typing speed (40 ms delay between characters)
//     backSpeed: 10,  // Increased backspacing speed for faster return
//     loop: true,     // Enables looping
//     showCursor: false, // character for cursor
// 	cursorChar: "|"
// });

var elements = document.querySelectorAll('.typed2');
elements.forEach((el, index) => {
    new Typed(el, {
        strings: ["[{0 net Cost} + Ai <sup>2</sup> + Data <sup>3</sup> }] = $uccess <sup>10</sup>","{0 Waste + Intelligence <sup>2</sup> + Analytics <sup>3</sup>} = Competitive €dge <sup>10</sup> ","{(Low Cost + AI <sup>2</sup> ) + Insights <sup>3</sup> } = Growth <sup>10</sup>","[{Optimized Cost + (Smart Tech <sup>2</sup> ) + Dat@ <sup>3</sup>] = £xcellence <sup>10</sup>"],
        typeSpeed: 80,         // Typing speed (40 ms delay between characters)
        typeSpeed: 80,
        backSpeed: 10,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
});

/*-----------------------------------
    MOUSE-CURSOR
  -----------------------------------*/
const cursor = document.getElementById("cursor");
const amount = 20;
const sineDots = Math.floor(amount * 0.3);
const width = 26;
const idleTimeout = 150;
let lastFrame = 0;
let mousePosition = { x: 0, y: 0 };
let dots = [];
let timeoutID;
let idle = false;
let hoverButton;
let hoverTL;

class Dot {
  constructor(index = 0) {
    this.index = index;
    this.anglespeed = 0.05;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - 0.05 * index;
    this.range = width / 2 - (width / 2) * this.scale + 2;
    this.limit = width * 0.75 * this.scale;
    this.element = document.createElement("span");
    TweenMax.set(this.element, { scale: this.scale });
    cursor.appendChild(this.element);
  }

  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
  }

  draw(delta) {
    if (!idle || this.index <= sineDots) {
      TweenMax.set(this.element, { x: this.x, y: this.y });
    } else {
      this.angleX += this.anglespeed;
      this.angleY += this.anglespeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
      TweenMax.set(this.element, { x: this.x, y: this.y });
    }
  }
}

function init() {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  // eslint-disable-next-line no-new
  lastFrame += new Date();
  buildDots();
  render();
}

function startIdleTimer() {
  timeoutID = setTimeout(goInactive, idleTimeout);
  idle = false;
}

function resetIdleTimer() {
  clearTimeout(timeoutID);
  startIdleTimer();
}

function goInactive() {
  idle = true;
  for (let dot of dots) {
    dot.lock();
  }
}

function buildDots() {
  for (let i = 0; i < amount; i++) {
    let dot = new Dot(i);
    dots.push(dot);
  }
}

const onMouseMove = (event) => {
  mousePosition.x = event.clientX - width / 2;
  mousePosition.y = event.clientY - width / 2;
  resetIdleTimer();
};

const onTouchMove = () => {
  mousePosition.x = event.touches[0].clientX - width / 2;
  mousePosition.y = event.touches[0].clientY - width / 2;
  resetIdleTimer();
};

const render = (timestamp) => {
  const delta = timestamp - lastFrame;
  positionCursor(delta);
  lastFrame = timestamp;
  requestAnimationFrame(render);
};

const positionCursor = (delta) => {
  let x = mousePosition.x;
  let y = mousePosition.y;
  dots.forEach((dot, index, dots) => {
    let nextDot = dots[index + 1] || dots[0];
    dot.x = x;
    dot.y = y;
    dot.draw(delta);
    if (!idle || index <= sineDots) {
      const dx = (nextDot.x - dot.x) * 0.35;
      const dy = (nextDot.y - dot.y) * 0.35;
      x += dx;
      y += dy;
    }
  });
};

init();


/*-----------------------------------
        BANNER-SLIDER
  -----------------------------------*/

// Init slick slider + animation
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 7000, // Make the video stay for 8 seconds
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
  prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
  nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});

$('.advantage-slider').slick({
  autoplay: true,
  autoplaySpeed: 7000, // Make the video stay for 8 seconds
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
  prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
  nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});
});

$( document ).ready(function() {
    function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

});

$( document ).ready(function() {
    function revealhead() {
  var reveals = document.querySelectorAll(".revealhead");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealhead);

});
  
  
$( document ).ready(function() {
    function revealleft() {
  var revealsleft = document.querySelectorAll(".revealleft");

  for (var i = 0; i < revealsleft.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsleft[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsleft[i].classList.add("active");
    } else {
      revealsleft[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealleft);

});
  
  
  
$( document ).ready(function() {
  function revealright() {
  var revealsright = document.querySelectorAll(".revealright");

  for (var i = 0; i < revealsright.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsright[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsright[i].classList.add("active");
    } else {
      revealsright[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealright);

});