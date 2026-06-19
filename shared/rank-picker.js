/* ── Rank picker: small dropdown with rank logos, replaces native <select> ──
   Each page must define before use:
     window.PAGE_RANKS    = [{label, value, ...}, ...]
     window.PAGE_RANK_IMG = { [label]: 'path/to/logo.webp', ... }
   Optional: window.onRankFieldChange(fieldId, value) — called after a pick.
*/
(function () {
  function rankByValue(value) {
    return (window.PAGE_RANKS || []).find(r => r.value === value) || (window.PAGE_RANKS || [])[0];
  }
  function imgFor(rank) {
    return (window.PAGE_RANK_IMG && window.PAGE_RANK_IMG[rank.label]) || '';
  }
  function triggerContent(rank) {
    const img = imgFor(rank);
    return `${img ? `<img src="${img}" alt="">` : ''}<span>${rank.label}</span><i class="ti ti-chevron-down chev"></i>`;
  }

  window.renderRankField = function (fieldId, value) {
    const ranks = window.PAGE_RANKS || [];
    const opts = ranks.map(r => {
      const img = imgFor(r);
      return `<div class="rank-opt${r.value === value ? ' active' : ''}" onclick="selectRankOption('${fieldId}', ${r.value})">${img ? `<img src="${img}" alt="">` : ''}<span>${r.label}</span></div>`;
    }).join('');
    const cur = rankByValue(value);
    return `<div class="rank-field" id="${fieldId}" data-value="${value}">
      <button type="button" class="rank-trigger" onclick="event.stopPropagation(); toggleRankDropdown('${fieldId}')">${triggerContent(cur)}</button>
      <div class="rank-dropdown">${opts}</div>
    </div>`;
  };

  window.getRankFieldValue = function (fieldId) {
    const el = document.getElementById(fieldId);
    return el ? parseInt(el.dataset.value, 10) : null;
  };

  window.toggleRankDropdown = function (fieldId) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    const isOpen = el.classList.contains('open');
    closeAllRankDropdowns();
    if (!isOpen) el.classList.add('open');
  };

  window.closeAllRankDropdowns = function () {
    document.querySelectorAll('.rank-field.open').forEach(el => el.classList.remove('open'));
  };

  window.selectRankOption = function (fieldId, value) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.dataset.value = value;
    const rank = rankByValue(value);
    el.querySelector('.rank-trigger').innerHTML = triggerContent(rank);
    el.querySelectorAll('.rank-opt').forEach(o => o.classList.remove('active'));
    const ranks = window.PAGE_RANKS || [];
    const idx = ranks.findIndex(r => r.value === value);
    const optEls = el.querySelectorAll('.rank-opt');
    if (optEls[idx]) optEls[idx].classList.add('active');
    closeAllRankDropdowns();
    if (typeof window.onRankFieldChange === 'function') window.onRankFieldChange(fieldId, value);
  };

  window.rankBadge = function (value) {
    const rank = rankByValue(value);
    const img = imgFor(rank);
    return `<span class="rank-badge">${img ? `<img src="${img}" alt="">` : ''}${rank.label}</span>`;
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.rank-field')) closeAllRankDropdowns();
  });
})();
