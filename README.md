** DOCUMENTATION **

Changing picture link:
  - delete old jpg from images folder
  - add new jpg
  - adjust content in index.html 

Changing syllabi links:
  - See above ^

Stylesheets folder - various scss files:

base.scss 
  - includes h2, h3, h5, a, p, and glyphicon

layout.scss holds styling for general structure of site
  - styles unit-holder -div wrapper of all units
  - units(classes) styling 
  - holds spacing between units + centering within

section.scss holds the styling for sectioning bar
  - spacing of course-num, title, instructor, requirements… 
  - sectioning shown above class genres -architecture, visual arts, historic preservation…

dropdown.scss
  - dropdown-content styling + inside text sizings

footer.scss 
  - black bar at the bottom + link to GSAPP CU home page

nav.scss
  - structuring stylign + widths of entire page
  - container/row widths
  - search bar styling

style.scss holds all files in the stylesheet folder
  - add new files for mobile

style.css contains styling from converted .scss files
  - ran in terminal: “sass --watch style.scss:style.css"

javascript folder:
  - main.js file -> dropdown feature in units

