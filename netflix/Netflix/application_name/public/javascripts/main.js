let userMail;
const setup = () => {
    userpassword = document.getElementById('mail');
    document.getElementById('login').addEventListener('click', login);
    document.getElementById('start').addEventListener('click', start);
    userMail = document.getElementById('mail');
}
window.addEventListener('DOMContentLoaded', setup);
const start = async () => {
    console.log("login")
    const userData = { login: userMail.value };
    const body = JSON.stringify(userData);
    console.log("loginlogintest " + userData.login)
    const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: body
    };

    const response = await fetch(`/access/main`, requestOptions);
    if (response.ok) {
        console.log("reponse recue")
        const loggedUser = await response.json();
        console.log(loggedUser['login']);
        window.location.href = '/login.html';
    }
    else {
        window.location.href = '/registerFirstPage.html';
    }
}

