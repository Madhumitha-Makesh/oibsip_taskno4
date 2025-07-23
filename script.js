function showRegister() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('registerContainer').style.display = 'block';
}

function showLogin() {
  document.getElementById('registerContainer').style.display = 'none';
  document.getElementById('loginContainer').style.display = 'block';
}

function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  
  if(username && password) {
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registered successfully!');
    showLogin();
  } else {
    alert('Please enter username and password.');
  }
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));
  
  if(storedUser && username === storedUser.username && password === storedUser.password) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('welcomeContainer').style.display = 'block';
    document.getElementById('welcomeUser').textContent = `Hello, ${username}!`;
  } else {
    alert('Invalid username or password.');
  }
}

function logout() {
  document.getElementById('welcomeContainer').style.display = 'none';
  showLogin();
}
