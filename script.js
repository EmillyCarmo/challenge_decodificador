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
      var displaySetting = copiar.style.display;
      var btnEncriptar = document.getElementById('encriptando');
      if (displaySetting == 'block') {
        // clock is visible. hide it
        copiar.style.display = 'block';
      }
      else {
        // clock is hidden. show it
        copiar.style.display = 'block';
      }
}

function encriptar(stringEncriptada) {

    let codigoMatriz = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let index = 0; index < codigoMatriz.length; index++) {
      if(stringEncriptada.includes(codigoMatriz[index][0])) {
          stringEncriptada = stringEncriptada.replaceAll(codigoMatriz[index][0], codigoMatriz[index][1]);
      }
    }
      return stringEncriptada;
}



function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

    var placeholder = document.getElementById('placeholder');
      if (placeholder.style.display === 'hidden') {
          placeholder.style.display = 'hidden';
      } else {
        placeholder.style.display = 'hidden';
    }
}
    
function desencriptar(stringDesencriptada) {
    
    let codigoMatriz = [["." , ".."] , ["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
      for (let index = 1; index < codigoMatriz.length; index++) {
        if(stringDesencriptada.includes(codigoMatriz[index][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(codigoMatriz[index][1], codigoMatriz[index][0]);
        }
      }
        return stringDesencriptada;
}

function btnCopiar() {
    var copyText = document.getElementById("mensagem");
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("Tooltip");
    tooltip.innerHTML = "Copiado";
}  

function toolTip() {
  var tooltip = document.getElementById("Tooltip");
  tooltip.innerHTML = "copiado";
}