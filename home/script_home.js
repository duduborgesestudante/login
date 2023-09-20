let usuario = JSON.parse(localStorage.getItem("logado"))
document.getElementById("titulo").innerHTML= "Bem-Vindo " + usuario.login+" !"
function deslogar(){
    window.location.href = "../index.html"
}