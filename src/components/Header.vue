<template uk-container>
    <div>
        <div class= "uk-text-center">
            <div class="uk-width-1-4" ><img src="/img/parque_das_palmeiras.png" alt="Logo do site"></div>
            <div class="uk-width-1-4"><a href="/">Home</a></div>
            <div class="uk-width-1-4"> <a href="/">Cadastro</a></div>
            
            <!-- Dá pra fazer os links com esse RouterLink -->
            <!-- Os caminhos para as páginas estão no index.js da pasta router, é o path de cada um.-->
            <RouterLink to="/checkout">Checkout</RouterLink> 

        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>