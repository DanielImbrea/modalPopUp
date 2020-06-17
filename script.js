const btn = document.querySelector(".modal");
let section = document.querySelector(".modalWrapper");
let body = document.querySelector('body');
btn.addEventListener('click', function () {
  section.classList.remove('hide');
});

// section.addEventListener("click", function () {
//   section.classList.add('hide');
// });

body.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    section.classList.add('hide');
  }
})