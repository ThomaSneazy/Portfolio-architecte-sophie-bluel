const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });


  if (response.ok) {
    const data = await response.json();
    // La connexion est réussie, rediriger l'utilisateur vers la page d'accueil
    window.location.href = './index.html';
    // La connexion est réussie, vous pouvez changer le bouton de connexion en bouton de déconnexion
    const btnLogin = document.getElementById('login-link');
    btnLogin.textContent = 'logout';

    // Ajouter les informations de connexion aux localStorage
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('userId', data.userId);


    console.log('Utilisateur connecté avec succès :', data);
  } else {
    const errorData = await response.json();
    const errorElement = document.getElementById('login-error');
    errorElement.textContent = errorData.message;
  }
});
