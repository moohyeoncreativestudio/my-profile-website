(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------
   * 1. 메뉴 클릭 시 해당 영역으로 부드럽게 이동
   * ------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      // 섹션의 scroll-margin-top 덕분에 상단 고정 헤더에 가려지지 않음
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', targetId);
      setActiveNav(targetId.slice(1));
    });
  });

  /* 실제 헤더 높이를 섹션 이동 기준(scroll-margin-top)에 반영
     — 글자 수가 바뀌어 헤더 높이가 달라져도 제목이 가려지지 않음 */
  var topbar = document.querySelector('.topbar');
  function syncHeaderHeight() {
    if (topbar) document.documentElement.style.setProperty('--header-h', topbar.offsetHeight + 'px');
  }
  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);

  /* 현재 보고 있는 섹션에 맞춰 메뉴 강조 */
  var navLinks = document.querySelectorAll('[data-nav]');
  var sections = Array.prototype.slice.call(document.querySelectorAll('#home, #about, #projects, #contact'));

  function setActiveNav(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute('data-nav') === id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActiveOnScroll() {
    // 화면 위쪽 40% 지점을 지난 마지막 섹션을 현재 섹션으로 판단
    var probe = window.innerHeight * 0.4;
    var current = sections[0].id;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= probe) current = section.id;
    });
    // 페이지 맨 아래에 닿으면 마지막 섹션 강조
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }
    setActiveNav(current);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateActiveOnScroll();
      ticking = false;
    });
  }, { passive: true });
  updateActiveOnScroll();

  /* ---------------------------------------------
   * 2. 프로젝트 캐러셀: 인디케이터 + 다음 버튼
   *    (카드 자체는 <a> 링크라 클릭 시 관련 링크로 이동)
   * ------------------------------------------- */
  var carousel = document.getElementById('carousel');
  var nextBtn = document.getElementById('carousel-next');
  var dots = document.querySelectorAll('.carousel-dot');

  if (carousel) {
    var cards = carousel.querySelectorAll('.project-card');

    var currentIndex = function () {
      var center = carousel.scrollLeft + carousel.clientWidth / 2;
      var best = 0;
      var bestDist = Infinity;
      cards.forEach(function (card, i) {
        var cardCenter = card.offsetLeft + card.offsetWidth / 2;
        var dist = Math.abs(cardCenter - center);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      // 맨 앞이면 첫 카드, 끝까지 스크롤했으면 마지막 카드
      if (carousel.scrollLeft <= 2) best = 0;
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2) best = cards.length - 1;
      return best;
    };

    var updateDots = function () {
      var idx = currentIndex();
      dots.forEach(function (dot, i) { dot.classList.toggle('is-active', i === idx); });
    };

    carousel.addEventListener('scroll', function () {
      requestAnimationFrame(updateDots);
    }, { passive: true });

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var idx = currentIndex();
        var next = idx >= cards.length - 1 ? 0 : idx + 1;
        var card = cards[next];
        var left = card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2;
        carousel.scrollTo({ left: Math.max(0, left), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    }

    window.addEventListener('resize', updateDots);
    updateDots();
  }

  /* ---------------------------------------------
   * 3. 이메일 주소 복사 (클릭 시 메일 작성은 mailto 링크가 처리)
   * ------------------------------------------- */
  var toast = document.getElementById('toast');
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  var copyBtn = document.getElementById('copy-btn');
  var emailEl = document.getElementById('email-address');

  if (copyBtn && emailEl) {
    copyBtn.addEventListener('click', function () {
      var email = emailEl.textContent.trim();
      var done = function () { showToast('이메일 주소가 클립보드에 복사되었습니다.'); };
      var fail = function () { showToast(fallbackCopy(email) ? '이메일 주소가 클립보드에 복사되었습니다.' : '복사에 실패했습니다. 직접 선택해 복사해 주세요.'); };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done, fail);
      } else {
        fail();
      }
    });
  }

  /* ---------------------------------------------
   * 기타: 푸터 연도 자동 갱신
   * ------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
