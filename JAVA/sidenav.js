/* Hamburger side menu: tap the button to open, tap a link / backdrop / Esc to close. */
(function () {
  var header = document.querySelector(".topbar");
  var nav = header && header.querySelector("nav");
  if (!nav) return;

  nav.classList.add("sideNav");
  nav.id = nav.id || "sideNav";

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "menuToggle";
  btn.setAttribute("aria-label", "Open menu");
  btn.setAttribute("aria-controls", nav.id);
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "<span></span><span></span><span></span>";
  header.appendChild(btn);

  var backdrop = document.createElement("div");
  backdrop.className = "menuBackdrop";
  header.appendChild(backdrop); /* inside the header so it sits UNDER the menu (the old body-level backdrop covered the menu and blocked every click) */

  var title = document.createElement("div");
  title.className = "sideNavTitle";
  title.textContent = "MENU";
  nav.insertBefore(title, nav.firstChild);

  function setOpen(open) {
    nav.classList.toggle("open", open);
    backdrop.classList.toggle("show", open);
    btn.classList.toggle("active", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menuOpen", open);
  }

  btn.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
  backdrop.addEventListener("click", function () { setOpen(false); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  /* highlight the section currently on screen */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove("current"); });
          map[en.target.id].classList.add("current");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && id !== "top") io.observe(el);
    });
  }
})();
