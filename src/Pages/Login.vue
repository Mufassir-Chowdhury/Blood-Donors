<template>
<div class="container rounded-lg mx-auto w-4/5 relative z-10 flex items-center mt-10 md:mt-32">
    <div class="w-full flex flex-col items-center justify-between relative z-10">
        <p class="items-center font-extrabold text-4xl text-center md:text-6xl text-black">
            Rhythm <span class="text-pink-500"> Blood Donation </span> Club, <span class="text-indigo-600"> Sylhet City </span>
        </p>
    </div>
</div>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="pressed">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mx-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-4" placeholder="Email address" />
          </div>
          <div class="mx-2">
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";
export default {
    name: 'Login',
    methods: {
        async pressed(){
            try{
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(val);
                this.$router.replace({name: "Home"});
            } catch(err){
                console.log(err)
            }
        }
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    }
}
</script>

<style>

</style>