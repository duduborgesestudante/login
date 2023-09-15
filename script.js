const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("senha")
const campoNovoLogin = document.getElementById("login-cad")
const campoSenhaLogin = document.getElementById("senha-cad")
const campoSenhaConfirme = document.getElementById("senha-rep")

let usuarios = []

function cadastrar(){
    if(campoSenhaLogin.value == campoSenhaConfirme.value){
        let usuario = {
            login : campoNovoLogin.value,
            senha : campoSenhaLogin.value,
        }
        usuarios.push(usuario);
        alert("Usuario cadastrado com sucesso")

}
else{
    alert("Voce digitou duas senhas diferentes")
}
}

function login(){
    let mensagem = "Usuário ou senha incorreta!"
    for(let usuario of usuarios){
        if(usuario.login == campoLogin.value && usuario.senha == campoSenha.value){
            mensagem = "Logado com sucesso!"
            break
        }
    }
    alert(mensagem)
}
