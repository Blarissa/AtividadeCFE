//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(0, 0, 'smooth');
}
//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }    
}
//Ativar alert no botão cadastrar
