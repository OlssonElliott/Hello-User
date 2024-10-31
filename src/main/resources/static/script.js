//endast för admin.html

//login knapp, lägger till admin i local storage.
const loginBtn = document.getElementById("loginBtn");
if (loginBtn){
    loginBtn.addEventListener("click", () => {
        let loginName = document.getElementById("name").value;
        let loginPassword = document.getElementById("password").value;
        let loginMessage = document.getElementById("loginMessage");
        console.log("Login attempt:", loginName, loginPassword);
        
        if (loginName === "admin" && loginPassword === "admin"){
            console.log("FUNKAR")
            localStorage.setItem("loggedIn", "true");
            loginMessage.textContent = "SUCCESS";
            adminLoggedIn();
        }
        else { loginMessage.textContent = "WRONG USERNAME OR PASSWORD"};
    });
}