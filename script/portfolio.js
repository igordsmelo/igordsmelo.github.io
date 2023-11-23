function portfolioFiles(jsonPath, key) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      // Get the data from the specified key
      var projects = data[key];

      // Get the div with the class 'projects'
      // var container = document.getElementsByClassName('projects')[0];
      var container = document.getElementById(key);
      // Loop through the projects
      for (var i = 0; i < projects.length; i++) {
        // Create a new div element
        var div = document.createElement('div');
        div.className = 'card';

        // Create an img element
        var img = document.createElement('img');
        img.className = 'card-img project-cover-img';
        img.src = projects[i].cover;
        img.alt = 'Card image cap';
        div.appendChild(img);

        // Create an a element
        var a = document.createElement('a');
        a.className = 'card-img-overlay d-flex flex-column';
        a.href = projects[i].link;
        a.target = '_blank';
        div.appendChild(a);

        // Create a h5 element
        var h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = projects[i].title;
        a.appendChild(h5);

        // Create a p element
        var p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = projects[i].description;
        a.appendChild(p);

        // Append the div to the container
        container.appendChild(div);
      }

      // Get Masonry instance and call layout
      var msnry = Masonry.data( container );
      msnry.layout();
    })
    .catch(error => console.error('Error:', error));
}
