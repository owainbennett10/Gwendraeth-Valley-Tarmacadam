/** This script lets us reuse the code inside the <header>
 *
 * In a front-end framework like Vue or React, code like this is called a "component"
 *
 * maybe you can think of other pieces of the website that are repeated, and extract them into a file like this, so we only have to write them once each
 */

const headerContent = `
<div class="headerContainer">
  <div class="header-left">
      <a href="index.html"><img src="./images/TransparentLogoGwendraethValley.png" class="logo" alt="Gwendraeth Valley Company Logo"/></a>
  </div>
  <div class="header-right">
    <label for="open">
      <span class="hidden-desktop"></span>
    </label>
    <input type="checkbox" id="open" />
    <nav>
      <a href="index.html">Home</a>
      <a href="Services.html">Services</a>
      <a href="#">Gallery</a>
      <a href="ContactUs.html">Contact Us</a>
    </nav>
  </div>
</div>
`

// grab the <header>
const header = document.querySelector('header')

// set its innterHTML to headerContent
header.innerHTML = headerContent