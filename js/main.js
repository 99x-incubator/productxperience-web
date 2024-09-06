// Get the menu items and sections
const menuItems = document.querySelectorAll('.nav-list li a');
const sections = document.querySelectorAll('section');

// Add an event listener to the window to detect scroll events
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through the sections and check if they're in view
  sections.forEach((section) => {
    const sectionTop = (section.offsetTop + 100);
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop - 450 && scrollPosition < sectionTop + sectionHeight) {
      // Get the id of the current section
      const sectionId = section.id;

      // Loop through the menu items and check if the href matches the section id
      menuItems.forEach((menuItem) => {
        const href = menuItem.getAttribute('href').replace('#', '');

        if (href === sectionId) {
          // Remove the active class from all menu items
          menuItems.forEach((item) => item.classList.remove('active'));

          // Add the active class to the corresponding menu item
          menuItem.classList.add('active');
        }
      });
    }
  });
});

// Add event listeners to the menu items to handle clicks
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the href value of the menu item
    const href = menuItem.getAttribute('href').replace('#', '');

    // Get the corresponding section
    const section = document.getElementById(href);

    // Scroll to the section with a smooth behavior
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});



// Set the target date and time
const targetDate = new Date('2025-01-28T14:30:00.000Z');

// Get the current date and time
let currentDate = new Date();

// Calculate the difference between the target date and current date
let diff = targetDate - currentDate;

// Calculate the days, hours, minutes, and seconds
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);

// Update the countdown display
function updateCountdown() {
  // Get the current date and time
  currentDate = new Date();

  // Calculate the difference between the target date and current date
  diff = targetDate - currentDate;

  // Calculate the days, hours, minutes, and seconds
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('countdown').innerHTML = `<span>${days}D:</span><span>${hours}H:</span><span>${minutes}M</span>
  `;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);