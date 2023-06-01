// Fonction pour récupérer et afficher les travaux
async function getWorks() {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

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

// Fonction pour afficher tous les works
const btnTous = document.querySelector('.btn-all');
btnTous.addEventListener('click', function () {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Efface le contenu actuel de la galerie
  getWorks();
});

// Fonction pour afficher les objets
const btnObjet = document.querySelector('.btn-object');
btnObjet.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtrer les travaux ayant la catégorie "Objets"
    const filteredWorks = data.filter(work => work.category.name === 'Objets');

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

// Fonction pour afficher les appartements
const btnFlat = document.querySelector('.btn-flat');
btnFlat.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtrer les travaux ayant la catégorie "Appartements"
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
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
});

// Fonction pour afficher les hôtels et restaurants
const btnHotel = document.querySelector('.btn-hotel');
btnHotel.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json();

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface le contenu actuel de la galerie

    // Filtrer les travaux ayant la catégorie "Hotels & restaurants"
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

// Fonction pour gérer la modification de la galerie
function editGallery() {
  const userToken = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');
  const buttonContainer = document.getElementById('edit-gallery');
  const bannerContainer = document.querySelector('.banner')

  if (userToken && userId) {
    console.log('Utilisateur connecté');

    bannerContainer.classList.add('banner-visible')

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

  // Écouteur d'événements pour afficher la fenêtre modale
  const modifyLink = buttonContainer.querySelector('a');
  modifyLink.addEventListener('click', openModal);

  function openModal(event) {
    event.preventDefault();
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.add('visible');
  }


}

// Appel des fonctions pour récupérer et afficher les travaux, et gérer la modification de la galerie
getWorks();
editGallery();
