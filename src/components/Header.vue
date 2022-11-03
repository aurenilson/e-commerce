<template uk-container>
    <div>
        <div class= "uk-text-center uk-background-primary">
            <div class="uk-width-1-4 uk-align-right uk-inline">
                <div class="uk-width-1-4"><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Home</a></div>
                <div class="uk-width-1-4"><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Cadastro</a></div>
                <div class="uk-width-1-4 uk-inline">
                    <a class="uk-text-secondary uk-text-decoration-none" href="/"><span uk-icon="user"></span></a>
                    <div uk-dropdown="mode:click">
                        <h6 class="uk-text-secondary uk-text-decoration-none uk-button-text"><span uk-icon="user"></span> Perfil</h6>
                        <h6 class="uk-text-secondary uk-text-decoration-none uk-button-text"><span uk-icon=""></span> Pedidos</h6>
                        <h6 class="uk-text-secondary uk-text-decoration-none uk-button-text"><span uk-icon=""></span> Trocar Senha</h6>
                        <h6 class="uk-text-secondary uk-text-decoration-none uk-button-text"><span uk-icon="sign-out"></span> Sair</h6>
                    </div>
                </div>
            </div>
            <div class="uk-width-1-4"><img src="/img/parque_das_palmeiras.png" alt="Logo do site"></div>
            
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