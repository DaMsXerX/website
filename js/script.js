var swiper = new Swiper(".workSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination1",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 1.5,
      spaceBetween: 21,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

var swiper = new Swiper(".workSwiper2", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 1.5,
      spaceBetween: 21,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 120,
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.6,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  },
});

var swiper = new Swiper(".newsSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination6",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 1.2,
      spaceBetween: 21,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1.2,
      spaceBetween: 21,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

var swiper = new Swiper(".mcc-life-Swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination7",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next7",
    prevEl: ".swiper-button-prev7",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 1.2,
      spaceBetween: 22,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1.2,
      spaceBetween: 21,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination9",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
      }
      return (
        '<span class="first">' +
        numberAppend(current) +
        "</span>" +
        " <span>/</span> " +
        "<span>" +
        numberAppend(total) +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next9",
    prevEl: ".swiper-button-prev9",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
  },
});

//modal js

var appendthis = "<div class='overlay'></div>";
$(".popup").click(function (e) {
  e.preventDefault();
  $("body").append(appendthis);
  $(".overlay").fadeTo(500, 0.7);
  $(".popup_box").fadeTo(100, 1).removeClass("boom-out").addClass("boom-in");
  var $body = $(document.body);
  var oldWidth = $body.innerWidth();
  //$body.css("overflow", "hidden");
  //$body.width(oldWidth);
});

//   close the popup box

$(document).on("click", ".close, .overlay", function () {
  $(".popup_box").addClass("boom-out").removeClass("boom-in").fadeTo(100, 0);
  var $body = $(document.body);

  //$body.css("overflow", "auto");
  //$body.width("auto");
  $(".overlay").fadeOut(500, function () {
    $(this).remove();
  });
});

//   keep popup in center
$(window).resize(function () {
  $(".popup_box").css({
    top: ($(window).height() - $(".popup_box").outerHeight(true)) / 2 + 5,
    left: ($(window).width() - $(".popup_box").outerWidth(true)) / 2,
  });
  if ($(this).width() <= 480) {
    $(".popup_box").css({
      top: ($(window).height() - $(".popup_box").outerHeight(true)) / 2 + 5,
      left: ($(window).width() - $(".popup_box").outerWidth(true)) / 2 + 3,
    });
  }
});

$(window).resize();

// contact form submit
jQuery.validator.setDefaults({
  debug: true,
  success: "valid",
});

$("#commentForm").validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    message: {
      required: true,
      minlength: 15,
    },
  },
  submitHandler: function (form) {
    // do other things for a valid form
    console.log("check status new ", form);
    form.submit();
  },
});
var form = document.getElementById("commentForm");

async function handleSubmit(event) {
  event.preventDefault();
  console.log("check status ", $("#commentForm").valid());
  if ($("#commentForm").valid()) {
    var status = document.getElementById("errorMessageModal");
    // var data = new FormData(event.target);
    // console.log(data);
    fetch(event.target.action, {
      method: 'POST',
      body: JSON.stringify({
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        message: document.getElementById('message').value,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          // status.innerHTML = "Thanks for your submission!";
          form.reset();
          $('.close').trigger('click');
          Swal.fire({
            icon: 'success',
            title: 'Thanks',
            text: 'We will connect with you shortly.',
          });
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data['errors']
                .map((error) => error['message'])
                .join(', ');
            } else {
              status.innerHTML =
                'Oops! There was a problem submitting your form';
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = 'Oops! There was a problem submitting your form';
      });
  }
}

form.addEventListener("submit", handleSubmit);

//email auth
async function submit() {
  //validating email on frontend
  let email = document.getElementById("emailNewsLetter").value;
  let errorElement = document.getElementById("error");
  let valid;
  let messages;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    valid = true;
  } else if (email == "" || email == null) {
    valid = false;
    messages = "Email cannot be empty!";
  } else {
    valid = false;
    messages = "Invalid email format!";
  }
  //checking in backend if the email format is correct
  if (valid) {
    const response = await fetch('https://api.mcccapp.in/v1/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    console.log(result);
    if (result.code == 400) {
      messages = result.message + "!";
    } else if (result.code) {
      Swal.fire({
        icon: "info",
        // title: "Oops...",
        text: "You have already subscribed!",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Thanks for Subscribing",
        icon: "success",
      });
    }
  }
  // sending error if not valid
  if (!valid || messages) {
    errorElement.innerText = messages;
  }
}

$(".register-btn").click(function () {
  $(".workshop-form").slideToggle();
});

$(".read-btn").click(function () {
  $(".hide-paragraph, .meet-heart-detail .text-box").slideToggle();
});
$(".read-btn").click(function () {
  var $this = $(this);
  $this.toggleClass("SeeMore2");
  if ($this.hasClass("SeeMore2")) {
    $this.text("Read Less");
  } else {
    $this.text("Read More");
  }
});

const IMAGE_URL_PREFIX = "images/gallery/";
const MIME_TYPE = ".png";
const IMAGE_DISPLAY_TIME = 5000;
const gallery = document.getElementById("gallery");
const gridItems = Array.prototype.slice.call(
  document.getElementsByClassName("flip-inner")
);
const activeImages = [];
const vBirds = [
  "83",
  "Sanya-Malhotra-17",
  "3",
  "banner-img3",
  "teams",
  "Brahmastra_Teaser",
  "brahma",
  "3",
  "banner-img3",
];
const hBirds = [
  "83",
  "Sanya-Malhotra-17",
  "3",
  "banner-img3",
  "workshop-img2",
  "Brahmastra_Teaser",
  "brahma",
  "3",
  "banner-img3",
];
let flipImagesFunc;

initImages = () => {
  const verticalElements = gridItems.filter((gi) =>
    gi.parentElement.classList.contains("vertical")
  );
  const horizontalElements = gridItems.filter((gi) =>
    gi.parentElement.classList.contains("horizontal")
  );

  const vBirdsCopy = [...vBirds];
  var i = 0;
  for (let el of verticalElements) {
    for (let img of el.getElementsByTagName("img")) {
      const bird = getRandomArrayItem(vBirdsCopy);
      console.log("vbird", bird);
      const imageUrl = generateUrl(vBirds[i], true);
      console.log(imageUrl);
      const index = vBirdsCopy.indexOf(bird);
      img.src = imageUrl;
      vBirdsCopy.splice(index, 1);
      activeImages.push(bird);
    }
    i++;
  }

  const hBirdsCopy = [...hBirds];
  var j = 0;
  for (let el of horizontalElements) {
    for (let img of el.getElementsByTagName("img")) {
      const bird = getRandomArrayItem(hBirdsCopy);
      console.log("bird", bird);
      const imageUrl = generateUrl(hBirds[j], false);
      const index = hBirdsCopy.indexOf(bird);
      img.src = imageUrl;
      hBirdsCopy.splice(index, 1);
      activeImages.push(bird);
    }
    j++;
  }

  gallery.style.display = "flex";
};

flipImage = () => {
  // //nn
  // document.getElementById("1").getElementsByClassName("front").value =
  //   vBirds[0];
  // document.getElementById("1").getElementsByClassName("back").value = hBirds[0];
  // let gridItem = getRandomArrayItem(gridItems);

  var imgs;
  if (gridItems.dataset.rotated === "true") {
    gridItems.style.transform = "none";
    gridItems.dataset.rotated = "false";
    imgs = gridItems.getElementsByClassName("back");
  } else {
    gridItems.style.transform = "rotateY(180deg)";
    gridItems.dataset.rotated = "true";
    imgs = gridItems.getElementsByClassName("front");
  }

  const isVertical = gridItems.parentNode.classList.contains("vertical");
  const newBird = getNewBird(isVertical);
  const newUrl = generateUrl(newBird, isVertical);
  const oldUrl = imgs[0].src;
  const oldBird = oldUrl.substring(
    IMAGE_URL_PREFIX.length + 2,
    oldUrl.length - MIME_TYPE.length
  );

  // once flipped change the backface image to a new one, in prep for the next flip
  imgs[0].src = newUrl;
  activeImages[activeImages.indexOf(oldBird)] = newBird;
};

getNewBird = (isVertical) => {
  let images = isVertical ? vBirds : hBirds;
  return getRandomArrayItem(images.filter((i) => !activeImages.includes(i)));
};

generateUrl = (bird, isVertical) => {
  return isVertical
    ? IMAGE_URL_PREFIX.concat("v_", bird, MIME_TYPE)
    : IMAGE_URL_PREFIX.concat("h_", bird, MIME_TYPE);
};

getRandomArrayItem = (array) => {
  // if (document.getElementById("1")) {
  //   console.log("hhh");
  //   if (document.getElementsByClassName("front")) {
  //     console.log(array[vBirds[0]]);
  //     return array[vBirds[0]];
  //   } else if (document.getElementsByClassName("back")) {
  //     return array[hBirds[0]];
  //   }
  // }
  //return [0, 1, 2, 3, 4, 5];
  return array[Math.floor(Math.random() * array.length)];
};

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    window.clearInterval(flipImagesFunc);
  } else {
    flipImagesFunc = window.setInterval(flipImage, IMAGE_DISPLAY_TIME);
  }
});

initImages();
flipImagesFunc = setInterval(flipImage, IMAGE_DISPLAY_TIME);
//implementing year
function func() {
  var date = new Date();
  let year = date.getFullYear();
  console.log(year);
  document.getElementById("copyrightYear").innerHTML = year;
}
const toggle = document.getElementById("togglerButton");
const collapse = document.getElementById("navbarSupportedContent");
$(document).on("click", function toggler(e) {
  // console.log("ddfjj");
  // console.log(toggle);
  toggle.classList.add("collapsed");
  toggle.ariaExpanded = false;
  collapse.classList.remove("show");
});
