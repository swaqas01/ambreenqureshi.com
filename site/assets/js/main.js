/* ambreenqureshi.com — header, overlay, reveals, contact form. No dependencies. */
(function () {
  'use strict';

  var WA_NUMBER = '971544556731'; // official Amber Homes WhatsApp

  window.addEventListener('load', function () { document.body.classList.add('loaded'); });

  /* mobile overlay */
  var btn = document.querySelector('.menu-btn');
  var overlay = document.querySelector('.overlay');
  var close = document.querySelector('.overlay-close');
  function setMenu(open) {
    if (!overlay) return;
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (btn) btn.setAttribute('aria-expanded', String(open));
    overlay.setAttribute('aria-hidden', String(!open));
    if (open && close) close.focus();
    if (!open && btn) btn.focus();
  }
  if (btn && overlay) {
    btn.addEventListener('click', function () { setMenu(true); });
    if (close) close.addEventListener('click', function () { setMenu(false); });
    overlay.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) setMenu(false);
    });
  }

  /* reveals */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* lightweight event tracking (no-op unless GA is configured) */
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me') !== -1) track('whatsapp_click', { link_url: href });
    else if (href.indexOf('mailto:') === 0) track('email_click', { link_url: href });
    else if (href.indexOf('tel:') === 0) track('phone_click', { link_url: href });
    else if (href.indexOf('amberhomes.ae') !== -1) track('amber_homes_referral', { link_url: href });
    else if (href.indexOf('saadwaqas.com') !== -1) track('saadwaqas_referral', { link_url: href });
  }, { passive: true });

  /* contact form → /api/contact, WhatsApp composer fallback */
  var form = document.querySelector('.enquiry-form');
  if (form) {
    var status = form.querySelector('[data-form-status]');
    var send = form.querySelector('[data-form-send]');
    var waBtn = form.querySelector('[data-form-wa]');

    function val(name) {
      var el = form.querySelector('[name="' + name + '"]');
      return el ? String(el.value || '').trim() : '';
    }
    function compose() {
      var parts = ['Hello — enquiry via ambreenqureshi.com.'];
      if (val('type')) parts.push('Type: ' + val('type') + '.');
      if (val('name')) parts.push('Name: ' + val('name') + '.');
      if (val('email')) parts.push('Email: ' + val('email') + '.');
      if (val('phone')) parts.push('Mobile/WhatsApp: ' + val('phone') + '.');
      if (val('country')) parts.push('Country: ' + val('country') + '.');
      if (val('pref')) parts.push('Preferred contact: ' + val('pref') + '.');
      if (val('message')) parts.push(val('message'));
      return parts.join(' ');
    }
    function setStatus(msg, cls) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status' + (cls ? ' ' + cls : '');
    }
    function syncWa() {
      if (waBtn) waBtn.setAttribute('href', 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(compose()));
    }
    form.addEventListener('input', syncWa);
    form.addEventListener('change', syncWa);
    syncWa();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      setStatus('Sending…');
      if (send) send.disabled = true;
      var payload = {
        name: val('name'), email: val('email'), phone: val('phone'),
        country: val('country'), type: val('type'), pref: val('pref'),
        message: val('message'), company_website: val('company_website'),
        consent: !!form.querySelector('[name="consent"]:checked'),
        page: location.pathname
      };
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (send) send.disabled = false;
          if (res.ok && res.j && res.j.ok) {
            track('contact_form_submit', { enquiry_type: payload.type });
            setStatus('Received, thank you. Ambreen’s team will reply — usually within one business day.', 'ok');
            form.reset(); syncWa();
          } else if (res.j && res.j.fallback) {
            setStatus('Direct delivery is briefly unavailable — use the WhatsApp button and your message goes straight to the team.', 'err');
          } else {
            setStatus((res.j && res.j.error) || 'That did not go through. Please try again, or use WhatsApp or email.', 'err');
          }
        })
        .catch(function () {
          if (send) send.disabled = false;
          setStatus('Network issue — please try again, or send the same message via the WhatsApp button.', 'err');
        });
    });
  }
})();

/* ambient cursor glow — desktop fine pointers, respects reduced motion */
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var g = document.createElement('div');
  g.className = 'cursor-glow';
  g.setAttribute('aria-hidden', 'true');
  document.body.appendChild(g);
  var tx = window.innerWidth * 0.7, ty = window.innerHeight * 0.3, x = tx, y = ty;
  window.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
  (function loop() {
    x += (tx - x) * 0.07; y += (ty - y) * 0.07;
    g.style.transform = 'translate(' + (x - 310) + 'px,' + (y - 310) + 'px)';
    requestAnimationFrame(loop);
  })();
})();
