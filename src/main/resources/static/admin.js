//admin behörigiheter:
const adminClass = document.getElementsByClassName("adminClass")[0];

let showLoggedIn = document.createElement("span");
showLoggedIn.className = "showLoggedIn";
showLoggedIn.textContent = "Admin is logged in";

let logoutBtn = document.createElement("button");
logoutBtn.className = "logoutBtn";
logoutBtn.textContent = "Logga ut";

//funktion, visa/ta bort text admin inloggad.
function displayAdminLoggedIn(){
    if (localStorage.getItem("loggedIn") === "true") {
        adminClass.appendChild(showLoggedIn);
        adminClass.appendChild(logoutBtn);
        }
    else {
        showLoggedIn.remove();
        logoutBtn.remove();
    }
}
displayAdminLoggedIn();

//logga ut knapp, tar bort admin ifrån local storage.
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    displayAdminLoggedIn();
});