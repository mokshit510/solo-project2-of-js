const alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "~`#$!@%^&*()-_+={}[]|:;<>.?/";
const lengthInput = document.getElementById("length-input");
const alphaCheck = document.getElementById("check-alpha");
const symCheck = document.getElementById("check-symbols");
function generate(){
    let characters="0123456789"
    if (alphaCheck.checked) characters+=alphas;
    if (symCheck.checked) characters+=symbols;
    let len = lengthInput.value;
    let pass = "";
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    return pass;
}
function render(){
    document.getElementById("pw-1").textContent = generate();
    document.getElementById("pw-2").textContent = generate();
}