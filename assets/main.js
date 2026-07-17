/* ============================================================
   UPBU Kelas III Waghete — shared script v2
   header/footer · i18n · scroll FX · counters · clock ·
   tilt · split-flap · easter eggs (konami / logo / "terbang")
   ============================================================ */
(function () {
  const PLANE = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 19l19-7-19-7 0 5.5L15 12 2.5 13.5z"/></svg>';
  const LOGO = `<img class="logo" style="border-radius:7px" src="assets/waghete-logo.png" alt="Logo Bandar Udara Waghete">`;

  const NAV = [
    { href: 'index.html', id: 'home', label: { id: 'Beranda', en: 'Home' } },
    {
      label: { id: 'Profil', en: 'Profile' }, id: 'profil', children: [
        { href: 'info-umum.html', id: 'info-umum', label: { id: 'Informasi Umum', en: 'General Info' } },
        { href: 'sejarah.html', id: 'sejarah', label: { id: 'Sejarah', en: 'History' } },
        { href: 'tugas-fungsi.html', id: 'tugas-fungsi', label: { id: 'Tugas & Fungsi', en: 'Duties & Functions' } },
        { href: 'visi-misi.html', id: 'visi-misi', label: { id: 'Visi & Misi', en: 'Vision & Mission' } },
        { href: 'struktur.html', id: 'struktur', label: { id: 'Struktur Organisasi', en: 'Organization Structure' } },
      ]
    },
    {
      label: { id: 'Layanan', en: 'Services' }, id: 'layanan', children: [
        { href: 'maklumat.html', id: 'maklumat', label: { id: 'Maklumat Pelayanan', en: 'Service Declaration' } },
        { href: 'tarif.html', id: 'tarif', label: { id: 'Tarif BLU', en: 'PSA Tariffs (BLU)' } },
        { href: 'survei.html', id: 'survei', label: { id: 'Survei & Testimoni', en: 'Survey & Testimonials' } },
      ]
    },
    {
      label: { id: 'Bantuan', en: 'Help' }, id: 'bantuan', children: [
        { href: 'bantuan.html', id: 'bantuan-p', label: { id: 'Bantuan & Dukungan', en: 'Help & Support' } },
        { href: 'kontak.html', id: 'kontak', label: { id: 'Kontak', en: 'Contacts' } },
      ]
    },
  ];

  const span = l => `<span class="id">${l.id}</span><span class="en">${l.en}</span>`;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function buildHeader(activePage) {
    let items = '';
    NAV.forEach(item => {
      if (item.children) {
        const isActive = item.children.some(c => c.id === activePage);
        const kids = item.children.map(c =>
          `<li><a href="${c.href}" class="${c.id === activePage ? 'current' : ''}">${span(c.label)}</a></li>`).join('');
        items += `<li class="dd ${isActive ? 'active' : ''}">
          <a class="navlink" href="${item.children[0].href}" aria-haspopup="true">${span(item.label)}</a>
          <ul class="ddmenu">${kids}</ul></li>`;
      } else {
        items += `<li class="${item.id === activePage ? 'active' : ''}">
          <a class="navlink" href="${item.href}">${span(item.label)}</a></li>`;
      }
    });
    return `
    <div class="topbar">
      <div class="container">
        <div><span class="id">Kementerian Perhubungan RI · Ditjen Perhubungan Udara</span><span class="en">Ministry of Transportation RI · DG of Civil Aviation</span></div>
        <div>
          <a href="https://www.instagram.com/waghete_airport/" target="_blank" rel="noopener">@waghete_airport</a>
          <span class="sep">|</span>
          <span class="id">Jam Operasi 07.00–15.00 WIT</span><span class="en">Operating Hours 07:00–15:00 WIT</span>
        </div>
      </div>
    </div>
    <div class="container navwrap">
      <a class="brand" href="index.html" id="brandlogo">
        ${LOGO}
        <div>
          <div class="name">Bandar Udara Waghete</div>
          <div class="sub">UPBU Kelas III · WET / WABA</div>
        </div>
      </a>
      <nav class="main" id="mainnav" aria-label="Navigasi utama"><ul>${items}</ul></nav>
      <div style="display:flex;align-items:center;gap:10px">
        <button class="langbtn" id="langbtn" aria-label="Ganti bahasa / Switch language"></button>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>`;
  }

  const FOOTER = `
    <div class="fdash"></div>
    <div class="container">
      <div class="cols">
        <div>
          <div class="fbrand" style="max-height:50px">${LOGO}
            <div class="name">Bandar Udara Waghete<br><span style="font-weight:500;font-size:12.5px;color:#B9CBE6">UPBU Kelas III Waghete</span></div>
          </div>
          <p><span class="id">Unit Penyelenggara Bandar Udara Kelas III di bawah Direktorat Jenderal Perhubungan Udara, Kementerian Perhubungan Republik Indonesia. Melayani konektivitas udara Kabupaten Deiyai dan sekitarnya.</span><span class="en">Class III Airport Operator Unit under the Directorate General of Civil Aviation, Ministry of Transportation of the Republic of Indonesia. Serving air connectivity for Deiyai Regency and its surroundings.</span></p>
        </div>
        <div>
          <h4><span class="id">Profil</span><span class="en">Profile</span></h4>
          <ul>
            <li><a href="info-umum.html"><span class="id">Informasi Umum</span><span class="en">General Info</span></a></li>
            <li><a href="sejarah.html"><span class="id">Sejarah</span><span class="en">History</span></a></li>
            <li><a href="tugas-fungsi.html"><span class="id">Tugas & Fungsi</span><span class="en">Duties & Functions</span></a></li>
            <li><a href="visi-misi.html"><span class="id">Visi & Misi</span><span class="en">Vision & Mission</span></a></li>
            <li><a href="struktur.html"><span class="id">Struktur Organisasi</span><span class="en">Structure</span></a></li>
          </ul>
        </div>
        <div>
          <h4><span class="id">Layanan</span><span class="en">Services</span></h4>
          <ul>
            <li><a href="maklumat.html"><span class="id">Maklumat Pelayanan</span><span class="en">Service Declaration</span></a></li>
            <li><a href="tarif.html"><span class="id">Tarif BLU</span><span class="en">BLU Tariffs</span></a></li>
            <li><a href="survei.html"><span class="id">Survei & Testimoni</span><span class="en">Survey</span></a></li>
            <li><a href="bantuan.html"><span class="id">Bantuan & Dukungan</span><span class="en">Help & Support</span></a></li>
            <li><a href="kontak.html"><span class="id">Kontak</span><span class="en">Contacts</span></a></li>
          </ul>
        </div>
        <div>
          <h4><span class="id">Kontak</span><span class="en">Contact</span></h4>
          <p>Distrik Tigi, Kabupaten Deiyai,<br>Provinsi Papua Tengah, Indonesia<br><br>
          <a href="mailto:upbu.waghete@dephub.go.id">upbu.waghete@dephub.go.id</a><br>
          <a href="https://wa.me/6281200000000" target="_blank" rel="noopener">WhatsApp: +62 812-0000-0000</a></p>
        </div>
      </div>
      <div class="base">
        <div>© 2026 UPBU Kelas III Waghete · Kementerian Perhubungan RI</div>
        <div>IATA WET · ICAO WABA</div>
      </div>
    </div>`;

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const page = body.dataset.page || 'home';

    const header = document.getElementById('site-header');
    if (header) header.innerHTML = buildHeader(page);
    const footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = FOOTER;

    /* ---------- language ---------- */
    const langbtn = document.getElementById('langbtn');
    function setLang(l) {
      body.dataset.lang = l;
      localStorage.setItem('waghete-lang', l);
      document.documentElement.lang = l;
      if (langbtn) langbtn.innerHTML = l === 'id' ? '<b>ID</b> / EN' : 'ID / <b>EN</b>';
    }
    setLang(localStorage.getItem('waghete-lang') || 'id');
    if (langbtn) langbtn.addEventListener('click', () => setLang(body.dataset.lang === 'id' ? 'en' : 'id'));

    /* ---------- mobile nav ---------- */
    const burger = document.getElementById('burger');
    const nav = document.getElementById('mainnav');
    if (burger && nav) burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });

    /* ---------- runway scroll progress + header shadow + back-to-top ---------- */
    const prog = document.createElement('div');
    prog.className = 'scrollrunway';
    prog.innerHTML = `<div class="fill"></div><div class="jet">${PLANE}</div>`;
    document.body.appendChild(prog);
    const fill = prog.querySelector('.fill'), jet = prog.querySelector('.jet');

    const totop = document.createElement('button');
    totop.className = 'totop'; totop.setAttribute('aria-label', 'Kembali ke atas');
    totop.innerHTML = PLANE;
    totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
    document.body.appendChild(totop);

    let ticking = false;
    function onScroll() {
      const h = document.documentElement;
      const pct = Math.min(100, (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100);
      fill.style.width = pct + '%';
      jet.style.left = pct + '%';
      if (header) header.classList.toggle('scrolled', h.scrollTop > 8);
      totop.classList.toggle('show', h.scrollTop > 600);

      // kinetic hero type: weight 800 -> 500, tracking widens as you scroll away
      const hero = document.querySelector('.hero h1');
      if (hero && !reduceMotion) {
        const t = Math.min(1, h.scrollTop / 420);
        hero.style.setProperty('--hero-wght', String(Math.round(800 - t * 300)));
        hero.style.setProperty('--hero-track', (-0.01 + t * 0.06) + 'em');
      }
      // parallax hero inner + clouds slow-shift
      const hi = document.querySelector('.hero-inner');
      if (hi && !reduceMotion) hi.style.transform = `translateY(${h.scrollTop * 0.16}px)`;
      ticking = false;
    }
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();

    /* ---------- auto scroll-reveal (all pages, zero markup) ---------- */
    const targets = document.querySelectorAll(
      '.card,.stat,.tl-item,.quote,.igpost,.orgbox,.contact-item,.maklumat,table.data,.board,.eyebrow,h2.title,p.sub,.checklist li,.news article'
    );
    targets.forEach((el, i) => { el.classList.add('rv'); el.style.transitionDelay = (Math.min(i % 6, 4) * 70) + 'ms'; });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          if (e.target.classList.contains('stat')) animateCounter(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv').forEach(el => io.observe(el));

    /* ---------- animated counters ---------- */
    function animateCounter(stat) {
      const numEl = stat.querySelector('.num');
      if (!numEl || numEl.dataset.done) return;
      numEl.dataset.done = '1';
      const target = parseInt(numEl.dataset.count || '0', 10);
      if (!target || reduceMotion) return;
      const prefix = numEl.dataset.prefix || '';
      const dur = 1400, t0 = performance.now();
      (function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        numEl.textContent = prefix + Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }

    /* ---------- 3D tilt on cards (desktop, fine pointer) ---------- */
    if (window.matchMedia('(pointer:fine)').matches && !reduceMotion) {
      document.querySelectorAll('.bento .card, .news .card').forEach(card => {
        card.classList.add('tilt');
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - .5;
          const y = (e.clientY - r.top) / r.height - .5;
          card.style.setProperty('--ry', (x * 6) + 'deg');
          card.style.setProperty('--rx', (-y * 6) + 'deg');
        });
        card.addEventListener('mouseleave', () => {
          card.style.setProperty('--ry', '0deg'); card.style.setProperty('--rx', '0deg');
        });
      });
    }

    /* ---------- live WIT clock (UTC+9) ---------- */
    const clock = document.getElementById('wit-clock');
    if (clock) {
      const upd = () => {
        const d = new Date(Date.now() + (9 * 60 + new Date().getTimezoneOffset()) * 60000);
        clock.textContent = String(d.getHours()).padStart(2, '0') + ':' +
          String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0') + ' WIT';
      };
      upd(); setInterval(upd, 1000);
    }

    /* ---------- schedule tabs + split-flap ---------- */
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('on'));
        document.querySelectorAll('.tabpanel').forEach(p => p.classList.remove('on'));
        btn.classList.add('on');
        const panel = document.getElementById(btn.dataset.tab);
        panel.classList.add('on');
        if (!reduceMotion) panel.querySelectorAll('.time,.code').forEach((el, i) => {
          el.classList.remove('flap'); void el.offsetWidth;
          el.style.animationDelay = (i * 40) + 'ms';
          el.classList.add('flap');
        });
      });
    });

    /* ---------- demo forms ---------- */
    document.querySelectorAll('form.nice').forEach(f => {
      f.addEventListener('submit', e => {
        e.preventDefault();
        const ok = f.querySelector('.okmsg');
        if (ok) { ok.classList.add('show'); f.reset(); ok.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }); }
        toast('<b>✓</b> <span class="id">Terkirim! Terima kasih.</span><span class="en">Sent! Thank you.</span>');
      });
    });

    /* ---------- star rating ---------- */
    document.querySelectorAll('.stars').forEach(box => {
      const stars = [...box.querySelectorAll('span')];
      stars.forEach((s, i) => s.addEventListener('click', () => {
        stars.forEach((x, j) => x.classList.toggle('on', j <= i));
        const inp = document.getElementById('rating-value');
        if (inp) inp.value = i + 1;
        if (i === 4) toast('⭐ <span class="id">Terima kasih! Lima bintang untuk Anda juga.</span><span class="en">Thank you! Five stars right back at you.</span>');
      }));
    });

    /* ================= EASTER EGGS ================= */

    function toast(html, ms = 3400) {
      let t = document.querySelector('.toast');
      if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
      t.innerHTML = html;
      requestAnimationFrame(() => t.classList.add('show'));
      clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms);
    }

    /* Egg 1 — Konami code → squadron flyby ("pilot mode") */
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let kIdx = 0;
    document.addEventListener('keydown', e => {
      kIdx = (e.key === KONAMI[kIdx]) ? kIdx + 1 : (e.key === KONAMI[0] ? 1 : 0);
      if (kIdx === KONAMI.length) { kIdx = 0; squadron(); }
    });
    function squadron() {
      if (reduceMotion) { toast('✈ <b>MODE PILOT</b> — <span class="id">kode rahasia diterima!</span><span class="en">secret code accepted!</span>'); return; }
      const wrap = document.createElement('div');
      wrap.className = 'squadron';
      for (let i = 0; i < 5; i++) {
        const p = document.createElement('div');
        p.className = 'sq';
        p.style.top = (14 + Math.random() * 60) + '%';
        p.style.animationDelay = (i * 0.22) + 's';
        p.innerHTML = `<span class="trail"></span>${PLANE}`;
        wrap.appendChild(p);
      }
      document.body.appendChild(wrap);
      toast('✈✈✈ <b>MODE PILOT AKTIF</b> — <span class="id">skadron Waghete lepas landas!</span><span class="en">Waghete squadron taking off!</span>');
      setTimeout(() => wrap.remove(), 5200);
    }

    /* Egg 2 — click logo 5× → secret boarding pass */
    let clicks = 0, clickTimer;
    document.addEventListener('click', e => {
      if (!e.target.closest('#brandlogo .logo')) return;
      e.preventDefault();
      clicks++; clearTimeout(clickTimer);
      clickTimer = setTimeout(() => clicks = 0, 1600);
      if (clicks === 3) toast('🎫 <span class="id">Dua klik lagi...</span><span class="en">Two more clicks...</span>', 1500);
      if (clicks >= 5) { clicks = 0; boardingPass(); }
    });
    function boardingPass() {
      let o = document.querySelector('.bp-overlay');
      if (!o) {
        o = document.createElement('div');
        o.className = 'bp-overlay';
        o.innerHTML = `
        <div class="bpass" role="dialog" aria-label="Boarding pass rahasia">
          <button class="bp-close" aria-label="Tutup">✕</button>
          <div class="bp-top"><b>BOARDING PASS</b><span>WAGHETE AIR ✈ WG-2026</span></div>
          <div class="bp-body">
            <div class="bp-route">
              <span class="cd">WET</span>
              <span class="ln">${PLANE}</span>
              <span class="cd">???</span>
            </div>
            <div><div class="fld">PENUMPANG</div><div class="val"><span class="id">PENJELAJAH RAHASIA</span><span class="en">SECRET EXPLORER</span></div></div>
            <div><div class="fld">GATE</div><div class="val">01</div></div>
            <div><div class="fld">SEAT</div><div class="val">1A</div></div>
            <div><div class="fld">BOARDING</div><div class="val">07:00 WIT</div></div>
            <div><div class="fld">CLASS</div><div class="val">EXPLORER</div></div>
            <div><div class="fld">BAGASI</div><div class="val">∞ KG</div></div>
            <div class="barcode"></div>
          </div>
          <div class="bp-note"><span class="id">Selamat! Anda menemukan tiket rahasia Bandara Waghete. Tujuan: ke mana pun rasa ingin tahu membawa Anda. 🌄</span><span class="en">Congrats! You found Waghete Airport's secret ticket. Destination: wherever curiosity takes you. 🌄</span></div>
        </div>`;
        document.body.appendChild(o);
        o.addEventListener('click', e => { if (e.target === o || e.target.closest('.bp-close')) o.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') o.classList.remove('show'); });
      }
      o.classList.add('show');
    }

    /* Egg 3 — type "terbang" anywhere → barrel roll */
    let buf = '';
    document.addEventListener('keydown', e => {
      if (e.target.matches('input,textarea,select')) return;
      if (e.key.length === 1) buf = (buf + e.key.toLowerCase()).slice(-10);
      if (buf.endsWith('terbang')) {
        buf = '';
        if (!reduceMotion) {
          body.classList.add('barrel');
          setTimeout(() => body.classList.remove('barrel'), 1400);
        }
        toast('🛫 <b>TERBANG!</b> <span class="id">Manuver aerobatik berhasil.</span><span class="en">Aerobatic maneuver complete.</span>');
      }
    });

    /* Console egg for fellow devs */
    console.log('%c✈ BANDARA WAGHETE — WET / WABA','font-family:monospace;font-size:16px;font-weight:bold;color:#0B2C5F;background:#F2B233;padding:6px 14px;border-radius:6px');
    console.log('%cPsst... coba: klik logo 5×, ketik "terbang", atau kode Konami (↑↑↓↓←→←→BA)','font-family:monospace;color:#5A6B7A');
  });
})();
