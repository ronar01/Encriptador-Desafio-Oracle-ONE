let listaCript = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let vogais = ['a', 'e', 'i', 'o', 'u']


function criptografar(){
    let texto = getTexto('area-texto');
    let textoCriptografado = ''
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i].toLowerCase(); // Converte o caractere para minúsculo para facilitar a comparação
        
        if (vogais.includes(caractere)) { // Verifica se o caractere é uma vogal
            let indiceVogal = vogais.indexOf(caractere); // Obtém o índice da vogal na lista de vogais
            textoCriptografado += listaCript[indiceVogal]; // Adiciona a criptografia correspondente ao texto criptografado
        } else {
            textoCriptografado += caractere; // Se não for uma vogal, mantém o caractere original
        }
    }
    document.getElementById('area-texto-output').value = textoCriptografado;
    document.getElementsByClassName('botao-copiar')[0].hidden = false;
}

function descriptografar(){
    let texto = getTexto('area-texto');
    for(i=0; i<5; i++){
        texto = texto.replaceAll(listaCript[i], vogais[i])
    }
    document.getElementById('area-texto-output').value = texto;
    document.getElementsByClassName('botao-copiar')[0].hidden = false;
}

function copiar(){
    let texto = getTexto('area-texto-output');
    console.log(texto);
    navigator.clipboard.writeText(texto);
}

function getTexto(id){
    let texto =document.getElementById(id).value;
    return texto;
}