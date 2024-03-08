// Select all elements with the classes you're interested in
var elements = document.querySelectorAll('.class1w, .class1b, .class2w, .class2b');

// Add event listener to each element
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // On click, toggle the classes
        if (this.classList.contains('class1w')) {
            this.classList.remove('class1w');
            this.classList.add('class1b');
        } else if (this.classList.contains('class1b')) {
            this.classList.remove('class1b');
            this.classList.add('class1w');
        } else if (this.classList.contains('class2w')) {
            this.classList.remove('class2w');
            this.classList.add('class2b');
        } else if (this.classList.contains('class2b')) {
            this.classList.remove('class2b');
            this.classList.add('class2w');
        }
    });
});