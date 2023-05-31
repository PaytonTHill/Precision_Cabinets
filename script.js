document.querySelector('html').onmousemove = (e) => {
    requestAnimationFrame(() =>{
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${ x }px`);
        e.target.style.setProperty('--y', `${ y }px`);    
    });
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

// Initialize EmailJS with your user ID
emailjs.init("service_9czf6os");

// Get the form element
const form = document.getElementById("contactForm");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the input values
  const email = document.getElementById("email").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
  // Send the email
  emailjs.send("service_9czf6os", "template_ecmpnun", {
    to_email: email,
    from_name: fname + " " + lname,
    subject: subject,
    message: message
  })
  .then(function(response) {
    console.log("Email sent successfully:", response);
    // Redirect the user or show a success message
    window.location.href = "/contact.html";
  })
  .catch(function(error) {
    console.error("Error sending email:", error);
    // Handle the error or show an error message
  });
});
