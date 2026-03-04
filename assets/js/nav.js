const navBtnOpen = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu-wrapper");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelector(".close-menu-btn");

function closeMenu() {
  navMenu.classList.remove("open");
  overlay.classList.remove("open");
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withoutTrailingSlash = pathname.replace(/\/+$/, "");
  return withoutTrailingSlash === "" ? "/" : withoutTrailingSlash;
}

function setActiveNavLink() {
  const tabs = [
    "history",
    "safety",
    "components",
    "types",
    "operations",
    "accessories",
    "authors",
    "about",
  ];
  const currentPath = normalizePath(window.location.pathname);
  let currPath = tabs.find((item) => currentPath.includes(item));
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPath = normalizePath(
      new URL(link.href, window.location.origin).pathname,
    );
    const homeAlias = currPath ? "" : "/lathemachine";

    if (linkPath.includes(currPath) || linkPath === homeAlias) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

if (navBtnOpen && navMenu && overlay && closeMenuBtn) {
  navBtnOpen.addEventListener("click", () => {
    navMenu.classList.add("open");
    overlay.classList.add("open");
  });

  overlay.addEventListener("click", closeMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
}

setActiveNavLink();
