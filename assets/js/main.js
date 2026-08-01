(() => {
  "use strict";

  const state = {
    data: window.MOCK_DATA,
    filter: "all"
  };

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const renderContributorStack = contributors => `
    <div class="contributor-stack" aria-label="Daftar kolaborator">
      ${contributors.map(item => `<span class="contributor-avatar">${escapeHtml(item)}</span>`).join("")}
      <span class="contributor-label">Kolaborasi mahasiswa</span>
    </div>`;

  const renderPrograms = programs => {
    const [featured, ...others] = programs;
    const featuredContainer = document.getElementById("featuredNews");
    const newsGrid = document.getElementById("newsGrid");

    if (!featuredContainer || !newsGrid || !featured) return;

    featuredContainer.innerHTML = `
      <a class="featured-card" href="berita/detail.html?id=${encodeURIComponent(featured.id)}" aria-label="Baca ${escapeHtml(featured.title)}">
        <div class="featured-media">
          <img src="${escapeHtml(featured.image)}" alt="Ilustrasi ${escapeHtml(featured.title)}">
          <span class="media-badge">Sorotan utama</span>
        </div>
        <div class="featured-content">
          <div>
            <div class="news-meta">
              <span>${escapeHtml(featured.category)}</span><i></i><span>${escapeHtml(featured.date)}</span><i></i><span>${escapeHtml(featured.location)}</span>
            </div>
            <h3>${escapeHtml(featured.title)}</h3>
            <p>${escapeHtml(featured.summary)}</p>
            ${renderContributorStack(featured.contributors)}
          </div>
          <div class="featured-bottom">
            <span class="text-link">Baca cerita program <span aria-hidden="true">→</span></span>
            <span class="arrow-button" aria-hidden="true">↗</span>
          </div>
        </div>
      </a>`;

    newsGrid.innerHTML = others.slice(0, 3).map(program => `
      <a class="news-card" href="berita/detail.html?id=${encodeURIComponent(program.id)}" aria-label="Baca ${escapeHtml(program.title)}">
        <div class="news-card-media">
          <img src="${escapeHtml(program.image)}" alt="Ilustrasi ${escapeHtml(program.title)}" loading="lazy">
          <span class="media-badge">${escapeHtml(program.category)}</span>
        </div>
        <div class="news-card-content">
          <div class="news-meta"><span>${escapeHtml(program.date)}</span><i></i><span>${escapeHtml(program.location)}</span></div>
          <h3>${escapeHtml(program.title)}</h3>
          <div class="news-card-footer">
            <span>${escapeHtml(program.contributors.length)} kelompok kontribusi</span>
            <span class="arrow-button" aria-hidden="true">↗</span>
          </div>
        </div>
      </a>`).join("");
  };

  const renderMembers = members => {
    const teamGrid = document.getElementById("teamGrid");
    if (!teamGrid) return;

    teamGrid.innerHTML = members.slice(0, 8).map((member, index) => `
      <a class="member-card" href="anggota/profil.html?id=${encodeURIComponent(member.id)}" aria-label="Lihat profil ${escapeHtml(member.name)}">
        <div class="member-portrait">
          <img src="${escapeHtml(member.image)}" alt="Portrait ${escapeHtml(member.name)}">
          <span class="member-order">${String(index + 1).padStart(2, "0")}</span>
          <div class="member-overlay">
            <h3>${escapeHtml(member.name)}</h3>
            <p>${escapeHtml(member.study)}</p>
            <span class="member-program-count">${member.programs} program terkait</span>
          </div>
        </div>
      </a>`).join("");
  };

  const renderGallery = gallery => {
    const galleryGrid = document.getElementById("galleryGrid");
    if (!galleryGrid) return;

    const filtered = state.filter === "all" ? gallery : gallery.filter(item => item.type === state.filter);
    galleryGrid.innerHTML = filtered.map(item => `
      <button class="gallery-item gallery-${escapeHtml(item.orientation)}" type="button" data-media-id="${escapeHtml(item.id)}" aria-label="Buka ${escapeHtml(item.title)}">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
        <span class="gallery-caption">
          <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.meta)}</small></span>
          ${item.type === "video" ? '<span class="play-icon" aria-hidden="true">▶</span>' : ""}
        </span>
      </button>`).join("");
  };

  const setupGallery = () => {
    document.querySelectorAll(".filter-button").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("is-active"));
        button.classList.add("is-active");
        state.filter = button.dataset.filter || "all";
        renderGallery(state.data.gallery);
      });
    });

    const galleryGrid = document.getElementById("galleryGrid");
    const dialog = document.getElementById("mediaDialog");
    const dialogContent = document.getElementById("dialogContent");
    const dialogClose = document.getElementById("dialogClose");

    galleryGrid?.addEventListener("click", event => {
      const button = event.target.closest("[data-media-id]");
      if (!button || !dialog || !dialogContent) return;
      const item = state.data.gallery.find(media => media.id === button.dataset.mediaId);
      if (!item) return;
      dialogContent.innerHTML = `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">`;
      dialog.showModal();
    });

    dialogClose?.addEventListener("click", () => dialog?.close());
    dialog?.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  };

  const setupNavigation = () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false");
      if (mobileNav) mobileNav.hidden = true;
      document.body.classList.remove("menu-open");
    };

    menuButton?.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      if (mobileNav) mobileNav.hidden = isOpen;
      document.body.classList.toggle("menu-open", !isOpen);
    });

    mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

    window.addEventListener("scroll", () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 16);
    }, { passive: true });
  };

  const updateCounts = () => {
    const programCount = document.getElementById("programCount");
    const memberCount = document.getElementById("memberCount");
    if (programCount) programCount.textContent = String(state.data.programs.length).padStart(2, "0");
    if (memberCount) memberCount.textContent = String(state.data.members.length).padStart(2, "0");
  };

  const loadData = async () => {
    if (window.APP_CONFIG?.USE_MOCK_DATA !== false) return window.MOCK_DATA;

    try {
      const response = await fetch(`${window.APP_CONFIG.API_URL}?action=getHome`, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (!payload?.success || !payload?.data) throw new Error("Format API tidak valid");
      return payload.data;
    } catch (error) {
      console.error("Gagal mengambil data Apps Script. Data demo digunakan.", error);
      return window.MOCK_DATA;
    }
  };

  const init = async () => {
    state.data = await loadData();
    renderPrograms(state.data.programs || []);
    renderMembers(state.data.members || []);
    renderGallery(state.data.gallery || []);
    updateCounts();
    setupGallery();
    setupNavigation();
  };

  document.addEventListener("DOMContentLoaded", init);
})();
