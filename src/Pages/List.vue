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
  <!-- <div class="bg-red-300">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <p class="ml-3 text-white truncate text-lg font-bold">
            Total donors found:
          </p>
        </div>
        <div class="order-3 my-2 w-16 sm:order-2">
          <div class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
            {{ state.len }}
          </div>
        </div>
      </div>
    </div>
  </div> -->
</div>
<div class="flex flex-col min-h-screen">
  <div class="text-xs mx-4 text-right">Tap on donors for more information.</div>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden sm:rounded-lg">
        <div class="min-w-full max-w-full ">
            <div class="grid grid-cols-12 gap-3 divide-y divide-gray-200 bg-gray-50">
              <div scope="col" class="col-span-5 sm:col-span-4 px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </div>
              <div scope="col" class="col-span-5 sm:col-span-4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </div>
              <div scope="col" class="col-span-2 sm:col-span-4 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blood Group
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
              <div @click="openModal = true; User = user" v-for="user in users" :key="user.id">
                <div :class="user.eligibility? 'bg-white hover:bg-gray-100' : 'bg-gray-200'" v-if="(state.selectedGroup == 'All' || state.selectedGroup == user.bloodGroup)  && (eligibleOnly == false || (eligibleOnly == true && user.eligibility == true))" class="border-b border-gray-200 grid grid-cols-12 gap-8">
                    <div class="col-span-5 sm:col-span-4 py-4">
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
                    <div class="col-span-5 sm:col-span-4 px-4 py-4 truncate">
                      <div class="text-sm text-gray-900">{{ user.area }}</div>
                    </div>
                    <div class="col-span-2 sm:col-span-4 px-1 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {{ user.bloodGroup }}
                      </span>
                    </div>
                  </div>
              </div>
            </transition-group>
        </div>
      </div>
    </div>
  </div>
</div>
<transition appear-to-class="opacity-100" appear-from-class="opacity-0" appear-active-class="transition-all duration-1000"
  v-show="openModal"
  enter-active-class="transition-all duration-700"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition-all duration-700"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <UserModal @closeModal="openModal = false" :User="User"/>
</transition>
</template>

<script>
import { useLoadUsers } from '@/main'
import Header from '../components/Header'
import { reactive, ref } from '@vue/reactivity'
import UserModal from '../components/UserModal'
import { ContentLoader } from 'vue-content-loader'
import { onBeforeMount } from '@vue/runtime-core'
export default {
  name: 'List',
  components: {
    Header,
    UserModal,
    ContentLoader
  },
  setup() {
    onBeforeMount(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

    const users = useLoadUsers();
    const openModal = ref(false);
    const eligibleOnly = ref(false);
    const User = ref({});
    let PageName = 'List';
    const state = reactive({
      // Donors: donors,
      // len: donors.length,
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
      PageName
    }
  }
}
</script>

<style>

</style>