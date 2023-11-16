import setCurrentPageMenuItem from "./set-current-page-menu-item.js"

document.body.onload = setCurrentPageMenuItem()

// console.log("Location href:")
// console.log(location.href)

// console.log("Location pathname:")
// console.log(location.pathname)

// console.log("Location protocol")
// console.log(location.protocol)

// console.log("Location hostname")
// console.log(location.hostname)

// const locationProtocol = location.protocol
// const locationHostname = location.hostname
// const locationPathname = location.pathname

// const locationString = `${locationProtocol}//${locationHostname}${locationPathname}`

// console.log(locationString)

// console.log(location.pathname.split("/").pop())

const pop = location.pathname.split("/").pop()

if (pop === "") {
  console.log("pop!")
}
