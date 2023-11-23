$(document).ready(function(){
    $("#tabs-home").load("pages/home.html", function() {
        setTimeout(masonry, 1); // Call your function here
    });
    $("#tabs-art").load("pages/art.html", function() {
      portfolioFiles("data/pages.json", 'art');
    });
    $("#tabs-design").load("pages/design.html", function() {
      portfolioFiles("data/pages.json", 'design');
    });
    $("#tabs-dev").load("pages/dev.html", function() {
      portfolioFiles("data/pages.json", 'dev');
    });
    $("#tabs-contact").load("pages/contact.html", function() {
      portfolioFiles("data/pages.json", 'contact');
    });
    $("#tab-art").load("pages/test.html", function() {
      portfolioFiles("data/pages.json", 'art');
    });
    $("#tab-design").load("pages/test.html", function() {
      portfolioFiles("data/pages.json", 'design');
    });
    $("#tab-dev").load("pages/test.html", function() {
      portfolioFiles("data/pages.json", 'dev');
    });
    $("#tab-contact").load("pages/test.html", function() {
      portfolioFiles("data/pages.json", 'contact');
    });
});