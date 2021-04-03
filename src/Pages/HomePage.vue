<template>

<div class="bg-gradient-to-br from-pink-700 to-red-300 relative overflow-hidden min-h-screen">
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-center items-center">
                <div class="hidden md:flex items-center">
                    <router-link to="/Blood-Donors/list" class="border-2 border-white rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-white cursor-pointer hover:text-gray-300">
                        Donor List
                    </router-link>
                    <router-link to="/Blood-Donors/groups" class="border-2 border-white rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-white cursor-pointer hover:text-gray-300">
                        Blood Groups
                    </router-link>
                    <router-link to="/Blood-Donors/contact" class="border-2 border-white rounded-lg text-lg uppercase px-3 mx-3 pt-1 text-white cursor-pointer hover:text-gray-300">
                        Contact
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
    <div class="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
        <div class="w-full flex flex-col items-center justify-between relative z-10">
            <p class="flex flex-col items-center font-extrabold text-4xl text-center md:text-6xl text-white">
                Rhythm Blood Donation Club, Sylhet
            </p>
            <p class="px-4 flex flex-col max-w-lg text-center items-center font-extrabold text-sm md:text-lg mt-6 text-white">
                A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation. Donation may be of whole blood, or of specific components directly.
            </p>
            <router-link to="/Blood-Donors/join" class="block bg-pink-600 hover:bg-gray-600 py-3 rounded-md px-4 text-lg text-white font-bold uppercase mt-10">
                Join Now
            </router-link>
        </div>
    </div>
        <div class="h-screen md:hidden lg:h-auto min-w-full items-center flex justify-center text-center py-12">
        <ul>
            <router-link to="/Blood-Donors/list">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-64 my-10">
                    Search from list
                </li>
            </router-link>
            <router-link to="/Blood-Donors/groups">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-64 my-10">
                    Search by groups
                </li>
            </router-link>
            <router-link to="/Blood-Donors/join">
                <li class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-pink-600 w-64 my-10">
                    Get yourself on the list 
                </li>
            </router-link>
        </ul>
    </div>

</div>

</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>

</style>