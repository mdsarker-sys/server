document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&email=${email}&message=${message}`
    })
    .then(response => response.text())
    .then(data => {
      alert(`Server says: ${data}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.about-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const universityCards = document.querySelectorAll('.university-card');
  
  universityCards.forEach(card => {
    card.addEventListener('click', function() {
      const universityName = this.querySelector('h3').textContent;
      
      if (universityName === 'University of Oxford') {
        window.location.href = 'https://www.ox.ac.uk/';
      } else if (universityName === 'University of Cambridge') {
        window.location.href = 'https://www.cam.ac.uk/';
      }
      // Add more conditions for other universities
    });
  });
});


$(document).ready(function() {
  $(".testimonial-container").hover(
    function() {
      $(this).css("animation-play-state", "paused");
    },
    function() {
      $(this).css("animation-play-state", "running");
    }
  );
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


  AOS.init({
    duration: 1200, // You can also add other options here
  });

  function showMoreContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  