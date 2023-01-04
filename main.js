const homepage = document.getElementById("homepage");
const about = document.getElementById("about");
const project = document.getElementById("project");
const work = document.getElementById("work");


document.addEventListener("DOMContentLoaded", function(event){
    var btnContainer = document.getElementById("parent");
    var btns = btnContainer.getElementsByClassName("btn");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    homepage.addEventListener('mouseenter', (e) => {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("href").replace("#", "") === "homepage") {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                btns[i].className += " active";             
            }
        }
    })

    about.addEventListener('mouseenter', (e) => {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("href").replace("#", "") === "about") {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                btns[i].className += " active";             
            }
        }
    })

    project.addEventListener('mouseenter', (e) => {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("href").replace("#", "") === "project") {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                btns[i].className += " active";             
            }
        }
    })

    work.addEventListener('mouseenter', (e) => {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("href").replace("#", "") === "work") {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                btns[i].className += " active";             
            }
        }
    })
})


