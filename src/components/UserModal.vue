<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class=" shadow-2xl flex items-end justify-center min-h-screen pt-4 w-full px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:w-full sm:my-8 sm:align-middle sm:max-w-lg sm:w-64" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-full m-auto">
            <div class="w-full h-full text-center">
                <div class="flex w-full h-full flex-col">
                    <div class="flex flex-col shadow-lg items-center justify-center px-4 py-6 w-full bg-white dark:bg-gray-800">
                        <div class="bg-green-100 py-auto text-4xl text-green-800 w-20 h-20 rounded-full">
                            <div class="m-5">
                                {{ User.Blood }}
                            </div>
                        </div>
                        <p class="text-gray-800 dark:text-gray-200 text-xl md:text-4xl font-bold mt-4">
                            {{ User.Name }}
                        </p>
                        <p class="text-lg w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                            Last Donated
                        </p>
                        <div class="flex flex-col items-end space-x-2 my-6 align-baseline">
                            <p class="text-4xl text-black dark:text-white font-bold">
                                2/3/2021
                            </p>
                            <span class="text-green-500 text-xl font-bold items-center">
                                eligible
                            </span>
                        </div>
                        <div class="dark:text-white">
                            <div class="flex items-center pb-2 mb-2 text-lg space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                <p>
                                    Address
                                </p>
                                <div class="text-sm">
                                    {{ User.Location }}
                                </div>
                            </div>
                            <div class="flex items-center mb-2 pb-2 text-lg space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                <p>
                                    Mobile
                                </p>
                                <div class="text-sm">
                                    {{ User.Mobile }}
                                </div>
                            </div>
                            <div class="flex items-center text-lg space-x-12 md:space-x-24 justify-between">
                                <p>
                                    Blood donated
                                </p>
                                <div class="text-sm">
                                    12 times
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between gap-4 w-full mt-8">
                        <a v-bind:href="'tel:'+User.Mobile" type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Call Now
                        </a>
                        <button @click="$emit('closeModal')" type="button" class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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
    }
}
</script>

<style>

</style>