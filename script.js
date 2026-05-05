// Update the footer year automatically on page load
const yearSpan = document.querySelector('#currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links in the portfolio nav
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Greeting button interaction in the hero section
const greetButton = document.querySelector('#greetButton');
if (greetButton) {
  greetButton.addEventListener('click', () => {
    const names = ['Mark', 'Friend', 'Visitor', 'Guest'];
    const greetings = ['Hello', 'Hi there', 'Welcome', 'Good day'];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    alert(`${greeting}, ${name}! Thanks for visiting my portfolio.`);
  });
}
