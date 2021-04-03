<template>
<Header :Page="PageName"/>
<div class="min-h-screen lg:grid lg:grid-cols-12">
    <div class="py-10 lg:col-span-5 lg:bg-gray-300 justify-items-center items-center justify-center lg:h-full flex flex-col">
        <div class="text-4xl font-extrabold mb-4">Get in touch</div>
        <div>"গড়বো রক্তের বন্ধন
        দূর হবে সব ক্রন্দন"</div>
        <div class="flex my-4">
            <svg class="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Sylhet - 3100
        </div>
        <div class="flex my-4">
            <svg class="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +88 01710-706044
        </div>
        <div class="flex my-1 align-text-bottom">
            <div class="border mx-2 border-gray-700 p-1 rounded-md">
                <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                </svg>
            </div>
            <div class="mt-1">
                হৃদম ব্লাড ডোনেশন ক্লাব, সিলেট
            </div>
        </div>        
    </div>
    <div class="lg:hidden grid grid-cols-12 gap-2 mt-6">
        <div class="mt-2 ml-2 border-t border-gray-400 col-span-5"></div>
        <div class="col-span-2 text-center">OR</div>
        <div class="mt-2 mr-2 border-t border-gray-400 col-span-5"></div>
    </div>
    <div class="lg:col-span-7 lg:h-full min-w-screen flex items-center justify-items-center justify-center">
        <form class="flex w-full max-w-sm space-x-3" @submit.prevent="send">
            <div class="w-full max-w-2xl px-5 py-10 m-auto  bg-white lg:rounded-xl shadow dark:bg-gray-800">
                <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Contact us !
                </div>
                <div class="max-w-xl m-auto">
                    <div class="my-4">
                        <div>
                            <input v-model="form.Name" type="name" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                        </div>
                    </div>
                    <div class="my-4">
                        <div>
                            <input v-model="form.Mobile" type="tel" id="contact-form-mobile" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Mobile"/>
                        </div>
                    </div>
                    <div class="my-4">
                        <label class="text-gray-700" for="name">
                            <textarea v-model="form.Comment" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="text-right my-4">
                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import Header from '../components/Header'
import { useRouter } from 'vue-router'
import { reactive } from '@vue/reactivity'
import { Comment } from '@/firebase'

export default {
    name: 'Contact',
    components: { Header },
    setup(){
        const router = useRouter()
        const PageName = 'Contact';
        const form = reactive({ Name: '', Mobile: '', Comment: '' })
        const send = async () => {
            await Comment({ ...form })
            router.push('/Blood-Donors')
            form.Name = ''
            form.Mobile = ''
            form.Comment = ''
        }
        return {
            PageName,
            send,
            form
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