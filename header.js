// Script for Mobile toggle button

// Selecting all necessary classes
const menuToggle = document.getElementsByClassName('menuToggle')[0];
const navLink = document.getElementsByClassName('m-nav-link')[0];

// adding event listener to the toggle bar
menuToggle.addEventListener('click', toggle);

// function to toggle mobile Nav-Bar
function toggle() {
  const x = document.getElementsByClassName('m-nav-link')[0];
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// End of mobile toggle button
