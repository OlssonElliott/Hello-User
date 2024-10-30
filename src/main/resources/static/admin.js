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
let adminLink = document.getElementsByClassName("adminLink");



//Loggar in admin när rätt uppgifter anges. Tar bort admin funktioner för icke admin.
function adminLoggedIn(){
    if (localStorage.getItem("loggedIn") === "true") {
        adminClass.appendChild(showLoggedIn);
        adminClass.appendChild(logoutBtn);
        for (let i = 0; i < adminLink.length; i++){
            adminLink[i].style.display = "inline";
        }
        }
    else {
        if (showLoggedIn){showLoggedIn.remove();}
        if (logoutBtn){logoutBtn.remove();}
        if (memberForm) {memberForm.remove();}
            for (let i = 0; i < removeMember.length; i++){
                removeMember[i].textContent = "";
            }

            for (let i = 0; i < adminLink.length; i++){
                adminLink[i].style.display = "none";
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



