function openFaq(n) {
    var item = document.getElementsByClassName("answer");
    var arrow = document.getElementsByClassName("arrow")
    for (var i = 0; i < item.length; i++) {
        item[n].classList.toggle("d-none")
    }
    for (var i = 0; i < arrow.length; i++) {
        if (arrow[n].src.match("down")) {
            arrow[n].src = "imgs/faq/up-arrow.png";
        } else if (arrow[n].src.match("up")) {
            arrow[n].src = "imgs/faq/down-arrow.png";
        }
    }

}