<template>
    <div>
        <Header />
        <div class="wrapper">

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
        <Footer />
    </div>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
    components: {
        Header,
        Footer
    }
}
</script>