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
    for(section of sections){
        //define the section number and link
        var sectionName = section.getAttribute('data-nav');
        var sectionLink = section.getAttribute('id');
        //creating list for each section
        listItems = document.createElement('li');
        //Naming each li element 
        listItems.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        //add the listItem to the main parent
        navbarlist.appendChild(listItems);
    }
}
createListElement();


//It should be clear which section is being viewed while scrolling through the page.
//using getBoundingClientRect to determine if the section in the viewport or not
function elementViewPort(element) {
    let box = element.getBoundingClientRect();
    return (
        box.top >= 0);
};

function activeClass(){
    for(section of sections){
        //if the section in the viewport & doesn't contain active-class
        if(elementViewPort(section) && !section.classList.contains("active-class")){
            //then add the class to the section
            section.classList.add('active-class');
        } else{ //if the section is not in the viewport & contains active-class, then remove it
            section.classList.remove('active-class');
        }
    }
}

document.addEventListener('scroll',activeClass());

/**
 * End Functions & Events
 * 
*/
