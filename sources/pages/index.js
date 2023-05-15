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
const btnTous = document.querySelector('.btn-all');
btnTous.addEventListener('click', function () {
  getWorks();
});

const btnObjet = document.querySelector('.btn-object');
btnObjet.addEventListener('click', async () => {
  try {
    // Effectue une requête à l'API pour récupérer les travaux
    const response = await fetch('http://localhost:5678/api/works');
    const data = await response.json(); // Convertit la réponse en JSON

    // Filtre les travaux pour ne garder que ceux ayant la catégorie "Objets"
    const filteredWorks = data.filter(work => work.category.name === 'Objets');

    // Affiche les travaux filtrés
    console.log(filteredWorks);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des works:', error);
  }
});

//Fonction pour ajouter les écouteurs d'événement aux boutons de filtrage
function setupFilterButtons() {
  const btnObjet = document.querySelector('.btn-object');
  const btnAppartement = document.querySelector('.btn-flat');
  const btnHotel = document.querySelector('.btn-hotel');


  // btnTous.addEventListener('click', () => {
  //   // Affiche tous les travaux
  //   // getWorks();

  // });

  // btnObjet.addEventListener('click', () => {
  //   // Filtre les travaux par catégorie "Objet"
  //   filterWorksByCategory('Objet');
  // });

  // btnAppartement.addEventListener('click', () => {
  //   // Filtre les travaux par catégorie "Appartement"
  //   filterWorksByCategory('Appartement');
  // });

  // btnHotel.addEventListener('click', () => {
  //   // Filtre les travaux par catégorie "Hôtel"
  //   filterWorksByCategory('Hôtel');
  // });
}

// Appel de la fonction pour récupérer et afficher les travaux
getWorks();
