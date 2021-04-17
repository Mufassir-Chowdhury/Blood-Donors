<template>
<div id="nav">
    <router-view></router-view>
</div>
<Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
// import Home from './Pages/Home.vue'
export default {
  components: { Footer },
  // components: ( Home ),
  name: 'App',
  setup(){
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return {
        topFunction,
    } 
  }
}
</script>

<style>

</style>