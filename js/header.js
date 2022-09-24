window.addEventListener("contextmenu", (e) => {
    e.preventDefault();   
}

function openMenu() {
    var menu = document.querySelector(".menu-list");
    var mob = document.querySelector(".mob");
    var ham = document.getElementById("menu-ham")
    var section = document.querySelectorAll(".menpos");

    if (menu) {
        menu.classList.replace("menu-list", "mob");
        for (var i = 0; i < section.length; i++) {
            section[i].style.position = "fixed"
            section[i].style.top = "5em"
        }
    } else if (mob) {
        mob.classList.replace("mob", "menu-list");
        for (var i = 0; i < section.length; i++) {
            section[i].style.position = "initial"
            section[i].style.top = "0"
        }
    }
    if (ham.src.match("ham")) {
        ham.src = "imgs/header/close-nav.png";

    } else {
        ham.src = "imgs/header/ham.png";
        for (var i = 0; i < section.length; i++) {
            section[i].style.position = "initial"
        }
    }
}

function openCountry() {
    var country = document.querySelector(".country-block");

    if (country.style.display === "flex") {
        country.style.display = "none";
    } else {
        country.style.display = "flex";
    }
}

function openCountryD() {
    var country = document.querySelector(".country-block-d");
    if (country.style.display === "flex") {
        country.style.display = "none"
    } else {
        country.style.display = "flex"
    }
}

function openProdReg() {
    var openfromsite = "prod";
    openRegister(openfromsite);
}

function openRegister(openfromsite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    var section = document.querySelectorAll(".menpos");
    var footer = document.querySelector("footer");
    mod.style.display = "flex";
    alertext.style.display = "none";
    if (openfromsite === "prod") {
        var product = document.querySelector(".prod-sect")
        product.style.display = "none";
    }
    if (screen.width <= 900) {
        footer.style.display = "none"
        for (var i = 0; i < section.length; i++) {
            section[i].style.display = "none";
        }
    }
}

function closeProdReg() {
    var closefromsite = "prod"
    closeReg(closefromsite)
}

function closeReg(closefromsite) {
    var mod = document.querySelector(".registry-form");

    mod.style.display = "none";
    if (closefromsite === "prod") {
        var product = document.querySelector(".prod-sect")
        product.style.display = "flex";
    }
}

function openProdAlert() {
    var fromsite = "prod";
    openAlertReg(fromsite);
}

function openAlertReg(fromsite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    var clsalert = document.querySelector(".close-reg");
    mod.style.display = "flex";
    alertext.style.display = "flex";
    clsalert.classList.add("closealert");
    if (fromsite === "prod") {
        var product = document.querySelector(".prod-sect")
        product.style.display = "none";
        if (screen.width <= 900) {
            var section = document.querySelectorAll(".menpos");
            var footer = document.querySelector("footer");
            footer.style.display = "none"
            for (var i = 0; i < section.length; i++) {
                section[i].style.display = "none";
            }
        }
    }
}

function closeProAlert() {
    var closesite = "prod"
    closeReg(closesite)
}

function closeAlertReg(closesite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    mod.style.display = "none";
    alertext.style.display = "none";
    if (closesite === "prod") {
        var product = document.querySelector(".prod-sect")
        product.style.display = "flex";
    }
}

function active() {
    var s = document.querySelector("#fname")
    s.classList.remove("d-none")

}
