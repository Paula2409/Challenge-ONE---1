function encript(){
    let tildes = /[ÁÉÍÓÚáéíóú]/;

    let input = document.getElementById("inputToEncript").value.toLowerCase();

    if (tildes.test(input)){
        alert("El mensaje no puede contener tildes")
    } else if (input == ""){
        alert('El campo no puede estar vacio');
    } else if (document.getElementById("inputToEncript").value.match(/^[A-Za-z ]/)){
    
        let inputEnc = input.replaceAll('e', 'enter')
        .replaceAll('i','imes')
        .replaceAll('a','ai')
        .replaceAll('o','ober')
        .replaceAll('u','ufat');

        document.getElementById("inputToDesencript").innerHTML = inputEnc;
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("muñeco_texto").style.display = "none";

    } else{
        alert("El mensaje no puede contener caracteres especiales");
    }

}

function desencript(){
    let inputDes = document.getElementById("inputToEncript").value.toLocaleLowerCase();
    let inputDesencript = inputDes.replaceAll('enter', 'e')
        .replaceAll('imes','i')
        .replaceAll('ai','a')
        .replaceAll('ober','o')
        .replaceAll('ufat','u');
    document.getElementById("inputToDesencript").innerText = inputDesencript;
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("muñeco_texto").style.display = "none";
}

function copy(){
    let inputCopy = document.getElementById("inputToDesencript"); 
    inputCopy.select(); // Selecciona el elemento en ese texto.
    document.execCommand("copy");
    alert("El mensaje se copio correctamente")
}

