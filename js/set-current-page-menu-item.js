export default function setCurrentPageMenuItem() {
  const primaryNavLinks = document.querySelectorAll(".primary-navigation a")
  primaryNavLinks.forEach((link) => {
    if (
      link.pathname.split("/").pop() === "index.html" &&
      location.href.split("/").pop() === ""
    ) {
      link.setAttribute("aria-current", "page")
    } else if (link.href === location.href) {
      link.setAttribute("aria-current", "page")
    }
  })
}
