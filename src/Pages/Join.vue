<template>
  <Header :Page="pageName"/>

<form @submit.prevent="onSubmit">
<input type="hidden" name="_subject" value="New submission from 'Blood Donors, Sylhet">

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200"></div>
    </div>
  </div>

  <div class="mt-10 px-4 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Use your present address where you live.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input v-model="form.firstName" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input v-model="form.lastName" type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input v-model="form.email" type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="blood_group" class="block text-sm font-medium text-gray-700">Blood Group</label>
                  <input v-model="form.bloodGroup" type="text" name="blood_group" id="blood_group" autocomplete="blood-group" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                  <select disabled id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none">
                    <option>Bangladesh</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium text-gray-700">House number and street address</label>
                  <input v-model="form.street" type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input disabled type="text" value="Sylhet" name="city" id="city" class="mt-1 py-1 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium text-gray-700">Area</label>
                  <input v-model="form.area" type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="number" class="block text-sm font-medium text-gray-700">Mobile</label>
                  <input v-model="form.mobile" type="tel" name="number" id="number" autocomplete="number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200"></div>
    </div>
  </div>

  <div class="mt-10 px-4 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Donation</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <div>
                  <legend class="text-base font-medium text-gray-900">Donation</legend>
                  <p class="text-sm text-gray-500">When did you last donated blood:</p>
                </div>
                <input v-model="form.donated" type="date" name="donated" id="donated">
                <div class="md:mr-4 mx-auto mb-3 mt-4 pr-2">
                  <div class="relative inline-block w-10 mr-2 align-middle select-none">
                    <input @click="form.eligibility = !(form.eligibility)" v-model="form.eligibility" type="checkbox" name="toggle" id="Red" class="checked:bg-red-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
                      <label for="Red" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    </label>
                  </div>
                  <span v-if="form.eligibility" class="text-gray-400 font-medium">
                    Eligible
                  </span>
                  <span v-else class="text-gray-400 font-medium">
                    Not Eligible
                  </span>
                </div>
                <div class=" w-1/4">
                  <label for="number" class="block text-sm font-medium text-gray-700">How many times donated:</label>
                  <input v-model="form.donationNumber" type="number" name="number" id="number" autocomplete="number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-b border-gray-300">
                </div>
              </fieldset>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</form>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Header from '../components/Header.vue';
import { createUser } from '@/main'
import { useRouter } from 'vue-router';
import { onBeforeMount } from '@vue/runtime-core'

export default {
  components: { Header },
    name: 'Join',
    setup(){
      onBeforeMount(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      })

      const router = useRouter();
      const form = reactive({ donationNumber: 0, firstName: '', lastName: '', email: '', street: '', area: '', mobile: '', bloodGroup: '', eligibility: false, donated: '' })
      const onSubmit = async () => {
        
          await createUser({ ...form })
          form.firstName = ''
          form.lastName = ''
          form.email = ''
          form.street = ''
          form.area = ''
          form.mobile = ''
          form.bloodGroup = ''
          form.donated = ''
          form.eligibility = false
          form.donationNumber = 0
          router.push('/Blood-Donors/')
        
      }

      let pageName = 'Join';

      return {
        pageName,
        form,
        onSubmit
      }
    }
}
</script>

<style>

</style>