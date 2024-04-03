$(document).ready(function(){
    $("#tabs-home").load("pages/home.html", function() {
        setTimeout(masonry, 1); // Call your function here
    });
    $("#tabs-art").load("pages/portfolio.html", function() {
      portfolioFiles("data/pages.json", 'art');
    });
    $("#tabs-contact").load("pages/contact.html", function() {
      portfolioFiles("data/pages.json", 'contact');
    });
    $("#tabs-design").load("pages/portfolio.html", function() {
      portfolioFiles("data/pages.json", 'design');
    });
    $("#tabs-dev").load("pages/portfolio.html", function() {
      portfolioFiles("data/pages.json", 'dev');
    });
});