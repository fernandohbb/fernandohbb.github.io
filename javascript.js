function checkBox() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
     function limparTexto(){
     var limpar = document.querySelector("#dividir")
     limpar.value = '';
     location.reload();
     }
     function copiarTextoDividido (idDoTd){
        var td = document.querySelector("#" + idDoTd );
        console.log(idDoTd,td);
        navigator.clipboard.writeText(td.innerText);
     }
     function dividirTexto(){
     var slides = [];
     var textoUsuario = document.querySelector('#dividir').value
     while (textoUsuario.trim().length > 0) {
     var textoSlide = textoUsuario.substring(0,385);
     var ultimaLinha = textoSlide.substring(310);     
     var indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 1') ;
     if(ultimaLinha.indexOf(' 1')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 2');
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 3') ;
     }
      if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1  ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 4') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 5') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 6') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1  ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 7') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 8') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 && ultimaLinha.indexOf(' 8')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 9') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 && ultimaLinha.indexOf(' 8')=== -1 && ultimaLinha.indexOf(' 9')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('. ') ;
     }          
     if(ultimaLinha.indexOf('. ')===-1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('?') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('!') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(':') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1){
        indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(';') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1 && ultimaLinha.indexOf(';')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(',');
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1 && ultimaLinha.indexOf(';')=== -1 && ultimaLinha.indexOf(',')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' ');
     }    
     console.log({ultimaLinha})
     textoSlide = textoUsuario.substring(0,indicePontoTextoUsuario +1);
     textoUsuario = textoUsuario.substring(indicePontoTextoUsuario +1);
     slides.push(textoSlide.trim());
     }
     slides.forEach(texto => console.log(texto));
     //slides.forEach(texto => document.write(texto + '<br><br><hr>' ));
     //Esse é igual o de cima;
     for(let i = 0; i < slides.length; i++){
         var texto = slides[i];
         var tbody = document.querySelector("#tbody")
         var tr =  document.createElement("tr");
         tr = tbody.insertRow();
     
         var tdQnt = tr.insertCell();
         var tdTexto = tr.insertCell();
         var tdBotaoCopiar = tr.insertCell();
         tdQnt.innerHTML = i + 1
         tdTexto.id = "tdDividido" + (i +1);
         var btn = document.createElement("button");
    btn.onclick = function (){ copiarTextoDividido("tdDividido" + (i + 1))};
    btn.innerText = "copiar";
     tdBotaoCopiar.appendChild(btn);
    tdTexto.innerHTML = texto;
     }
    //tdBotaoCopiar.innerHTML =  "<button id=\"btnCopiarTexto\" onClick=\"copiarTextoDividido()\">Copiar</button>";
     //console.log(textoSlide)
    }
    dividirTexto();            