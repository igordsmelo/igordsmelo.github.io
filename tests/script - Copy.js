// Fetch data from the JSON file
fetch('src/home.json')
  .then(response => response.json())
  .then(data => {
    // Get the div with the class 'projects'
    var container = document.getElementsByClassName('projects')[0];
    var container2 = document.get
    // Loop through the data
    for (var i = 0; i < data.length; i++) {
      // Create a new div element
      var div = document.createElement('div');
      div.className = 'card';
    //   div.style = 'position: absolute; max-width: 24em; max-height: min-content;'
      // Create an img element
      var img = document.createElement('img');
      img.className = 'card-img project-cover-img';
      img.src = data[i].cover;
      img.alt = 'Card image cap';
      div.appendChild(img);

      // Create an a element
      var a = document.createElement('a');
      a.className = 'card-img-overlay d-flex flex-column';
      a.href = data[i].link;
      a.target = '_blank';
      div.appendChild(a);

      // Create a h5 element
      var h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.textContent = data[i].title;
      a.appendChild(h5);

      // Create a p element
      var p = document.createElement('p');
      p.className = 'card-text';
      p.textContent = data[i].description;
      a.appendChild(p);

      // Append the div to the container
      container.appendChild(div);
    }

    // Get Masonry instance and call layout
    var msnry = Masonry.data( container );
    msnry.layout();

    let link = document.createElement('link');
    // link.id   = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'styles.css';
    link.media = 'all';
    document.head.appendChild(link);
  })
  .catch(error => console.error('Error:', error));
