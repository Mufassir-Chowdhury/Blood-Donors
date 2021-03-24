<template>
<div class="flex-col w-full ">
  <div class="flex bg-red-500 shadow-xl h-20 align-middle text-2xl py-5 text-white">
    <img class="mx-16 w-10 h-10" alt="" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNSAwIDUxMiA1MTIuMDAwOTkiIHdpZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZjQ0NTQ1Ij48cGF0aCBkPSJtMzYzLjM3MTA5NCA0NTMuMzIwMzEyYy0yNC45NTcwMzIgMzYuNzg5MDYzLTY1Ljc0NjA5NCA1OS41NTA3ODItMTE0LjQ1NzAzMiA1OC42NTYyNS0xMDIuOTg4MjgxLTIuMzI0MjE4LTE2NC43Njk1MzEtMTE1Ljc2MTcxOC0xMTIuNjQ0NTMxLTIwNC42MTcxODdsMTAwLjA3ODEyNS0xNzAuNTgyMDMxYzQuODMyMDMyLTguMjUzOTA2IDE0LjQ3MjY1Ni0xMC45MjE4NzUgMjIuNDE0MDYzLTguMDE1NjI1IDMuODEyNSAxLjM4NjcxOSA3LjIzMDQ2OSA0LjA1NDY4NyA5LjU1NDY4NyA4LjAxNTYyNWwxMDAuMDc4MTI1IDE3MC41ODIwMzFjMjguNTgyMDMxIDQ4LjcxNDg0NCAyMi45MTQwNjMgMTA0LjgyODEyNS01LjAyMzQzNyAxNDUuOTYwOTM3em0wIDAiLz48cGF0aCBkPSJtNDk2LjMyODEyNSAxNTQuNjY3OTY5Yy0xMS40MzM1OTQgMjYuMjg1MTU2LTM2Ljc5Mjk2OSA0NC40MjE4NzUtNjguOTQxNDA2IDQzLjYyODkwNi01NS4wNjI1LTEuNzE4NzUtODcuNzQyMTg4LTYyLjUtNTkuODY3MTg4LTExMC4wMTk1MzFsNDYuNDIxODc1LTc5LjEzMjgxM2M0LjgzNTkzOC04LjI0MjE4NyAxNC40NzY1NjMtMTAuOTIxODc1IDIyLjQxNDA2My04LjAwMzkwNiAzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTguOTc2NTYzIDI0LjEzMjgxMy0zMS40ODgyODIgNDIuMDAzOTA3LTYwLjE0ODQzOCA0Mi4wMDM5MDctNTAuMzY3MTg4IDAtODAuMjM0Mzc1LTU0Ljg5ODQzOC01NS4yNjk1MzEtOTcuNDUzMTI2bDQxLjEwOTM3NS03MC4wNzgxMjRjNC42Mjg5MDYtNy44ODY3MTkgMTQuMTgzNTk0LTEwLjAyMzQzOCAyMS40NzY1NjItNi40MDYyNSAyLjcxODc1IDEuMzMyMDMxIDUuMTE3MTg4IDMuNDgwNDY4IDYuODM1OTM4IDYuNDA2MjVsNDEuMTA5Mzc1IDcwLjA3ODEyNGMxMC41NjY0MDYgMTguMDA3ODEzIDExLjMwNDY4NyAzOC4xNjAxNTcgNC44ODY3MTkgNTUuNDQ5MjE5em0wIDAiLz48L2c+PHBhdGggZD0ibTM2My4zNzEwOTQgNDUzLjMyMDMxMmMtMTkuMTY0MDYzIDExLjgyNDIxOS00MS44NDc2NTYgMTkuMDAzOTA3LTY2Ljk4MDQ2OSAxOS41NzgxMjYtMTA2LjM3ODkwNiAyLjkyOTY4Ny0xNzMtMTEzLjM4NjcxOS0xMTkuNDg0Mzc1LTIwNC42MTcxODhsODEuODU1NDY5LTEzOS41MTk1MzFjMy44MTI1IDEuMzg2NzE5IDcuMjMwNDY5IDQuMDU0Njg3IDkuNTU0Njg3IDguMDE1NjI1bDEwMC4wNzgxMjUgMTcwLjU4MjAzMWMyOC41ODIwMzEgNDguNzE0ODQ0IDIyLjkxNDA2MyAxMDQuODI4MTI1LTUuMDIzNDM3IDE0NS45NjA5Mzd6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im00OTYuMzI4MTI1IDE1NC42Njc5NjljLTcuMTQ4NDM3IDIuNjk5MjE5LTE0LjkzMzU5NCA0LjI5Mjk2OS0yMy4yMzA0NjkgNC41NTA3ODEtLjgzMjAzMS4wMjM0MzgtMS42ODc1LjA0Mjk2OS0yLjUzMTI1LjA0Mjk2OS0uODU1NDY4IDAtMS42OTkyMTgtLjAxOTUzMS0yLjU0Mjk2OC0uMDQyOTY5LTU1LjA1ODU5NC0xLjcxODc1LTg3Ljc1LTYyLjUtNTkuODYzMjgyLTExMC4wMDc4MTJsMjguMTk1MzEzLTQ4LjA3MDMxM2MzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTUuMzk4NDM4IDEuNjk5MjE5LTExLjE3OTY4OCAyLjcwNzAzMS0xNy4yNjU2MjYgMi44OTQ1MzEtLjc0MjE4Ny4wMjM0MzgtMS40OTIxODcuMDM1MTU3LTIuMjUuMDM1MTU3LS43NSAwLTEuNTAzOTA2LS4wMTE3MTktMi4yNDIxODctLjAzNTE1Ny00OC43NTc4MTMtMS41MTk1MzEtNzcuNzA3MDMxLTU1LjMzOTg0My01My4wMTk1MzEtOTcuNDE3OTY4bDIxLjk0NTMxMi0zNy40MTAxNTZjMi43MTg3NSAxLjMzMjAzMSA1LjExNzE4OCAzLjQ4MDQ2OCA2LjgzNTkzOCA2LjQwNjI1bDQxLjEwOTM3NSA3MC4wNzgxMjRjMTAuNTY2NDA2IDE4LjAwNzgxMyAxMS4zMDQ2ODcgMzguMTYwMTU3IDQuODg2NzE5IDU1LjQ0OTIxOXptMCAwIiBmaWxsPSIjZmI1ODU4Ii8+PC9zdmc+" />
    <router-link to="/Blood-Donors">Blood Donors</router-link>
  </div>
  <div class="h-32 flex w-full justify-items-center justify-center">
    <form @submit.prevent="filter" class="flex align-middle px-4 mx-2 py-5">
      <label class="block px-5 text-xl py-3">BLOOD GROUP: </label>
      <select v-model="state.selectedGroup" class="relative text-center py-2 text-xl w-32 h-10 my-2 appearance-none focus:outline-none focus:ring focus:border-red-300 rounded-lg bg-red-300 text-white">
          <option :value="option.value" v-for="(option, index) in state.Groups" :key="index">
            {{ option.name }}
          </option>
      </select>
      <div class="mb-3 mt-4 px-2">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
          <input @click="eligibleOnly = !eligibleOnly" value="eligibleOnly" type="checkbox" name="toggle" id="Red" class="checked:bg-red-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label for="Red" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
          </label>
        </div>
        <span class="text-gray-400 font-medium">
          Eligible Only
        </span>
      </div>
      <button class="block px-4 mx-2 py-1 my-2  text-xl rounded-md bg-red-600 text-white h-10 uppercase">Filter</button>
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
            {{ state.len }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col">
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
            <transition-group tag="div" 
              appear-active-class="transition-all duration-1000"
              appear-class="transition-all duration-500 ease-linear"
              appear-to-class="opacity-100 transform scale-100"
              appear-from-class="opacity-0 transform scale-50"
              enter-class="transition-all duration-500 ease-linear"
              leave-class="transition-all duration-500 ease-linear"
              enter-active-class="transition-all duration-500 ease-linear"
              enter-from-class="opacity-0 transform scale-50"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition-all duration-500 ease-linear absolute"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-50"
              move-class="transition-all duration-1000 ease-in-out"
            >
              <div @click="openModal = true; User = donor" v-for="(donor, index) in state.Donors" :key="index">
                  <div :class="donor.eligible? 'bg-white hover:bg-gray-100' : 'bg-gray-200'" v-if="(state.selectedGroup == 'All' || state.selectedGroup == donor.Blood) && (eligibleOnly == false || (eligibleOnly == true && donor.eligible == true))" class="border-b border-gray-200 grid grid-cols-12 gap-8">
                    <div class="col-span-5 sm:col-span-4 py-4">
                      <div class="flex items-center">
                        <div class="md:ml-6 ml-2">
                          <div class="text-sm font-medium text-gray-900 truncate">
                            {{ donor.firstName }}
                          </div>
                          <div v-if="donor.eligible" class="text-sm text-green-500">
                            Eligible
                          </div>
                          <div v-else class="text-sm text-red-500">
                            Not Eligible
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-5 sm:col-span-4 px-4 py-4 truncate">
                      <div class="text-sm text-gray-900">{{ donor.Location }}</div>
                    </div>
                    <div class="col-span-2 sm:col-span-4 px-1 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {{ donor.Blood }}
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
  <user-modal @closeModal="openModal = false" :User="User"/>
</transition>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { donors } from '../assets/donors';
import UserModal from '../components/UserModal.vue';
export default {
  components: { UserModal },
  name: 'List',
  setup() {
    const openModal = ref(false);
    const eligibleOnly = ref(false);
    const User = ref({});
    // let len = ref(donors.length);
    const state = reactive({
      Donors: donors,
      len: donors.length,
      selectedGroup: 'All',
      Groups: [
        { value: 'All', name: 'All' },
        { value: 'A+', name: 'A+' },
        { value: 'B+', name: 'B+' },
        { value: 'AB+', name: 'AB+' },
        { value: 'O+', name: 'O+' },
        { value: 'A-', name: 'A-' },
        { value: 'B-', name: 'B-' },
        { value: 'AB-', name: 'AB-' },
        { value: 'O-', name: 'O-' }
      ]
    })
    function filter(){
      state.len = donors.filter(donor => (state.selectedGroup == 'All' || state.selectedGroup == donor.Blood) && (eligibleOnly == false || (eligibleOnly == true && donor.eligible == true))).length;
      for (const donor in donors) {
        if ((state.selectedGroup == 'All' || state.selectedGroup == donor.Blood) && (eligibleOnly == false || (eligibleOnly == true && donor.eligible == true))) {
          console.log('ok');          
        }
      }
    }

    return {
      state,
      openModal,
      User,
      eligibleOnly,
      filter
    }
  }
}
</script>

<style>

</style>