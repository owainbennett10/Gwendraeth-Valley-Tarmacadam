/** This script lets us reuse the code inside the <head>
 *
 * In a front-end framework like Vue or React, code like this is called a "component"
 *
 * maybe you can think of other pieces of the website that are repeated, and extract them into a file like this, so we only have to write them once each
 */

// generate the <head> content (we're using a `template string`, a string that can go over multiple lines)
const headContent = `
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Tarmacadam work by Gwendraeth Valley Tarmacadam" />
  <meta property="og:description" content="If you are looking for expert tarmacadam driveway layers in Carmarthenshire, call Gwendraeth Valley Tarmacadam." />
  <meta property="og:url" content="http://gwendraethvalleytarmac-co-uk.stackstaging.com/"/>
  <meta name="keywords" content="Gwendraeth Valley Tarmacadam, tarmacadam, driveways, Carmarthenshire"/>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Tarmacadam work by Gwendraeth Valley Tarmacadam"/>
  <meta name="twitter:description" content="If you are looking for expert tarmacadam driveway layers in Carmarthenshire, call Gwendraeth Valley Tarmacadam."/>
  <link rel="stylesheet" href="Services.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet">
  <!-- font awesome cdn link -->
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
  <link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/6328a666/site_favicon_16_1509112637059.ico"/>
  <link rel="stylesheet" href="main.css" />
`

// grab the <head> element on the page
const head = document.querySelector("head")

// set the <head>'s innerHTML to the headContent, plus whatever is already in there
head.innerHTML = head.innerHTML + headContent