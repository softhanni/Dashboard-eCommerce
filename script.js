
document.querySelector("#more").addEventListener("click", () => {

    let sidebar = document.querySelector(".side-bar")

    sidebar.style.left = "0";
    sidebar.style.transition = "all .5s";

    document.querySelector("#change-icon").className = "fa-solid fa-xmark";

    let blur = document.querySelector(".blur")
    blur.style.display = "block";

});

document.querySelector("#change-icon").addEventListener("click", () => {

    let sidebar = document.querySelector(".side-bar")

    sidebar.style.left = "-300px";
    sidebar.style.transition = "all .5s";

    let blur = document.querySelector(".blur")
    blur.style.display = "none";

});


let blurDiv = document.querySelector(".blur")

blurDiv.addEventListener("click", () => {


    let sidebar = document.querySelector(".side-bar")

    sidebar.style.left = "-300px";
    sidebar.style.transition = "all .5s";

    document.querySelector(".blur").style.display = "none";

})

