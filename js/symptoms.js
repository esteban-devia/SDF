var slideIndexS = 1;
showSlidesS(slideIndexS);

function nextSlide(n) {
    showSlidesS(slideIndexS += n);
}

function openSymptoms(n) {
    var symptomSection = document.querySelector(".symptom");
    var symptomGrid = document.querySelector(".symptomsgrid");
    symptomSection.style.display = "flex";
    if (screen.width <= 900) {
        symptomGrid.style.display = "none";

    }
    showSlidesS(slideIndexS = n);
}

function showSlidesS(n) {
    var i;
    var slidesS = document.getElementsByClassName("symp-desc");
    if (n > slidesS.length) {
        slideIndexS = 1
    }
    if (n < 1) {
        slideIndexS = slidesS.length
    }
    for (i = 0; i < slidesS.length; i++) {
        slidesS[i].style.display = "none";
    }
    slidesS[slideIndexS - 1].style.display = "flex";
}

function moveToLeft() {
    var card = document.querySelector(".cards");
    if (screen.width <= 1920 && screen.width > 1440) {
        card.style.marginTop = "12.2%";
        card.style.marginLeft = "-24em";
    }
    if (screen.width <= 1440 && screen.width > 1366) {
        card.style.marginTop = "13%";
        card.style.marginLeft = "-24em";
    }
    if (screen.width <= 1366 && screen.width > 1112) {
        card.style.marginTop = "10%";
        card.style.marginLeft = "-24em";
    }
    if (screen.width <= 1112 && screen.width > 900) {
        card.style.marginLeft = "-12em";
        card.style.marginTop = "15.5%";
    }
}

function moveToRight() {
    var card = document.querySelector(".cards");
    card.style.marginLeft = "0";
    if (screen.width <= 1920 && screen.width > 1366) {
        card.style.marginTop = "10%";
    }
    if (screen.width <= 1366 && screen.width > 1112) {
        card.style.marginTop = "7.5%";
    }
    if (screen.width <= 1112 && screen.width > 900) {
        card.style.marginTop = "13%";
    }
}

function closeSymptoms() {
    var symptomSection = document.querySelector(".symptom");
    symptomSection.style.display = "none";
}