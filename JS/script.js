const loginCombos = {
    nat: "natpass",
    dog: "dogpass",
    cat: "catpass",
    clown: "clownpass",
};

function validate(event) {
    console.log("submit", event);
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userExists = loginCombos.hasOwnProperty(username);
    const rightPass = loginCombos[username] === password;

    if (userExists && rightPass) {
        alert("Login Successful");
        window.location.href = "https://ambitious-field-04a184b03.2.azurestaticapps.net/";
    } else {
        alert(
        "Sorry, your username or password was incorrect. Please double-check your login information and try again."
        );
    }
}