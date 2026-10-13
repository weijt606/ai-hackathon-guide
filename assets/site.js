(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const chapters = [...document.querySelectorAll('.chapter')];
  const links = [...document.querySelectorAll('.toc-link')];
  const names = links.map(a => a.children[1].textContent);
  const storage = {
    get(key) { try { return localStorage.getItem('hackathon-guide-' + key); } catch { return null; } },
    set(key,value) { try { localStorage.setItem('hackathon-guide-' + key,value); } catch {} }
  };
  const previous = Number(storage.get('chapter'));
  if (previous >= 1 && previous <= 6) {
    const resume = $('#resume-link');
    resume.href = '#chapter-' + previous;
    resume.textContent = `继续第 ${previous} 章 ↗`;
    resume.hidden = false;
  }
  let size = Number(storage.get('size')) || 18;
  const sizes = [16,18,20];
  if (!sizes.includes(size)) size = 18;
  function setSize(value) {
    size = value;
    document.documentElement.style.setProperty('--reader-size',size + 'px');
    $('#text-smaller').disabled = size === 16;
    $('#text-larger').disabled = size === 20;
    storage.set('size',size);
    updateProgress();
  }
  $('#text-smaller').addEventListener('click',() => setSize(Math.max(16,size - 2)));
  $('#text-larger').addEventListener('click',() => setSize(Math.min(20,size + 2)));
  const menu = $('#mobile-menu');
  const sidebar = $('#sidebar');
  function closeMenu(restoreFocus = false) {
    menu.setAttribute('aria-expanded','false');
    sidebar.classList.remove('is-open');
    if (restoreFocus) menu.focus();
  }
  menu.addEventListener('click',() => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded',String(open));
    sidebar.classList.toggle('is-open',open);
  });
  links.forEach(a => a.addEventListener('click',() => closeMenu()));
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) closeMenu(true);
  });
  document.addEventListener('click',event => {
    if (!sidebar.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize',() => { if (window.innerWidth > 768) closeMenu(); });
  let ticking = false;
  function updateProgress() {
    const offset = window.innerWidth <= 768 ? 155 : 120;
    let current = 1;
    for (const chapter of chapters) {
      if (chapter.getBoundingClientRect().top <= offset) current = Number(chapter.id.split('-')[1]);
    }
    links.forEach((a,i) => {
      if (i + 1 === current) a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
    $('#mobile-current').textContent = `0${current} / ${names[current - 1]}`;
    const start = chapters[0].offsetTop;
    const end = chapters.at(-1).offsetTop + chapters.at(-1).offsetHeight - window.innerHeight;
    const value = Math.min(100,Math.max(0,Math.round((window.scrollY - start) / Math.max(1,end - start) * 100)));
    $('#progress').value = value;
    $('#progress').textContent = value + '%';
    $('#progress-value').textContent = value + '%';
    $('#mobile-progress').textContent = value + '%';
    if (window.scrollY >= start - offset) storage.set('chapter',current);
    ticking = false;
  }
  window.addEventListener('scroll',() => {
    if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
  },{passive:true});
  window.addEventListener('resize',updateProgress);
  document.fonts.ready.then(updateProgress);
  setSize(size);
  document.querySelectorAll('.print-button').forEach(b => b.addEventListener('click',() => {
    closeMenu(); window.print();
  }));
  const dialog = $('#source-dialog');
  let sourcePage = 1;
  function showPage(n) {
    sourcePage = Math.min(54,Math.max(1,Number(n)));
    const path = `assets/scans/${String(sourcePage).padStart(2,'0')}-0.jpg`;
    $('#source-image').src = path;
    $('#source-image').alt = `《欧洲 AI 黑客松不完全指北》原稿第 ${sourcePage} 页`;
    $('#source-title').textContent = `原稿对照 · 第 ${sourcePage} 页`;
    $('#source-select').value = sourcePage;
    $('#source-prev').disabled = sourcePage === 1;
    $('#source-next').disabled = sourcePage === 54;
    $('#source-full').href = `source.html#page-${sourcePage}`;
    $('.source-image-wrap').scrollTop = 0;
  }
  document.querySelectorAll('[data-source]').forEach(a => a.addEventListener('click',event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault(); showPage(a.dataset.source); dialog.showModal();
  }));
  $('#source-close').addEventListener('click',() => dialog.close());
  $('#source-prev').addEventListener('click',() => showPage(sourcePage - 1));
  $('#source-next').addEventListener('click',() => showPage(sourcePage + 1));
  $('#source-select').addEventListener('change',event => showPage(event.target.value));
  dialog.addEventListener('click',event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('keydown',event => {
    if (event.target.tagName === 'SELECT') return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPage(sourcePage - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPage(sourcePage + 1); }
  });
})();
