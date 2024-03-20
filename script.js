const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";

    var placeholder = document.getElementById('placeholder');
      if (placeholder.style.display === 'none') {
          placeholder.style.display = 'hidden';
      } else {
          placeholder.style.display = 'none';
      }
      
    var copiar = document.getElementById('copiar');
      if (copiar.style.display === 'block') {
          copiar.style.display = 'hidden';
      } else {
          copiar.style.display = 'block';
      } 

      var tooltip = document.getElementById("Tooltip");
      tooltip.innerHTML = "Copiar";
}

function encriptar(stringEncriptada) {
  const resultado = stringEncriptada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

      return resultado;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

    var placeholder = document.getElementById('placeholder');
      if (placeholder.style.display === 'none') {
          placeholder.style.display = 'hidden';
      } else {
          placeholder.style.display = 'none';
      }
      
      
    var copiar = document.getElementById('copiar');
      if (copiar.style.display === 'block') {
          copiar.style.display = 'hidden';
      } else {
          copiar.style.display = 'block';
      } 

      var tooltip = document.getElementById("Tooltip");
      tooltip.innerHTML = "Copiar";

}
    
function desencriptar(stringDesencriptada) {
  const resultado = stringDesencriptada
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

      return resultado;
}



function btnCopiar() {
    var copyText = document.getElementById("mensagem");
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);


    var tooltip = document.getElementById("Tooltip");
    tooltip.innerHTML = "Copiado";
}  

