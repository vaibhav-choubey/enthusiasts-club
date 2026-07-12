/* ===========================================================
   Enthusiast's Club — shared header / footer chrome
   Include this after css/ec-style.css, then call:
     renderChrome('home' | 'news' | 'compare' | 'find' | 'poster' | 'resources');
   =========================================================== */

const EC_NAV = [
  { key: "home",      label: "Home",             href: "ec-index.html" },
  { key: "news",      label: "News & Articles",  href: "ec-news.html" },
  { key: "compare",   label: "Compare Cars",     href: "ec-compare.html" },
  { key: "find",      label: "Find My Car",      href: "ec-find-my-car.html" },
  { key: "poster",    label: "Poster Studio",    href: "ec-poster-studio.html", highlight: true },
  { key: "resources", label: "Buyer Resources",  href: "ec-resources.html" },
];

function renderChrome(activeKey) {
  renderHeader(activeKey);
  renderFooter();
}

function renderHeader(activeKey) {
  const mount = document.getElementById("ec-header");
  if (!mount) return;

  const navHtml = EC_NAV.map((item) => {
    const classes = ["", item.highlight ? "highlight" : "", item.key === activeKey ? "active" : ""]
      .filter(Boolean).join(" ").trim();
    return `<a href="${item.href}" class="${classes}">${item.label}</a>`;
  }).join("");

  mount.innerHTML = `
    <div class="utility-bar">100% free to use &mdash; <strong>no account, no paywall, no sales pitch.</strong></div>
    <header class="rw-header">
      <div class="rw-header-inner">
        <a href="ec-index.html" class="rw-brand" style="text-decoration:none; text-transform:uppercase; letter-spacing:0.4px;">The <span>Enthusiasts</span> Club</a>
        <nav class="rw-nav">${navHtml}</nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.getElementById("ec-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="rw-footer">
      <div class="container">
        <div>
          <div class="brand">THE ENTHUSIASTS CLUB</div>
          <div>Created by enthusiasts, for enthusiasts. Independent car &amp; bike guidance &mdash; free, always.</div>
        </div>
        <div class="links">
          <a href="ec-index.html">Home</a>
          <a href="ec-news.html">News</a>
          <a href="ec-compare.html">Compare</a>
          <a href="ec-find-my-car.html">Find My Car</a>
          <a href="ec-poster-studio.html">Poster Studio</a>
          <a href="ec-resources.html">Resources</a>
          <a href="https://www.instagram.com/thenthusiastsclub/" target="_blank" rel="noopener">Instagram &#8599;</a>
        </div>
      </div>
      <div class="fine">Prototype build &middot; sample vehicle data for demonstration &middot; not affiliated with any manufacturer &middot; @thenthusiastsclub</div>
    </footer>
  `;
}
