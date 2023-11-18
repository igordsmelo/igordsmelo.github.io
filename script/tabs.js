$(document).ready(function(){
    $("#pills-home").load("pages/home.html", function() {
        setTimeout(masonry, 1); // Call your function here
    });
    $("#pills-art").load("pages/art.html", function() {
      portfolioFiles("data/pages.json", 'art');
    });
    $("#pills-design").load("pages/design.html", function() {
      portfolioFiles("data/pages.json", 'design');
    });
    $("#pills-dev").load("pages/dev.html", function() {
      portfolioFiles("data/pages.json", 'dev');
    });
    $("#pills-contact").load("pages/contact.html", function() {
      portfolioFiles("data/pages.json", 'contact');
    });
});