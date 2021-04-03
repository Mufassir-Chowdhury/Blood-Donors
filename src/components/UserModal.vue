<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class=" shadow-2xl flex items-end justify-center min-h-screen pt-4 w-full px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:w-full sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-full my-auto sm:mx-4 md:mx-auto">
            <div class="w-full h-full text-center">
                <div class="flex w-full h-full flex-col">
                    <div class="flex flex-col shadow-lg items-center justify-center px-4 py-6 w-full bg-white dark:bg-gray-800">
                        <div class="bg-green-100 py-auto text-4xl text-green-800 w-20 h-20 rounded-full">
                            <div class="m-5">
                                {{ User.bloodGroup }}
                            </div>
                        </div>
                        <p class="text-gray-800 dark:text-gray-200 text-xl md:text-4xl font-bold mt-4">
                            {{ User.firstName }} {{User.lastName}}
                        </p>
                        <p class="text-lg w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                            Last Donated
                        </p>
                        <div class="flex flex-col items-end space-x-2 my-6 align-baseline">
                            <p class="text-4xl text-black dark:text-white font-bold">
                                {{ User.donated }}
                            </p>
                            <span v-if="User.eligibility" class="text-green-500 text-xl font-bold items-center">
                                Eligible
                            </span>
                            <span v-else class="text-red-500 text-xl font-bold items-center">
                                Not Eligible
                            </span>
                        </div>
                        <div class="dark:text-white">
                            <div class="flex items-center pb-2 mb-2 text-lg space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                <p>
                                    Address
                                </p>
                                <div class="text-sm">
                                    {{ User.street }}
                                </div>
                            </div>
                            <div class="flex items-center mb-2 pb-2 text-lg space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                <p @click="copyURL">
                                    Mobile
                                </p>
                                <div :href="User.mobile" class="text-sm" ref="mylink">
                                    {{ User.mobile }}
                                </div>
                            </div>
                            <div class="flex items-center text-lg space-x-12 md:space-x-24 justify-between">
                                <p>
                                    Blood donated
                                </p>
                                <div class="text-sm">
                                    {{ User.donationNumber }} times
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between gap-4 w-full mt-8">
                        <a :href="'tel:'+User.mobile" type="button" class=" align-baseline flex justify-center items-center py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <svg class="animate-pulse stroke-1 w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div class="whitespace-nowrap">
                                Call Now
                            </div>
                        </a>
                        <button @click="$emit('closeModal')" type="button" class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'UserModal',
    props: {
        User: {
            type: Object,
            required: true
        }
    },
    methods: {
        copyURL() {
            var Url = this.$refs.mylink;
            Url.innerHTML = window.location.href;
            console.log(Url.innerHTML)
            Url.innerHTML.select();
            document.execCommand("copy");
        }
    }
}
</script>

<style>

</style>