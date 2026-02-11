const alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "~`#$!@%^&*()-_+={}[]|:;<>.?/";
const lengthInput = document.getElementById("length-input");
const alphaCheck = document.getElementById("check-alpha");
const symCheck = document.getElementById("check-symbols");
const genBtn = document.getElementById("gen-btn")

genBtn.addEventListener ('click',() => {
    let characters="0123456789"
    if (alphaCheck.checked) characters+=alphas;
    if (symCheck.checked) characters+=symbols;
    let len = lengthInput.value;
    let pass = "";
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    document.getElementById("pw-1").textContent = pass;
    document.getElementById("pw-2").textContent = pass;
})
