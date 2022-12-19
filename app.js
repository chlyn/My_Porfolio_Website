(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.querySelectorAll(".designs .design img").forEach(design =>{
    design.onclick = () =>{
        document.querySelector(".illustrator-popUp").style.display = 'block';
        document.querySelector(".illustrator-popUp img").src = design.getAttribute('src');
    }
});

document.querySelectorAll(".illustrator-popUp span").onclick = () =>{
    document.querySelector(".illustrator.popUp").style.display = 'none';
}