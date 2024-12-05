// Menu toggle
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
  menubar.classList.toggle('bx-x');
  Navbar.classList.toggle('active');
};

// Scroll event to highlight sections and navbar links
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    // Add start-animation class when section is in view
    if (top > offset && top < offset + height) {
      sec.classList.add('start-animation');
      navlink.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Add sticky class to header on scroll
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scrolling
  menubar.classList.remove('bx-x');
  Navbar.classList.remove('active');
};

// Hire Me Button - LinkedIn redirection
document.getElementById('hireMeBtn').addEventListener('click', function() {
  alert('Redirecting to my LinkedIn!');
  window.location.href = 'https://www.linkedin.com/in/rennan-alves-2622a525b/';
});

// function sendMail(){
//     let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.sendMail("service_5vz8h9a", "template_m5anwye",parms).then(alert("email sent!!"))
// }



// EmailJS integration for contact form
emailjs.init('TZltr6ZmkJHY6g0A6'); // Replace with your actual User ID from EmailJS

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form from default submission

  // Capture form data
  const formData = new FormData(this);

  // Send email using EmailJS
  emailjs.sendForm('service_5vz8h9a', 'template_m5anwye', formData) // Replace with correct Service ID and Template ID
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message: ' + error.text);
    });
});
