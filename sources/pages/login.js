// Sélectionner le formulaire et le bouton de connexion
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('button-login');

// Ajouter un gestionnaire d'événement au clic sur le bouton de connexion
loginButton.addEventListener('click', async () => {
  // Récupérer les valeurs des champs d'entrée
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Envoyer une demande de connexion à votre serveur
  const response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  // Traiter la réponse du serveur
  if (response.ok) {
    const data = await response.json();
    // La connexion est réussie, rediriger l'utilisateur vers la page d'accueil
    // window.location.href = './index.html';
    // La connexion est réussie, vous pouvez changer le bouton de connexion en bouton de déconnexion

    const btnLogin = document.getElementById('login-link');
    btnLogin.textContent = 'logout';
    console.log('Utilisateur connecté avec succès :', data);
  } else {
    // La connexion a échoué, afficher un message d'erreur
    const errorData = await response.json();
    const errorElement = document.getElementById('login-error');
    errorElement.textContent = errorData.message;
  }
});
