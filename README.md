** DOCUMENTATION **

index1.html - will eventually be changed to index.html
  -  Holds main info shown on the page, 
  -  content lives here: links, course names, section no… 

Changing picture link:
  - locate and delete old jpg file from images folder
  - add new jpg file to images folder, (use finder)
  - in index1.html locate unit# of image -> switch old .jpg with new .jpg 

Changing syllabi links:
  - locate and delete old pdf files from data folder(WIP)
  - add new pdf file to data folder
  - in index1 locate unit# of syllabus -> switch old .pdf with new .pdf

Stylesheets folder houses all stylistic aspects of the 2016 GSAPP site:

base.scss holds basic styles for different text sizes
  - includes h2, h3, h5, a, p, and glyphicon

layout.scss holds styling for general structure of site
  - styles unit-holder -div wrapper of all units
  - holds styling for units(classes) 
  - holds general spacing between units + centering within

section.scss holds the styling for sectioning bar
  - spacing of course-num, title, instructor, requirements… 
  - sectioning shown above class genres -architecture, visual arts, historic preservation…

dropdown.scss holds styling for dropdown(actual dropdown feature WIP)
  - includes styling for dropdown-content + inside text sizings

footer.scss holds the styling for the footer
  - black bar at the bottom + link to GSAPP CU home page

nav.scss holds the styling for the nav
  - holds styling for structuring + widths of entire page
  - important styling for the container/row 
  - also contains styling for search bar

style.scss holds all of the files in the stylesheet folder
  - when adding new .scss file to stylesheets
  - separate mobile responsive sass files(WIP)

style.css contains styling from converted .scss files
  - ran in terminal: “sass --watch style.scss:style.css"

javascript folder will include .js files for various functionality (WIP):
  - dropdown.js file enables dropdown feature in units
  - search.js file enables functional search feature 
