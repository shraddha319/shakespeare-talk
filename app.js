let inputTxt = document.querySelector(".text-input");
let outputTxt = document.querySelector(".text-output");
let btnTranslate = document.querySelector(".btn-translate");

let url = "https://api.funtranslations.com/translate/shakespeare.json";

btnTranslate.addEventListener("click", function onClickHandler() {

    function getRequestUrl(url, text) {
        return url + "?text=" + text;
    }

    function errorHandler(error) {
        alert("Something went wrong: "+ error);
    }

    let userTxt = inputTxt.value;
    fetch(getRequestUrl(url, userTxt))
    .then(res => res.json())
    .then(json => outputTxt.innerText = json.contents.translated)
    .catch(errorHandler);
});
