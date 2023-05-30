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

// Send email when the user clicks submit
function sendEmail() {
  var email = document.getElementById("email").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var subject = document.getElementById("subject").value;

  var message = `
    From: ${fname} ${lname}
    Email: ${email}
    Subject: ${subject}

    ${document.getElementById("subject").value}
  `;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/action_page.php");
  xhr.setRequestHeader("Content-type", "text/plain");
  xhr.send(message);

  // Show a popup that confirms the email was sent
  var div = document.createElement("div");
  div.innerHTML = "Your email was sent!";
  div.style.backgroundColor = "green";
  div.style.color = "white";
  div.style.position = "fixed";
  div.style.top = "100px";
  div.style.left = "50px";
  div.style.width = "300px";
  div.style.padding = "10px";
  div.style.zIndex = "1000";

  document.body.appendChild(div);

  // Hide the popup after 5 seconds
  setTimeout(function() {
    div.parentNode.removeChild(div);
  }, 5000);
}

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", sendEmail);