export default function setCurrentPageMenuItem() {
  const primaryNavLinks = document.querySelectorAll(".primary-navigation a")
  primaryNavLinks.forEach((link) => {
    if (link.pathname === "/index.html" && location.pathname === "/") {
      link.setAttribute("aria-current", "page")
    } else if (link.href === location.href) {
      link.setAttribute("aria-current", "page")
    }
  })
}
