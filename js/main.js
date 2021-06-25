let home = document.querySelector("#home");
let profil = document.querySelector("#profil");
let project = document.querySelector("#project");

window.addEventListener('scroll', ()=>{
    var windo = window.pageYOffset;
    if(profil.offsetTop <= windo && profil.offsetTop > windo){
        console.log("Home");
        document.querySelector(".home").setAttribute("id", "Active");
        document.querySelector(".profile").removeAttribute("id", "Active");
        document.querySelector(".project").removeAttribute("id", "Active");
    }
    else if(profil.offsetTop <= windo && project.offsetTop > windo){
        console.log("Profile");
        document.querySelector(".home").removeAttribute("id", "Active");
        document.querySelector(".profile").setAttribute("id", "Active");
        document.querySelector(".project").removeAttribute("id", "Active");
    }
    else if(project.offsetTop<=windo){
        console.log("Project")
        document.querySelector(".home").removeAttribute("id", "Active");
        document.querySelector(".profile").removeAttribute("id", "Active");
        document.querySelector(".project").setAttribute("id", "Active");
    }
    else{
        console.log("Home");
        document.querySelector(".home").setAttribute("id", "Active");
        document.querySelector(".profile").removeAttribute("id", "Active");
        document.querySelector(".project").removeAttribute("id", "Active");
    }
});