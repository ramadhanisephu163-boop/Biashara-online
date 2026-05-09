function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Hapa tumeweka password rahisi kwa ajili ya majaribio
    if (user === "admin" && pass === "1234") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard").style.display = "flex";
        document.getElementById("user-display").innerText = user.toUpperCase();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

function logout() {
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("dashboard").style.display = "none";
    // Safisha fomu
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
