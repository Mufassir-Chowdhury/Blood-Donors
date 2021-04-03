<template>
<div class="h-screen">
    <Header :Page="PageName"/>
    <div class="h-full min-w-screen flex items-center justify-items-center justify-center">
        <form class="flex w-full max-w-sm space-x-3" @submit.prevent="send">
            <div class="w-full max-w-2xl px-5 py-10 m-auto  bg-white rounded-xl shadow dark:bg-gray-800">
                <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Contact us !
                </div>
                <div class="max-w-xl m-auto">
                    <div class="my-4">
                        <div class=" relative ">
                            <input v-model="form.Name" type="name" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                        </div>
                    </div>
                    <div class="my-4">
                        <div class=" relative ">
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

</style>