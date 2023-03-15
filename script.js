function alertinha(){
    window.alert("Vamos ganhar na mega sena")
//alerta quando recarregar a pagina, dentro da funcao alertinha dar uma funcao com frase//
//DOM -> modelo documento de objeto o que liga o html ao java script//

}


let menu = document.getElementById("menu");
function mostrarmenu(){
    //se o menu nao estiver aparecendo ele ira aparecer//
    if(menu.style.display =="none"){
        menu.style.display ="flex";
    }
    // então se o menu estiver aparecendo ele ira aparecer//
    else{
        menu.style.display ="none";
    }
}
 //== identico =semelhante//

 let email = document.getElementById("campo-email");
 // vai aparecer uma telinha quando usuario cadastrar email//
 function enviarEmail(){
    let emailDigitado = email.value;
    //  email digitado e igual ao valor do input id ¨campo-email¨//
    console.log(emailDigitado);
 }