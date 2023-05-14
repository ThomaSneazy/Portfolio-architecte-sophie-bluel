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

// Appel de la fonction pour récupérer et afficher les travaux
getWorks();
