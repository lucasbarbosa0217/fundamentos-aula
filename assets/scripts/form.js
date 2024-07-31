let form = document.getElementById("form");
let nomeInput = document.getElementById("nomeInput");
let erroNome = document.getElementById("erroNome");
let mensagemInput = document.getElementById("mensagemInput");
let erroMensagem = document.getElementById("erroMensagem");
let emailInput = document.getElementById("emailInput");
let erroEmail = document.getElementById("erroEmail");
let mapa = document.getElementById("mapa");

function enviar(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    let isNomeValid = validarNome();
    let isEmailValid = validarEmail();
    let isMensagemValid = validarMensagem();

    console.log(data)

    if(isEmailValid, isNomeValid, isMensagemValid){
        alert("Dados enviados!")

    }

}

function validarNome(nome) {
    if (nome == null) {
        nome = nomeInput.value;
    }
    if (nome.length < 4) {
        erroNome.style.display = "inherit"
        erroNome.innerHTML = "O nome precisa ter pelo menos 4 caracteres"
        return false;
    } else {
        erroNome.style.display = "none";
        return true;
    }
}


function validarMensagem(mensagem) {
    if (mensagem == null) {
        mensagem = mensagemInput.value;
    }
    if (mensagem.length < 10) {
        erroMensagem.style.display = "inherit"
        erroMensagem.innerHTML = "A mensagem  precisa ter pelo menos 10 caracteres"
        return false;
    } else {
        erroMensagem.style.display = "none";
        return true;
    }
}


function validarEmail(email){
    if (email == null) {
        email = emailInput.value;
    }

    let erro = false;
    let mensagensErro = "";

    if(email.includes("@") === false){
        mensagensErro += "<p>O email precisa ter um @</p>";
        erro = true;
    }
    if(email.includes(".") === false){
        mensagensErro += "<p>O email precisa ter um .</p>";
        erro = true;
    }

    if(erro){
        erroEmail.style.display = "inherit";
        erroEmail.innerHTML = mensagensErro;
        return false;
    } else {
        erroEmail.style.display = "none";
        erroEmail.innerHTML = "";
        return true;
    }
}


function hover(){
    mapa.style.width = "100%"
}

function hoverCancel() {
    mapa.style.width = "70%"
}