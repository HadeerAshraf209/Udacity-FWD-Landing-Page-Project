/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//select all the sections in html code using "querySelectorAll"
const sections = document.querySelectorAll('section'); 
//select the navigation list 
const navbarlist = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Functions & Events
 * 
*/

//building a navigation dynamically as an unordered list
function createListElement(){
    sections.forEach(section=>{
        //define the section number and link
        const sectionName = section.getAttribute('data-nav');
        const sectionLink = section.getAttribute('id');
        //creating list for each section
        listItems = document.createElement('li');
        //Naming each li element 
        listItems.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        //When clicking an item from the navigation menu, the link should scroll to the appropriate section.
        function scrolling(e){
            e.preventDefault();
          section.scrollIntoView({behavior: "smooth"})
        }
        //add the listItem to the main parent
        navbarlist.appendChild(listItems);
    })

}
createListElement();


//It should be clear which section is being viewed while scrolling through the page.

//using getBoundingClientRect and floor() function to determine if the section in the viewport or not
const elementViewPort = (section)=>{
    return section.getBoundingClientRect().top >= 0  &&section.getBoundingClientRect().top< 250
    }

// Add class 'active' to section when near top of viewport
function activeClass() {
    sections.forEach(section=> {
      //if the section in the viewport & doesn't contain active-class
      console.log(elementViewPort(section));
      if (elementViewPort(section)) {
        //then add the class to the section
        section.classList.add("your-active-class");
      } else {
        //if the section is not in the viewport & contains active-class, then remove it
        section.classList.remove("your-active-class");
      }
    }
)}
  
document.addEventListener('scroll',activeClass);

/**
 * End Functions & Events
 * 
*/
