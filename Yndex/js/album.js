let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`)

// переходы на альбомы
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);

let album = albums[i];

// если альбом не найден, то идет редирект на 2 сек, а иначе все отоброзит 
if (!album) {
  container.innerHTML = `Редирект черезь 2 секунд`;
  setTimeout(() => {
    window.location.pathname = `index.html`;
  }, 2000);
  
} else {
  container.innerHTML = `
    <div class="card mb-3">
    <div class="row">
      <div class="col-4">
        <img src="${album.img}" alt="" class="img-fluid rounded-start">
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">${album.titel}</h5>
          <p class="card-text">${album.description}</p>
          <p class="card-text"><small class="text-muted">${album.year}</small></p>
        </div>
      </div>
    </div>
  `;

// проигрователи


  let traks = album.traks;
  for (let i = 0; i < traks.length; i++) {
      let trak = traks[i];
      playlist.innerHTML += `
      <li class="list-group-item d-flex align-items-center">
      <img src="assets/icon-play.png" alt="" height="30px" class="me-3">
      <div>
      <div>${trak.titel}</div>
      <div>${trak.author}</div>
      </div>
      <div class="ms-auto">${trak.time}</div>
      </li>
      `;
  }
}