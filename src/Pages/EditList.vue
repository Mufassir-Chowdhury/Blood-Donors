<template>
<div class="flex-col w-full">
  <Header :Page="PageName"/>
  <div class="md:h-32 h-auto flex w-full justify-items-center justify-center">
    <form @submit.prevent="filter" class="flex flex-col md:flex-row align-middle px-4 mx-2 py-5">
      <div class="flex">
        <label class="block px-5 align-text-bottom text-xl py-3">BLOOD GROUP: </label>
        <select @click="filter" v-model="state.selectedGroup" class="relative text-center py-2 text-xl w-20 md:w-32 h-10 my-2 appearance-none focus:outline-none focus:ring focus:border-red-300 rounded-lg bg-red-300 text-white">
            <option :value="option.value" v-for="(option, index) in state.Groups" :key="index">
              {{ option.name }}
            </option>
        </select>
      </div>
      <div @click="filter" class="md:mx-4 mx-auto mb-3 mt-4 px-2">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
          <input @click="eligibleOnly = !eligibleOnly" v-model="eligibleOnly" type="checkbox" name="toggle" id="Red" class="checked:bg-red-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
            <label for="Red" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
          </label>
        </div>
        <span class="text-gray-400 font-medium">
          Eligible Only
        </span>
      </div>
    </form>
  </div>
  <div class="bg-red-300">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <p class="ml-3 text-white truncate text-lg font-bold">
            Total donors found:
          </p>
        </div>
        <div class="order-3 my-2 w-16 sm:order-2">
          <div class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
            {{ users.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
  <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
      <div class="container relative left-0 z-50 flex w-3/4 h-auto">
        <div class="relative flex items-center w-full lg:w-64 h-full group">
        <svg class="absolute left-0 z-20 w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
            </path>
        </svg>
        <input v-model="state.search" type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col min-h-screen">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden sm:rounded-lg">
        <div class="min-w-full max-w-full ">
            <div class="grid grid-cols-12 gap-3 divide-y divide-gray-200 bg-gray-50">
              <div scope="col" class="col-span-5 px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </div>
              <div scope="col" class="col-span-3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blood Group
              </div>
              <div scope="col" class="col-span-4 pr-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </div>
            </div>
            <div v-if="users.length == 0">
              <ContentLoader v-for="i in 7" :key="i"
                :width="340"
                :height="84"
                :speed="2"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                class="mx-4 my-4 justify-self-stretch"
              >
                <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
              </ContentLoader>
            </div>
            <transition-group tag="div" 
             
              appear-active-class="transition-opacity duration-1000"
              appear-class="transition-opacity duration-100 ease-in-out"
              appear-to-class="opacity-100 transform scale-100"
              appear-from-class="opacity-0 transform scale-50"
              enter-class="transition-opacity duration-100 ease-in-out"
              leave-class="transition-opacity duration-100 ease-in-out"
              enter-active-class="transition-opacity duration-100 ease-in-out"
              enter-from-class="opacity-0 transform scale-50"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition-opacity duration-100 ease-in-out absolute"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-50"
              move-class="transition-all duration-1000 ease-in-out"

            >
              <div v-for="user in users" :key="user.id">
                <div :class="user.eligibility? 'bg-white hover:bg-gray-100' : 'bg-gray-200'" v-if="(state.search == '' || user.firstName.toLowerCase().indexOf(state.search.toLowerCase()) > -1 || user.lastName.toLowerCase().indexOf(state.search.toLowerCase()) > -1) && (state.selectedGroup == 'All' || state.selectedGroup == user.bloodGroup)  && (eligibleOnly == false || (eligibleOnly == true && user.eligibility == true))" class="border-b border-gray-200 grid grid-cols-12 gap-8">
                    <div class="col-span-5 py-4">
                      <div class="flex items-center">
                        <div class="md:ml-6 ml-2">
                          <div class="text-sm font-medium text-gray-900 truncate">
                            {{ user.firstName }}
                          </div>
                          <div v-if="user.eligibility" class="text-sm text-green-500">
                            Eligible
                          </div>
                          <div v-else class="text-sm text-red-500">
                            Not Eligible
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-3 px-4 py-4 truncate">
                      <div class="text-sm text-gray-900">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {{ user.bloodGroup }}
                        </span>
                      </div>
                    </div>
                    <div class="flex justify-center col-span-4 px-1 py-4 whitespace-nowrap">
                      <router-link :to="`/Blood-Donors/edit/${user.id}`">
                        <button class="w-8 h-8 md:w-auto flex items-center px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-gray-900 focus:outline-none">
                            <svg width="15" height="15" class="md:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                            </svg>
                            <span class=" align-baseline mt-1 hidden md:inline-block">
                              Edit
                            </span>
                        </button>
                      </router-link>
                      <button @click="deleteUser(user.id)" class="w-8 h-8 md:w-auto ml-2 flex items-center px-2 py-1 transition ease-in duration-200 uppercase rounded-full bg-red-400 text-white hover:bg-white hover:text-black border-2 hover:border-white border-red-400 focus:outline-none">
                          <svg width="15" height="15" class="md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span class=" align-baseline mt-1 hidden md:inline-block">
                            Delete
                          </span>
                      </button>
                    </div>
                  </div>
              </div>
            </transition-group>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col min-h-screen">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden sm:rounded-lg">
        <div class="min-w-full max-w-full ">
            <div class="grid grid-cols-12 gap-3 divide-y divide-gray-200 bg-gray-50">
              <div scope="col" class="col-span-5 px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </div>
              <div scope="col" class="col-span-3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number
              </div>
              <div scope="col" class="col-span-4 pr-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comment
              </div>
            </div>
            <div v-if="users.length == 0">
              <ContentLoader v-for="i in 7" :key="i"
                :width="340"
                :height="84"
                :speed="2"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                class="mx-4 my-4 justify-self-stretch"
              >
                <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
              </ContentLoader>
            </div>
              <div v-for="comment in comments" :key="comment.id">
                <div class="border-b border-gray-200 grid grid-cols-12 gap-8">
                    <div class="col-span-5 py-4">
                      <div class="flex items-center">
                        <div class="md:ml-6 ml-2">
                          <div class="text-sm font-medium text-gray-900 truncate">
                            {{ comment.Name }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-3 px-4 py-4 truncate">
                      <div class="text-sm text-gray-900">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {{ comment.Mobile }}
                        </span>
                      </div>
                    </div>
                    <div class="flex justify-center col-span-4 whitespace-wrap">
                      {{comment.Comment}}
                    </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { useLoadUsers, deleteUser, useLoadComments } from '@/firebase'
import Header from '../components/Header'
import { reactive, ref } from '@vue/reactivity'
import { ContentLoader } from 'vue-content-loader'
import { onBeforeMount } from '@vue/runtime-core'

export default {
  name: 'List',
  components: {
    Header,
    ContentLoader
  },
  setup() {
    onBeforeMount(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
    const comments = useLoadComments()
    const users = useLoadUsers()
    const openModal = ref(false);
    const eligibleOnly = ref(false);
    const User = ref({});
    let PageName = 'List';
    const state = reactive({
      // Donors: donors,
      // len: donors.length,
      search: '',
      selectedGroup: "All",
      Groups: [
        { value: "All", name: "All" },
        { value: "A+", name: "A+" },
        { value: "B+", name: "B+" },
        { value: "AB+", name: "AB+" },
        { value: "O+", name: "O+" },
        { value: "A-", name: "A-" },
        { value: "B-", name: "B-" },
        { value: "AB-", name: "AB-" },
        { value: "O-", name: "O-" }
      ]
    })
    return { 
      users, 
      state,
      openModal,
      eligibleOnly,
      User,
      PageName,
      deleteUser,
      comments
    }
  }
}
</script>

<style>

</style>