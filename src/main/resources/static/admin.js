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
let memberForm = document.getElementById("memberForm");


//Loggar in admin när rätt uppgifter anges. Tar bort admin funktioner för icke admin.
function adminLoggedIn(){
    if (localStorage.getItem("loggedIn") === "true") {
        adminClass.appendChild(showLoggedIn);
        adminClass.appendChild(logoutBtn);
        }
    else {
        showLoggedIn.remove();
        logoutBtn.remove();
        for (let i = 0; i < removeMember.length; i++){
            removeMember[i].textContent = "";
        }
        if (memberForm){
            memberForm.remove();
        }
    }
}
adminLoggedIn();

//länkar logga ut knapp med: ta bort admin ifrån local storage.
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    adminLoggedIn();
    location.reload();
});



