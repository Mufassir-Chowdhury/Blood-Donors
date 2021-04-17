<template>
<!-- bg-gradient-to-br from-pink-700 to-red-300  -->
<div class="relative overflow-hidden min-h-screen back">
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-center items-center">
                <div class="hidden md:flex items-center">
                    <router-link to="/Blood-Donors/list" class="rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-black cursor-pointer hover:text-gray-300">
                        Donor List
                    </router-link>
                    <router-link to="/Blood-Donors/groups" class="rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-black cursor-pointer hover:text-gray-300">
                        Blood Groups
                    </router-link>
                    <router-link to="/Blood-Donors/contact" class="rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-black cursor-pointer hover:text-gray-300">
                        Contact
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
    <div class="container rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
        <div class="w-full flex flex-col items-center justify-between relative z-10">
            <p class="items-center font-extrabold text-4xl text-center md:text-6xl text-black">
                Rhythm <span class="text-pink-500"> Blood Donation </span> Club, <span class="text-indigo-600"> Sylhet City </span>
            </p>
            <p class="px-4 max-w-lg text-center items-center md:font-thin font-normal text-sm md:text-lg mt-6 text-gray-500 leading-loose">
                A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation. Donation may be of whole blood, or of specific components directly.
            </p>
            <router-link to="/Blood-Donors/join" class="block bg-pink-600 hover:bg-gray-600 py-3 rounded-md px-4 text-lg text-white font-bold uppercase mt-10">
                Join Now
            </router-link>
            <button @click="signOut">Log out</button>
        </div>
    </div>
        <div class="h-screen md:hidden lg:h-auto min-w-full items-center flex justify-center text-center py-12">
        <ul>
            <router-link to="/Blood-Donors/list">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-56 my-10">
                    Search from list
                </li>
            </router-link>
            <router-link to="/Blood-Donors/groups">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-56 my-10">
                    Search by groups
                </li>
            </router-link>
            <router-link to="/Blood-Donors/contact">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-56 my-10">
                    Contact us!
                </li>
            </router-link>
        </ul>
    </div>

</div>

</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name: 'HomePage',
    methods: {
        async signOut(){
            console.log('pressed')
            try{
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: 'Login'});
            } catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style>
.back {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236d6d6f' fill-opacity='0.34' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>