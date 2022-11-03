<template>
      <div>
         <div class="uk-container uk-background-primary">
               <img class="uk-align-right" src="/img/parque_das_palmeiras.png " alt="Logo do Parque">
            <ul class="uk-list uk-link-text uk-width-3-4">
               <li><RouterLink to="/Home" class="uk-text-secondary">Home</RouterLink></li>
               <li><RouterLink to="/Institucional" class="uk-text-secondary">Institucional</RouterLink></li>
               <li><RouterLink to="/Cookies" class="uk-text-secondary">Políticas de Cookies</RouterLink></li>
               <li><RouterLink to="/Privacidade" class="uk-text-secondary">Políticas de Privacidade</RouterLink></li>
            </ul>
         </div>
         <div class="uk-container uk-background-secondary">
            <div class="uk-margin-top">
               <div class="uk-text-center">Copyright &copy;2022, TODOS OS DIREITOS RESERVADOS. Todo o conteúdo do site, todas as fotos, imagens, conjunto imagem, layout, trade dress, aqui veiculados são meramente ilustrativas e de propriedade exclusiva do Grupo da tarde e de seus integrantes. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.</div>
            </div>
               <div class="uk-margin-top">
               <div class="uk-text-center">
                  <p>Powered By</p>
                  <img src="/img/imply-logo.jpg" width="150px" height="130px" alt="Logo da Imply">
               </div>
            </div>
         </div>
      </div>
</template>
<script>
   export default {
      name: 'Footer'
   }
</script>