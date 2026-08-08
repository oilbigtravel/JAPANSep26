/**
 * NGO2026 - Japan Business & Travel Application Logic
 */

let currentTab = 'overview';
let currentCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initCountdown();
});

// Switch Tab Navigation
function switchTab(tabId) {
  currentTab = tabId;
  
  // Update UI nav state
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabId) {
      tab.classList.add('active');
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    } else {
      tab.classList.remove('active');
    }
  });

  renderApp();
}

// Category Filter
function filterCategory(cat) {
  currentCategory = cat;
  
  document.querySelectorAll('.filter-tag').forEach(tag => {
    if (tag.getAttribute('data-cat') === cat) {
      tag.classList.add('active');
    } else {
      tag.classList.remove('active');
    }
  });

  renderApp();
}

// Search Input Handler
function handleSearch() {
  const input = document.getElementById('search-input');
  searchQuery = input ? input.value.trim().toLowerCase() : '';
  renderApp();
}

// Main Render Dispatcher
function renderApp() {
  const container = document.getElementById('app-content');
  if (!container) return;

  if (currentTab === 'overview') {
    container.innerHTML = renderOverviewHTML();
    updateCountdown();
  } else {
    container.innerHTML = renderDayHTML(currentTab);
  }

  // Re-initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Overview Dashboard
function renderOverviewHTML() {
  const data = window.TRIP_DATA;

  // Calculate live countdown values for initial render
  const targetDate = new Date('2026-09-03T21:00:00+07:00').getTime();
  const now = new Date().getTime();
  const diff = Math.max(0, targetDate - now);
  const cdDays = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const cdHours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const cdMins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');

  // Boarding Passes HTML
  const flightsHTML = data.flights.map(f => `
    <div class="boarding-pass" onclick="openFlightModal('${f.id}')" style="cursor:pointer;" title="Click to inspect flight details">
      <div class="pass-header">
        <div class="pass-airline">
          <i data-lucide="plane"></i> ${f.airline} (${f.flightNo})
        </div>
        <div class="pass-pnr"><strong style="color:var(--cyan-accent);">${f.type}</strong> • ${f.status}</div>
      </div>
      <div class="pass-body">
        <div>
          <div class="pass-code">${f.route.split('→')[0].trim().split(' ')[0]}</div>
          <div class="pass-city">${f.depAirport}</div>
          <div style="font-weight:700; color:var(--cyan-accent); margin-top:4px;">${f.depTime} (${f.departureDate.split(',')[1]})</div>
        </div>
        <div class="pass-path">
          <i data-lucide="arrow-right"></i>
          <div class="pass-line"></div>
          <div style="font-size:0.75rem; color:var(--text-dim);">${f.duration}</div>
        </div>
        <div style="text-align:right;">
          <div class="pass-code">${f.route.split('→')[1].trim().split(' ')[0]}</div>
          <div class="pass-city">${f.arrAirport}</div>
          <div style="font-weight:700; color:var(--cyan-accent); margin-top:4px;">${f.arrTime}</div>
        </div>
      </div>
      <div class="pass-details-grid">
        <div>
          <div class="pass-lbl">Passengers</div>
          <div class="pass-val">${f.passengers.length} Persons</div>
        </div>
        <div>
          <div class="pass-lbl">Flight Type</div>
          <div class="pass-val">${f.type}</div>
        </div>
        <div>
          <div class="pass-lbl">Notes</div>
          <div class="pass-val">${f.notes}</div>
        </div>
      </div>
      <div class="pass-footer">
        <span>Click for digital boarding pass modal</span>
        <i data-lucide="chevron-right"></i>
      </div>
    </div>
  `).join('');

  // Hotel Summary Cards HTML
  const hotelsHTML = data.hotels.map(h => `
    <div class="hotel-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div class="hotel-title">${h.name}</div>
          <div class="hotel-jp">${h.nameJP}</div>
        </div>
        <span class="hotel-dates">${h.stayDays.join(', ')}</span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted); display:flex; align-items:center; gap:6px;">
        <i data-lucide="map-pin" style="width:14px; height:14px; color:var(--cyan-accent);"></i>
        ${h.address}
      </div>
      <div class="jp-address-box" style="padding:10px 14px; margin-top:4px;">
        <div>
          <div class="jp-address-lbl">แท็กซี่ / Taxi JP Address</div>
          <div class="jp-address-text" style="font-size:0.95rem;">${h.addressJP}</div>
        </div>
        <button class="btn-copy" onclick="copyToClipboard('${h.addressJP.replace(/'/g, "\\'")}', 'ที่อยู่โรงแรม')">
          <i data-lucide="copy"></i> Copy
        </button>
      </div>
      <div style="display:flex; gap:8px; margin-top:4px;">
        <a href="${h.mapUrl}" target="_blank" class="btn-action primary" style="padding:6px 12px; font-size:0.78rem;">
          <i data-lucide="map"></i> Google Maps
        </a>
      </div>
    </div>
  `).join('');

  // Quick Days Grid HTML
  const daysGridHTML = data.days.map(d => `
    <div class="hotel-card" onclick="switchTab('${d.id}')" style="cursor:pointer;" title="Click to open ${d.dayName}">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="time-badge" style="font-size:0.85rem;">${d.dayName} • ${d.dateFormatted}</span>
        <span class="badge-tag">${d.events.length} Events</span>
      </div>
      <div style="font-weight:700; font-size:1.1rem; color:var(--text-main); margin-top:4px;">${d.title}</div>
      <div style="font-size:0.85rem; color:var(--text-muted);">${d.highlight}</div>
      <div style="display:flex; align-items:center; gap:6px; color:var(--cyan-accent); font-size:0.8rem; font-weight:700; margin-top:6px;">
        ดูรายละเอียดวัน <i data-lucide="arrow-right" style="width:14px;"></i>
      </div>
    </div>
  `).join('');

  return `
    <!-- Top Countdown & Summary Banner -->
    <div class="day-banner">
      <div class="day-banner-content">
        <div>
          <div class="day-banner-tag">Overview Dashboard</div>
          <h1 class="day-banner-title">NGO2026 Japan Travel</h1>
          <p class="day-banner-desc">กำหนดการเดินทางประเทศญี่ปุ่น 7 วัน (3 กันยายน 2026 - 9 กันยายน 2026)</p>
        </div>

        <div class="countdown-box">
          <div>
            <div class="cd-number" id="cd-days">${cdDays}</div>
            <div class="cd-label">Days</div>
          </div>
          <div style="color:var(--text-dim); font-size:1.2rem; font-weight:300;">:</div>
          <div>
            <div class="cd-number" id="cd-hours">${cdHours}</div>
            <div class="cd-label">Hours</div>
          </div>
          <div style="color:var(--text-dim); font-size:1.2rem; font-weight:300;">:</div>
          <div>
            <div class="cd-number" id="cd-mins">${cdMins}</div>
            <div class="cd-label">Mins</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Dashboard 2 Column Layout -->
    <div class="dashboard-grid">
      <!-- Left Column: Flight Tickets & Quick Days -->
      <div style="display:flex; flex-direction:column; gap:24px;">
        <div class="dash-card">
          <div class="dash-card-header">
            <h2 class="dash-card-title"><i data-lucide="plane"></i> Flight Reservations (${data.tripInfo.passengers ? data.tripInfo.passengers.length : 3} Travelers)</h2>
          </div>
          ${flightsHTML}
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h2 class="dash-card-title"><i data-lucide="calendar"></i> 7-Day Schedule Overview</h2>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px;">
            ${daysGridHTML}
          </div>
        </div>
      </div>

      <!-- Right Column: Hotels & Important Addresses -->
      <div style="display:flex; flex-direction:column; gap:24px;">
        <div class="dash-card">
          <div class="dash-card-header">
            <h2 class="dash-card-title"><i data-lucide="building"></i> Hotels & Accommodations</h2>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px;">
            ${hotelsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Specific Day Timeline
function renderDayHTML(dayId) {
  const data = window.TRIP_DATA;
  const dayObj = data.days.find(d => d.id === dayId);
  if (!dayObj) return '<div class="day-banner">Day not found</div>';

  // Filter events based on Category & Search Query
  let filteredEvents = dayObj.events.filter(e => {
    const matchesCat = (currentCategory === 'all' || e.category === currentCategory);
    const searchTarget = (e.title + ' ' + (e.titleEN || '') + ' ' + (e.details || '') + ' ' + (e.badge || '') + ' ' + (e.addressJP || '')).toLowerCase();
    const matchesSearch = (!searchQuery || searchTarget.includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  const eventsHTML = filteredEvents.length > 0 ? filteredEvents.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="card-header">
          <div class="time-badge">
            <i data-lucide="clock" style="width:16px; height:16px;"></i> ${e.time}
          </div>
          <div style="display:flex; gap:6px;">
            <span class="badge-tag ${e.category}"><i data-lucide="${getBadgeIcon(e)}" style="width:12px; height:12px;"></i> ${e.badge || e.category}</span>
          </div>
        </div>

        <div class="card-title-group" style="display:flex; align-items:flex-start; gap:10px;">
          <span class="event-icon-badge ${e.category}">
            <i data-lucide="${getEventIconName(e)}"></i>
          </span>
          <div>
            <h3 class="card-title">${e.title}</h3>
            ${e.titleEN ? `<div class="card-title-en">${e.titleEN}</div>` : ''}
          </div>
        </div>

        <div class="card-details">
          ${e.details}
        </div>

        ${e.addressJP ? `
          <div class="jp-address-box">
            <div>
              <div class="jp-address-lbl">แท็กซี่ / Taxi Japanese Address</div>
              <div class="jp-address-text">${e.addressJP}</div>
            </div>
            <button class="btn-copy" onclick="copyToClipboard('${e.addressJP.replace(/'/g, "\\'")}', 'ที่อยู่ภาษาญี่ปุ่น')">
              <i data-lucide="copy"></i> Copy
            </button>
          </div>
        ` : ''}

        ${(e.link || e.category === 'flight' || e.badge?.includes('Flight') || e.badge?.includes('Check-in')) ? `
          <div class="card-actions">
            ${e.link ? `
              <a href="${e.link}" target="_blank" class="btn-action primary">
                <i data-lucide="external-link"></i> ${e.linkText || 'Open Link'}
              </a>
            ` : ''}
            ${(e.category === 'flight' || e.badge?.includes('Flight') || e.badge?.includes('Check-in')) ? `
              <button class="btn-action" onclick="openFlightModal('${dayId.includes('0') || dayId.includes('1') ? 'flight-outbound' : 'flight-inbound'}')">
                <i data-lucide="ticket"></i> Boarding Pass
              </button>
            ` : ''}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('') : `
    <div class="day-banner" style="text-align:center; padding:40px;">
      <i data-lucide="search-x" style="width:48px; height:48px; color:var(--text-dim); margin-bottom:12px;"></i>
      <h3 style="color:var(--text-muted);">ไม่พบรายการที่ค้นหา</h3>
      <p style="font-size:0.85rem; color:var(--text-dim);">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่ "ทั้งหมด"</p>
    </div>
  `;

  return `
    <div class="day-banner">
      <div class="day-banner-content">
        <div>
          <div class="day-banner-tag">${dayObj.dayName} • ${dayObj.dateFormatted}</div>
          <h1 class="day-banner-title">${dayObj.title}</h1>
          <p class="day-banner-desc"><i data-lucide="map-pin" style="width:16px; height:16px; display:inline; vertical-align:middle; color:var(--cyan-accent);"></i> ${dayObj.location} — ${dayObj.highlight}</p>
        </div>

        <div class="day-banner-stats">
          <div class="stat-pill">
            <i data-lucide="list-checks"></i>
            <div>
              <div class="stat-val">${filteredEvents.length} / ${dayObj.events.length}</div>
              <div class="stat-lbl">Events</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-container">
      ${eventsHTML}
    </div>
  `;
}

// Icon Resolver Helper
function getEventIconName(e) {
  const icon = e.icon || '';
  const title = (e.title + ' ' + (e.titleEN || '')).toLowerCase();
  
  if (icon === 'taxi' || title.includes('taxi') || title.includes('แท็กซี่')) return 'car-taxi-front';
  if (icon === 'utensils' || icon === 'coffee' || title.includes('lunch') || title.includes('unagi') || title.includes('sushiro') || title.includes('breakfast') || title.includes('ร้าน') || title.includes('อาหาร')) return 'utensils';
  if (icon === 'subway' || icon === 'train' || title.includes('train') || title.includes('shinkansen') || title.includes('line') || title.includes('express') || title.includes('station') || title.includes('รถไฟ')) return 'subway';
  if (icon === 'bus' || title.includes('bus') || title.includes('รถบัส') || title.includes('limousine')) return 'bus';
  if (icon === 'plane' || icon === 'plane-takeoff' || icon === 'plane-landing' || title.includes('flight') || title.includes('bkk') || title.includes('ngo') || title.includes('tg 644') || title.includes('tg 677')) return 'plane';
  if (icon === 'bed' || title.includes('hotel') || title.includes('toyoko') || title.includes('tosei') || title.includes('check in:')) return 'bed';
  if (icon === 'factory' || icon === 'building-2' || title.includes('factory') || title.includes('accretech') || title.includes('meeting') || title.includes('seminar') || title.includes('bellesalle')) return 'building-2';
  if (icon === 'car' || title.includes('car') || title.includes('parking')) return 'car';
  if (icon === 'briefcase' || title.includes('baggage') || title.includes('luggage')) return 'briefcase';
  if (icon === 'shield-check' || title.includes('immigration') || title.includes('custom')) return 'shield-check';

  return icon || 'map-pin';
}

function getBadgeIcon(e) {
  const badge = (e.badge || e.category || '').toLowerCase();
  const cat = e.category || '';
  
  if (badge.includes('taxi') || badge.includes('แท็กซี่')) return 'car-taxi-front';
  if (badge.includes('platform') || badge.includes('station') || badge.includes('line') || badge.includes('express') || badge.includes('transit') || cat === 'transport') return 'subway';
  if (badge.includes('breakfast') || badge.includes('lunch') || badge.includes('unagi') || badge.includes('sushiro') || cat === 'food') return 'utensils';
  if (badge.includes('flight') || badge.includes('boarding') || badge.includes('arrival') || cat === 'flight') return 'plane';
  if (badge.includes('checkout') || badge.includes('check out') || badge.includes('log-out')) return 'log-out';
  if (badge.includes('check-in') || badge.includes('hotel') || badge.includes('overnight') || cat === 'hotel') return 'bed';
  if (badge.includes('meeting') || badge.includes('accretech') || badge.includes('venue') || cat === 'meeting') return 'building-2';
  if (badge.includes('luggage') || badge.includes('baggage') || badge.includes('locker')) return 'briefcase';

  return 'tag';
}

// Live Countdown to Departure (Sep 3, 2026 21:00 GMT+7)
function updateCountdown() {
  const targetDate = new Date('2026-09-03T21:00:00+07:00').getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(mins).padStart(2, '0');
  }
}

function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 10000);
}

// Clipboard Copy Helper
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`คัดลอก ${label} แล้ว: ${text}`);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`คัดลอก ${label} แล้ว!`);
  });
}

// Toast Notification
function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle" style="color:var(--cyan-accent);"></i> <span>${msg}</span>`;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Modal Controllers
function openFlightModal(flightId) {
  const data = window.TRIP_DATA;
  const flight = data.flights.find(f => f.id === flightId) || data.flights[0];
  const modal = document.getElementById('app-modal');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <div style="text-align:center; margin-bottom:20px;">
      <span class="flag-badge">✈️</span>
      <h2 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin-top:8px;">Digital Boarding Pass</h2>
      <div style="color:var(--cyan-accent); font-weight:700; font-size:0.9rem;">${flight.flightNo} • ${flight.airline} (${flight.passengers.length} Travelers)</div>
    </div>

    <div class="boarding-pass" style="box-shadow:none; margin-bottom:0;">
      <div class="pass-header">
        <div class="pass-airline"><i data-lucide="plane"></i> ${flight.flightNo} (${flight.airline})</div>
        <div style="color:var(--emerald-accent); font-weight:700;">Status: ${flight.status}</div>
      </div>

      <div class="pass-body">
        <div>
          <div class="pass-code">${flight.route.split('→')[0].trim().split(' ')[0]}</div>
          <div class="pass-city">${flight.depAirport}</div>
          <div style="color:var(--cyan-accent); font-weight:800; margin-top:6px;">${flight.depTime}</div>
        </div>
        <div class="pass-path">
          <i data-lucide="arrow-right"></i>
          <div class="pass-line"></div>
          <div style="font-size:0.75rem; color:var(--text-dim);">${flight.duration}</div>
        </div>
        <div style="text-align:right;">
          <div class="pass-code">${flight.route.split('→')[1].trim().split(' ')[0]}</div>
          <div class="pass-city">${flight.arrAirport}</div>
          <div style="color:var(--cyan-accent); font-weight:800; margin-top:6px;">${flight.arrTime}</div>
        </div>
      </div>

      <div class="pass-details-grid" style="grid-template-columns: repeat(2, 1fr);">
        <div>
          <div class="pass-lbl">Passenger Names (${flight.passengers.length} Persons)</div>
          <div class="pass-val" style="line-height:1.6;">${flight.passengers.map(p => `• ${p}`).join('<br>')}</div>
        </div>
        <div>
          <div class="pass-lbl">Departure Date</div>
          <div class="pass-val">${flight.departureDate}</div>
        </div>
      </div>

      <div style="text-align:center; padding:16px 0 0 0; border-top:1px dashed var(--border-glass);">
        <div style="font-family:monospace; font-size:1.6rem; letter-spacing:4px; color:var(--text-muted);">||||| ||| ||||||| ||||| ||</div>
        <div style="font-size:0.7rem; color:var(--text-dim); margin-top:4px;">ELECTRONIC BOARDING PASS • NGO2026</div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
}

function closeModal(e) {
  if (e.target.id === 'app-modal') {
    closeModalDirect();
  }
}

function closeModalDirect() {
  const modal = document.getElementById('app-modal');
  modal.classList.remove('active');
}
