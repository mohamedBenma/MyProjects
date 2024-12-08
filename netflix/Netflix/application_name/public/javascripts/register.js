let userlogin;
let userpassword;

const setup = () => {
  userlogin = document.getElementById('userlogin');
  userpassword = document.getElementById('userpassword');
  document.getElementById('next1').addEventListener('click', () => register(false));
}
window.addEventListener('DOMContentLoaded', setup);

const register = async admin => {
  const userData = {
    login: userlogin.value,
    password: userpassword.value,
    admin: admin || false
  };
  console.log(`data : ${userData.admin}`);
  const body = JSON.stringify(userData);
  const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: body
  };
  const response = await fetch(`/access/register`, requestOptions);
  console.log(response.ok)
  if (response.ok) {
    console.log("user added")
    const createdUser = await response.json();
    console.log(`user registered : ${JSON.stringify(createdUser)}`);
    window.location.href = 'login.html';
  }
  else {
    window.alert("veuillez remplir tous les champs!")
    const error = await response.json();
    console.log(`erreur : ${error.message}`);
    document.getElementById('problem').textContent = `erreur : ${error.message}`;
  }
}
