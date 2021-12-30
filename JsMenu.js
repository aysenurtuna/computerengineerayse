//mobilde açılır ekran
$(document).ready(function () {
  $("#menucizgisi").on("click", function () {
    $("#menuacilimi").slideToggle("slow");

  });
});


//lazy loading
$(document).ready(function () {
  $(window).scroll(function () {
    $('.lazy').each(function () {
      if ($(this).offset().top < ($(window).scrollTop() + $(window).height() + 100)) {
        $(this).attr('src', $(this).attr('data-src'));
      }
    });
  })
})

const images = [
  {
    id: 1,
    src: "resimler/galeri1.jpg"
  },
  {
    id: 2,
    src: "resimler/galeri2.jpg"
  },
  {
    id: 3,
    src: "resimler/galeri3.jpg"
  },
  {
    id: 4,
    src: "resimler/galeri4.jpg"
  },
  {
    id: 5,
    src: "resimler/galeri5.jpg"
  },
  {
    id: 6,
    src: "resimler/galeri6.jpg"
  },
]

let currentImg = 0

let prev = document.querySelector(".prev-btn")
let next = document.querySelector(".next-btn")

let prevBottom = document.querySelector(".prev-btn-bottom")
let nextBottom = document.querySelector(".next-btn-bottom")

let imgSpace = document.querySelector(".galeri")

window.addEventListener("DOMContentLoaded", function () {
  showImg(currentImg);
})

function showImg(currentImg) {
  imgSpace.src = images[currentImg].src
}

prev.addEventListener('click', function () {
  currentImg--;
  if (currentImg < 0) {
    currentImg = images.length - 1
  }
  showImg(currentImg);
})

next.addEventListener('click', function () {
  currentImg++
  if (currentImg == images.length) {
    currentImg = 0
  }
  showImg(currentImg)
})

prevBottom.addEventListener('click', function () {
  currentImg--
  if (currentImg < 0) {
    currentImg = images.length - 1
  }
  showImg(currentImg)
})

nextBottom.addEventListener('click', function () {
  currentImg++
  if (currentImg == images.length) {
    currentImg = 0
  }
  showImg(currentImg)
})






