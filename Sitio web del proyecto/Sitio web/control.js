const mainDiv = document.getElementById("main");
const infoDiv = document.getElementById("infoDiv");
const question = document.getElementById("question");
const infoSi = document.getElementById("infoSi");
const infoNo = document.getElementById("infoNo");
const infoTalvez = document.getElementById("infoTalvez");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const btnTalvez = document.getElementById("btnTalvez");

const btnRetroceso = document.getElementById("btnRetroceso");
const btnComprar = document.getElementById("btnComprar");

function showElement(element) {
    if (element) {
        element.style.display = "block";
    }
}

function hideElement(element) {
    if (element) {
        element.style.display = "none";
    }
}

btnSi.addEventListener("click", function() {
    hideElement(question);
    hideElement(mainDiv);
    showElement(infoDiv);
    showElement(infoSi);
    hideElement(infoNo);
    hideElement(infoTalvez);
});

btnNo.addEventListener("click", function() {
    hideElement(question);
    hideElement(mainDiv);
    showElement(infoDiv);
    hideElement(infoSi);
    showElement(infoNo);
    hideElement(infoTalvez);
});

btnTalvez.addEventListener("click", function() {
    hideElement(question);
    hideElement(mainDiv);
    showElement(infoDiv);
    hideElement(infoSi);
    hideElement(infoNo);
    showElement(infoTalvez);
});


btnRetroceso.addEventListener("click", function() {
    showElement(question);
    showElement(mainDiv);
    hideElement(infoDiv);
    hideElement(infoSi);
    hideElement(infoNo);
    hideElement(infoTalvez);
});

btnComprar.addEventListener("click", function() {
    alert("¡Información enviada a la ESP32 para comprar!");
    
    // Volver a la página de inicio
    showElement(question);
    showElement(mainDiv);
    hideElement(infoDiv);
    hideElement(infoSi);
    hideElement(infoNo);
    hideElement(infoTalvez);
});
