  const hamBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenuFn() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  hamBtn.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuFn);
  overlay.addEventListener("click", closeMenuFn);

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenuFn);
  });
  document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenuFn();
});