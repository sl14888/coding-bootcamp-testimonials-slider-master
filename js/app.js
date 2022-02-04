const photoContent = document.querySelectorAll('.bootcamp__img');
const textContent = document.querySelectorAll('.bootcamp__text');
const switchBtn = document.querySelectorAll('#switchBtn');
for (var i = 0; i < switchBtn.length; i++) {
  (function (i) {
    var btn = switchBtn[i];
    btn.onclick = function () {
      for (let j = 0; j < (photoContent.length && textContent.length); j++) {
        photoContent[j].classList.add('bootcamp__img--active');
        textContent[j].classList.add('bootcamp__text--active');
        if (
          photoContent[j].classList.contains('bootcamp__img--active') &&
          textContent[j].classList.contains('bootcamp__text--active')
        ) {
          photoContent[j].classList.remove('bootcamp__img--active');
          textContent[j].classList.remove('bootcamp__text--active');
        }
      }
      photoContent[i].classList.add('bootcamp__img--active');
      textContent[i].classList.add('bootcamp__text--active');
    };
  })(i);
}
