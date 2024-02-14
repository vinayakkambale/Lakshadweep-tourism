
document.addEventListener('navbar', function() {

    const changeColorButton = document.getElementById('changeColorButton');
    const body = document.body;

    changeColorButton.addEventListener('click', function() {
        body.style.backgroundColor = 'lightblue';
    });
});


window.addEventListener('scroll', function() {
    
    var scrollPosition = window.scrollY;

    var navbar = document.getElementById('navbar');


    if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

