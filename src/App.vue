<template>
    <div>
        <Header />
        <Footer />
    </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"

export default {
    components: {
        Footer,
        Header
    }
}
</script>