// main.js
let header = document.querySelector('header');
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');
let navLinks = document.querySelectorAll('.navbar a'); // Select all nav links

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);

});

menuIcon.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navbar.classList.toggle('active');
});

// Function to hide the menu
function hideMenu() {
    navbar.classList.remove('active');
    menuIcon.classList.remove('is-active');
}

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

// function showMenu(location) {
    // Hide all menus
    // document.getElementById('location1-menu').style.display = 'none';
    // document.getElementById('location2-menu').style.display = 'none';

    // Show the selected menu
    // document.getElementById(`${location}-menu`).style.display = 'block';
// }

function toggleMenu() {
    navbar.classList.remove('active');
    menuIcon.classList.remove('is-active');
}

// Now attach this function to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

