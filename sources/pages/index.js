async function getWorks() {
  try {
    const response = await fetch('http://localhost:5678/api/works'); // Attend la résolution de la promesse
    const data = await response.json(); // Attend la résolution de la promesse

    const gallery = document.querySelector('.gallery');
    // console.log(data);
    data.forEach(work => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      image.src = work.imageUrl; // Chemin de l'image du travail
      image.alt = work.title; // Texte alternatif de l'image
      figcaption.textContent = work.title; // Titre du travail

      figure.appendChild(image);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
}



//Afficher tous les works
const btnTous = document.querySelector('.btn-all');
btnTous.addEventListener('click', function () {
  const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie
  getWorks();
});

//Afficher tous les objets
const btnObjet = document.querySelector('.btn-object');
btnObjet.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtrer les travaux ayant la catégorie "Objets"
    const filteredWorks = data.filter(work => work.category.name === 'Objets');

    // Parcourir les travaux filtrés et créer les éléments HTML correspondants
    filteredWorks.forEach(work => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      image.src = work.imageUrl; // Chemin de l'image du travail
      image.alt = work.title; // Texte alternatif de l'image
      figcaption.textContent = work.title; // Titre du travail

      figure.appendChild(image);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
});

//Afficher tous les appartements
const btnFlat = document.querySelector('.btn-flat');
btnFlat.addEventListener('click', async () => {
  try {
    // Effectue une requête à l'API pour récupérer les travaux
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json(); // Convertit la réponse en JSON

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtre les travaux pour ne garder que ceux ayant la catégorie "Objets"
    const filteredWorks = data.filter(work => work.category.name === 'Appartements');

    filteredWorks.forEach(work => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      image.src = work.imageUrl; // Chemin de l'image du travail
      image.alt = work.title; // Texte alternatif de l'image
      figcaption.textContent = work.title; // Titre du travail

      figure.appendChild(image);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });

    // Affiche les travaux filtrés
    // console.log(filteredWorks);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
});

//Afficher tous les appartements
const btnHotel = document.querySelector('.btn-hotel');
btnHotel.addEventListener('click', async () => {
  try {
    // Effectue une requête à l'API pour récupérer les travaux
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json(); // Convertit la réponse en JSON

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtre les travaux pour ne garder que ceux ayant la catégorie "Objets"
    const filteredWorks = data.filter(work => work.category.name === 'Hotels & restaurants');


    filteredWorks.forEach(work => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      image.src = work.imageUrl; // Chemin de l'image du travail
      image.alt = work.title; // Texte alternatif de l'image
      figcaption.textContent = work.title; // Titre du travail

      figure.appendChild(image);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
});

function editImg() {
  const userToken = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');
  const buttonContainer = document.getElementById('edit-img');

  if (userToken && userId) {
    console.log('Utilisateur connecté');

    const modifyLink = document.createElement('a');
    const modifyIcon = document.createElement('i');
    modifyIcon.classList.add('fa-sharp', 'fa-regular', 'fa-pen-to-square');
    modifyLink.textContent = 'Modifier';
    modifyLink.href = '#'; // Mettre ici le lien ou l'action désirée pour modifier
    modifyLink.appendChild(modifyIcon);
    buttonContainer.appendChild(modifyLink);
  } else {
    console.log('Aucun utilisateur connecté');
  }
}
function editGallery() {
  const userToken = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');
  const buttonContainer = document.getElementById('edit-gallery');

  if (userToken && userId) {
    console.log('Utilisateur connecté');

    const modifyIcon = document.createElement('i');
    const modifyLink = document.createElement('a');
    modifyIcon.classList.add('fa-sharp', 'fa-regular', 'fa-pen-to-square');
    modifyLink.textContent = 'Modifier';
    modifyLink.href = '#'; // Mettre ici le lien ou l'action désirée pour modifier
    modifyLink.appendChild(modifyIcon);
    buttonContainer.appendChild(modifyLink);
  } else {
    console.log('Aucun utilisateur connecté');
  }
}

// Appel de la fonction pour récupérer et afficher les travaux
getWorks();
editGallery();
editImg();
