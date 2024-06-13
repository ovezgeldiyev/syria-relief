// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
const basket = document.querySelector(".basket");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == basket) {
    basket.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
const basketBtn = document.querySelector(".basketBtn");
const basketBtnClose = document.querySelector(".basket__inner-close");
if (basketBtn) {
  basketBtn.onclick = () => {
    basket.classList.add("active");
    document.body.classList.add("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.add("active");
  };
}
if (basketBtnClose) {
  basketBtnClose.onclick = () => {
    basket.classList.remove("active");
    document.body.classList.remove("active");
  };
}

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      
    }
  });
}
// faq end

// sliders
$(function () {
  $(".projects__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".differ__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});

$(function () {
  $(".involve__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });
});


const donateBtn = document.getElementById("donateBtn");
if (donateBtn) {
  const donateContent = document.getElementById("donateContent");
  donateBtn.onclick = () => {
    donateBtn.classList.toggle("active");
    donateContent.classList.toggle("active");
  };
}


