const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Username" && password === "CPI101") {
       location.replace("FinalMainWebpage.html");
    } else {
        window.alert("Incorrect Username or Password please try again");
    }
})

