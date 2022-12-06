function validate(event) {
    console.log("submit", event);
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if(username == ["username"] && password == ["password"]) {
        alert("Login Successful");
        window.location.href = "https://ambitious-field-04a184b03.2.azurestaticapps.net/";
    } else if (username == ["username1"] && password == ["password1"]) {
        alert("Login Successful");
        window.location.href = "https://sandrino.dev/blog/configuring-azure-app-service-oidc-auth0";
    } else {
        alert(
        "Sorry, your username or password was incorrect. Please double-check your login information and try again."
        );
    }    
        
}
