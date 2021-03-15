<template>
  <home/>
  <div class="min-w-full items-center flex justify-center text-center">
    <ul>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/all">ALL</router-link> 
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/a+">A+</router-link> 
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        A-
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        B+
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        B-
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        AB+
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        AB-
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        O+
      </li>
      <li class="cursor-pointer h-10 bg-red-200 w-16 my-4">
        <router-link to="/"></router-link> 
        O-
      </li>
    </ul>
  </div>
  <list/>
</template>

<script>
import List from './components/List.vue'
import Home from './Pages/Home.vue'
export default {
  components: { Home, List },
  name: 'App',
}
</script>

<style>

</style>
