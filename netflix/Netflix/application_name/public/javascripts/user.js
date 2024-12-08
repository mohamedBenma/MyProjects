
let description;
let price;
let username;
let items;
let currentBudget
let currentName
let currentId;
let sellerId;
let t;
let objectSelledPrice;
let button;
let itemId;
let photo;


const setup = () => {
  //document.getElementById('buy').style.visibility="hidden";
  initialiseUserData()
  description = document.getElementById("objectDescription");
  price = document.getElementById("price")
  username = document.getElementById('username');
  items = document.getElementById('items');
  photo = document.getElementById('productPhoto');
  //document.getElementById('buy').addEventListener('click', objectData);
}
window.addEventListener('DOMContentLoaded', setup);
const initialiseUserData = async () => {
  const body = JSON.stringify();
  const requestOptions = {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: body
  };
  const htmlUpdate = () => {
    document.getElementById('name').innerHTML = currentName
  }
  const response = await fetch('/user/me', requestOptions);
  if (response.ok) {
    const updatedUser = await response.json();
    console.log(updatedUser)
    currentName = updatedUser.login
    console.log(currentName)
    currentId = updatedUser.userId
    currentBudget = updatedUser.budget
    htmlUpdate()
  }
  else {
    const error = await response.json()
    handleError(error);
  }
}
const handleError = error => {
  if (error.redirectTo)
    window.location.href = error.redirectTo;
  else
    console.log(`erreur : ${error.message}`);
}


