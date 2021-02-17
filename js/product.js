function openVideo() {
    var openV = document.querySelector(".video");
    openV.style.display = "block";
}

function closeVideo() {
    var closeV = document.querySelector(".video");
    closeV.style.display = "none";
}

function openModal() {
    var mod = document.querySelector("#generate-code");
    var main = document.querySelector(".prod-sect");
    var foot = document.querySelector("footer");
    mod.style.display = "flex";
    foot.style.display = "none";
    if (screen.width > 900) {
        main.style.display = "block";
    } else {
        main.style.display = "none";
    }
}

function closeModal() {
    var mod = document.querySelector("#generate-code");
    var main = document.querySelector(".prod-sect");
    var foot = document.querySelector("footer");
    mod.style.display = "none";
    main.style.display = "block";
    foot.style.display = "flex";
}