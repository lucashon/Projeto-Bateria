const body =  document.getElementsByClassName('body')[0]
async function tudo(){
    body.innerHTML = `    <h1>Bateria Feita no SESI-SENAI</h1>
    <!-- INICIO DA CAIXA PRINCIPAL -->
  <div class="keys">
    <!-- INICIO DA DIV PRIMEIRA FILEIRA -->
    <div class="key" data-key="keyq">Q</div>
    <div class="key" data-key="keyw">W</div>
    <div class="key" data-key="keye">E</div>
   <!-- FIM DA DIV PRIMEIRA FILEIRA -->

   <!-- INICIO DA DIV SEGUNDA FILEIRA -->
      <div class="key" data-key="keya">A</div>
      <div class="key" data-key="keys">S</div>
      <div class="key" data-key="keyd">D</div>
  <!-- FIM DA DIV SEGUNDA FILEIRA -->

    <!-- INICIO DA DIV TERCEIRA FILEIRA -->
    <div class="key" data-key="keyz">Z</div>
    <div class="key" data-key="keyx">X</div>
    <div class="key" data-key="keyc">C</div>
   <!-- FIM DA DIV TERCEIRA FILEIRA -->    

  </div>
    <!-- FIM DA CAIXA PRINCIPAL  DA BATERRIA-->
   

     <!-- INICIO DA SEGUNDA CAIXA - COMPOSIÇÕES -->
   <div class="composer">
        <!-- INICIO CAIXA PARA INSERIR COMPOSIÇÕES -->
      <input type="text" id="input" placeholder="Faça sua composição">
      <button>Aplicar o ritmo</button>
       <!-- FIM CAIXA PARA INSERIR COMPOSIÇÕES -->
   </div>
     <!-- FIM DA SEGUNDA CAIXA - COMPOSIÇÕES -->

    <!-- INICIO DO RODAPÉ CAIXA DO FOOTER -->
   <footer>Desenvolvido por Lucas Honorio</footer>
     <!-- FIM DO RODAPÉ CAIXA DO FOOTER -->

  <!-- TAG DE AUDIO - IRÃO COMUNICAR COM JS --> 

   <!-- INICIO TAG DE AUDIO DA PRIMEIRA FILEIRA -->
   <audio src="./sounds/keyq.wav" id="s_keyq"></audio>
   <audio src="./sounds/keyw.wav" id="s_keyw"></audio>
   <audio src="./sounds/keye.wav" id="s_keye"></audio>
    <!-- FIMTAG DE AUDIO DA PRIMEIRA FILEIRA -->

   <!-- INICIO TAG DE AUDIO DA SEGUNDA FILEIRA -->
   <audio src="./sounds/keya.wav" id="s_keya"></audio>
   <audio src="./sounds/keys.wav" id="s_keys"></audio>
   <audio src="./sounds/keyd.wav" id="s_keyd"></audio>
    <!-- FIMTAG DE AUDIO DA SEGUNDA FILEIRA -->
    
   <!-- INICIO TAG DE AUDIO DA TERCEIRA FILEIRA -->
   <audio src="./sounds/keyz.wav" id="s_keyz"></audio>
   <audio src="./sounds/keyx.wav" id="s_keyx"></audio>
   <audio src="./sounds/keyc.wav" id="s_keyc"></audio>
    <!-- FIMTAG DE AUDIO DA TERCEIRA FILEIRA -->   `
}
tudo()

