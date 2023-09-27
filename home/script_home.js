let usuario = JSON.parse(localStorage.getItem("logado"))
document.getElementById("titulo").innerHTML= "Bem-Vindo(a) " + usuario.login+"! "
function deslogar(){
    window.location.href = "../login.html"
}