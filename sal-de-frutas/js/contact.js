document.addEventListener('invalid', (function() {
    return function(e) {
        e.preventDefault();
        validateContactForm();
    };
})(), true);

function validateContactForm() {
    var name = document.forms["contactForm"]["contactName"].value;
    var lastname = document.forms["contactForm"]["contactLastname"].value;
    var email = document.forms["contactForm"]["contactEmail"].value;
    var celphone = document.forms["contactForm"]["contactCelphone"].value;
    var idtype = document.forms["contactForm"]["contactIdtype"].value;
    var idnumber = document.forms["contactForm"]["contactIdnumber"].value;
    var help = document.forms["contactForm"]["help"].value;
    var comment = document.forms["contactForm"]["comment"].value;
    var tyc = document.forms["contactForm"]["tycContact"];
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var inputcontact = document.querySelectorAll(".textfieldcontact");
    var select = document.querySelectorAll(".selectcontact");
    var areafield = document.querySelector(".areatextfieldcontact");
    var errormesage = document.querySelectorAll(".errormesagecontact");
    var errorselect = document.querySelectorAll(".errorselectcontact");
    var errorcomment = document.querySelector(".errorcomment");
    var checkterms = document.querySelector(".checkContactterms");
    var validateInput = [name, lastname, email, celphone, idnumber];
    var validateSelect = [idtype, help];
    var count = 0;
    var invalid = 0;
    // VALIDATES INPUT NOT EMPTY
    if (comment === "") {
        areafield.classList.add("error");
        errorcomment.innerHTML = "Campo obligatorio";
        invalid = 1;
    } else {
        areafield.classList.remove("error");
        errorcomment.innerHTML = "&nbsp;";
        invalid = 0;
    }
    if (tyc.checked === false) {
        checkterms.classList.add("error");
        invalid = 1;
    } else {
        checkterms.classList.remove("error");
    }
    for (var i = 0; i < validateSelect.length; i++) {
        if (validateSelect[i] === "") {
            select[i].classList.add("error");
            errorselect[i].innerHTML = "Campo obligatorio";
            ++count
        } else {
            select[i].classList.remove("error");
            errorselect[i].innerHTML = "&nbsp;";
        }
    }
    for (var i = 0; i < validateInput.length; i++) {
        if (validateInput[i] === "") {
            inputcontact[i].classList.add("error")
            errormesage[i].innerHTML = "Campo obligatorio";
            ++count
        } else {
            if (i == 2) {
                if (mailformat.test(email) == false) {
                    errormesage[i].innerHTML = "Correo invalido";
                    inputcontact[i].classList.add("error");
                    return false
                }
            } else if (i == 3) {
                if (celphone.length !== 10) {
                    errormesage[i].innerHTML = "Debe tener 10 números";
                    inputcontact[i].classList.add("error");
                    return false
                }
            } else if (i == 4) {
                if (idnumber.length < 7 || idnumber.length > 10) {
                    errormesage[i].innerHTML = "Debe tener entre 7 y 10 números";
                    inputcontact[i].classList.add("error");
                    return false
                }
            }
            inputcontact[i].classList.remove("error");
            errormesage[i].innerHTML = "&nbsp;";
        }
    }
    if (count > 0 || invalid == 1) {
        return false
    } else {
        return true
    }

}