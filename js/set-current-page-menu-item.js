// export default function setCurrentPageMenuItem() {
//   const primaryNavLinks = document.querySelectorAll(".primary-navigation a")
//   primaryNavLinks.forEach((link) => {
//     if (link.pathname === "/index.html" && location.pathname === "/") {
//       link.setAttribute("aria-current", "page")
//     } else if (link.href === location.href) {
//       link.setAttribute("aria-current", "page")
//     }
//   })
// }

// export default function setCurrentPageMenuItem() {
//   let current_location = location.pathname.split("/")[1]
//   if (current_location === "") return
//   let menu_items = document.querySelector("nav").getElementsByTagName("a")
//   for (let i = 0, len = menu_items.length; i < len; i++) {
//     if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
//       // menu_items[i].className = "active"
//       menu_items[i].setAttribute("aria-current", "page")
//     }
//   }
// }
// setNavigation()

// export default function setCurrentPageMenuItem() {
//   let current_location = location.pathname.split("/")[1]
//   if (current_location == "") {
//     primaryNavLinks[i].setAttribute("aria-current", "page")
//   }
//   // let menu_items = document.querySelector("nav").getElementsByTagName("a")
//   const primaryNavLinks = document.querySelectorAll(".primary-navigation a")
//   for (let i = 0, len = primaryNavLinks.length; i < len; i++) {
//     if (
//       primaryNavLinks[i].getAttribute("href").indexOf(current_location) !== -1
//     ) {
//       // primaryNavLinks[i].className = "active"
//       primaryNavLinks[i].setAttribute("aria-current", "page")
//     }
//   }
// }
