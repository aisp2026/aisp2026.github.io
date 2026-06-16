// Mobile menu

const openIcon = document.querySelector('.nav__icon--open');
const closeIcon = document.querySelector('.nav__icon-close');
const mobileMenu = document.querySelector('.nav__mobile-menu');

closeIcon.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

openIcon.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});

// Dynamic JS page

const speakers = [
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description:
      'Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Morbi tincidunt augue interdum velit euismod in. ',
    imgSrc: 'img/person1.png',
  },
  {
    name: 'Mateo Bernasconi',
    role: 'Consectetur adipisicing elit.',
    description:
      'Ut lectus arcu bibendum at varius vel. Nulla aliquet enim tortor at. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Morbi enim nunc faucibus a pellentesque sit amet porttitor. ',
    imgSrc: 'img/person2.png',
  },
  {
    name: 'Kelly Fischer',
    role: 'Dolor sit amet consectetur adipisicing elit.',
    description:
      'Vel eros donec ac odio. Libero nunc consequat interdum varius sit amet mattis. Tincidunt dui ut ornare lectus sit amet est placerat. Lorem dolor sed viverra ipsum nunc.',
    imgSrc: 'img/person3.png',
  },
  {
    name: 'Kevin Koch',
    role: 'Sit amet consectetur adipisicing.',
    description:
      'Sagittis vitae et leo duis ut diam quam. Augue lacus viverra vitae congue eu. Netus et malesuada fames ac. Laoreet non curabitur gravida arcu.',
    imgSrc: 'img/person4.png',
  },
  {
    name: 'Thomas Muller',
    role: 'Ipsum dolor sit amet consectetur.',
    description:
      'Pulvinar proin gravida hendrerit lectus. Ultricies leo integer malesuada nunc vel. Urna molestie at elementum eu facilisis sed odio morbi. Sodales ut etiam sit amet nisl purus.',
    imgSrc: 'img/person5.png',
  },
  {
    name: 'Karl Fitzpatrick',
    role: 'Officia, animi adipisicing elit.',
    description:
      'Id volutpat lacus laoreet non. Nibh nisl condimentum id venenatis a. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Risus in hendrerit gravida rutrum quisque non tellus orci ac.',
    imgSrc: 'img/person6.png',
  },
];

const speakersList = document.querySelector('.speakers__list');

const appendSpeakers = () => {
  for (let i = 0; i < speakers.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="speakers__img-container">
        <span class="speakers__decoration-img"></span>
        <img class="speakers__img" src="${speakers[i].imgSrc}" alt="Speakers image">
      </div>
      <div class="speakers__info">
        <hgroup>
          <h3 class="speakers__name">${speakers[i].name}</h3>
          <h4 class="speakers__role">${speakers[i].role}</h4>
        </hgroup>
        <span class="speakers__decoration speakers__decoration--small"></span>
        <p class="speakers__description">${speakers[i].description}</p>
      </div>`;
    li.classList.add('speakers__card');
    speakersList.appendChild(li);
  }
};

// var images = new Array('img/bod_1528419792937.jpg', 'img/bod_1528419810491.jpg');
// var nextimage = 0;

// const hero_img = document.querySelector('.hero--img');

// function doSlideshow() {
//   if (nextimage >= images.length) { nextimage = 0; }
//   hero_img.style.background = 'url("' + images[nextimage++] + '") 50% 40% no-repeat'
//   hero_img.style.fadeIn =
//   hero_img
//     // .css('background', 'url("' + images[nextimage++] + '") 50% 40% no-repeat')
//     .fadeIn(500, function () {
//       setTimeout(doSlideshow, 1000);
//     });
// }



window.onload = () => {
  // appendSpeakers();
// doSlideshow();

};

/* ===== Floating Widget (right, scroll-follow) — home only, no auto-create ===== */
(function () {
  const GAP = 8;                 // 네비와 위젯 간격
  const RIGHT = '5rem';          // 우측 여백
  const FALLBACK_NAV_H = 60;     // 헤더 없을 때 기본 높이
  const ID = 'floating-widget';

  function getHeaderH() {
    const h = document.querySelector('header');
    return h ? h.offsetHeight : FALLBACK_NAV_H;
  }

  function init() {
    // 홈이 아니면 종료
    if (!document.body.classList.contains('is-home')) return;

    // 위젯이 실제로 있을 때만 동작 (자동 생성 없음)
    const widget = document.getElementById(ID);
    if (!widget) return;

    // 필요한 최소 스타일 (CSS로 빼놨으면 이 부분 생략 가능)
    const s = widget.style;
    s.position = 'absolute';           // 스크롤 따라 이동
    s.right = RIGHT;                   // 우측 정렬
    s.zIndex = '90';
    s.transition = 'top .2s ease-out'; // 부드럽게

    let raf = null;
    const update = () => {
      widget.style.top = (window.scrollY + getHeaderH() + GAP) + 'px';
      raf = null;
    };
    const schedule = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('transitionend', (e) => {
      if (e.target.closest('header')) schedule();
    });
  }

  window.addEventListener('load', init);
})();
