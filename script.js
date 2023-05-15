document.querySelector('body').onmousemove = (e) => {
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

$(".aboutme_b").click(function() {
    $('html,body').animate({
        scrollTop: $(".slide_1").offset().top},
        'slow');
});