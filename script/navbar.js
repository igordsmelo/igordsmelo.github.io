window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    var navlink = document.getElementsByClassName('nav-link');
    var navbarMiddle = navbar.offsetTop + navbar.offsetHeight / 2;
    var elements = document.elementsFromPoint(window.innerWidth / 2, navbarMiddle);

    for (var i = 0; i < elements.length; i++) {
        var bgColor = window.getComputedStyle(elements[i], null).backgroundColor;

        if (bgColor !== 'rgba(0, 0, 0, 0)') { // if the element has a background color
            var hsl = rgbToHsl(bgColor); // convert RGB to HSL
            console.log('console logs:', hsl[2])
            if (hsl[2] > 0.5) { // if lightness is above 0.5
                navbar.style.borderColor = 'hsl(0, 0%, 10%)';
                navbar.style.backgroundColor = 'hsla(0, 0%, 90%, 0.99)';
                
                
            } else {
                navbar.style.borderColor = 'hsl(0, 0%, 10%)';
                navbar.style.backgroundColor = 'hsla(0, 0%, 90%)';
            }

            break;
        }
    }

    for (var i = 0; i < navlink.length; i++) {
        navlink[i].style.backgroundColor = 'red';
        navlink[i].style.textColor = 'red';
        navlink[i].active.style.backgroundColor = 'red';
    }


}

function rgbToHsl(rgb){
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var r = rgb[1]/255, g = rgb[2]/255, b = rgb[3]/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}
