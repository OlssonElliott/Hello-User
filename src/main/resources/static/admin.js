//admin behörigiheter

//stående variabler
const adminClass = document.getElementsByClassName("adminClass")[0];

let showLoggedIn = document.createElement("span");
showLoggedIn.className = "showLoggedIn";
showLoggedIn.textContent = "Admin is logged in";

let logoutBtn = document.createElement("button");
logoutBtn.className = "logoutBtn";
logoutBtn.textContent = "Logga ut";

let removeMember = document.getElementsByClassName("removeMember");


//funktion, visa/ta bort text/knapp för admin inloggad.
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

//länkar logga ut knapp med: ta bort admin ifrån local storage.
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    displayAdminLoggedIn();
    location.reload();
});

//gömmer icke admin funktioner på hemsidan.

if (localStorage.getItem("loggedIn") !== "true"){
    for (let i = 0; i < removeMember.length; i++){
        removeMember[i].textContent = "";
    }
}