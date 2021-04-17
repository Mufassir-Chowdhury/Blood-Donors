<template>
<Header/>
  <div v-for="user in users" :key="user.id">
    {
      <div>&emsp;"ID": "{{user.id}}"</div>
      <div>&emsp;"First Name": "{{user.firstName}}"</div>
      <div>&emsp;"Last Name": "{{user.lastName}}"</div>
      <div>&emsp;"Email": "{{user.email}}"</div>
      <div>&emsp;"Mobile": "{{user.mobile}}"</div>
      <div>&emsp;"Blood Group": "{{user.bloodGroup}}"</div>
      <div>&emsp;"Street": "{{user.street}}"</div>
      <div>&emsp;"Area": "{{user.area}}"</div>
      <div>&emsp;"Last Donated": "{{user.donated}}"</div>
      <div>&emsp;"Number of times donated": "{{user.donationNumber}}"</div>
      <div>&emsp;"Eligibility": "{{user.eligibility}}"</div>
    },
  </div>
</template>

<script>
import { useLoadUsers } from '@/main'
import Header from '../components/Header.vue';

export default {
  components: { Header },
    name: 'Export',
    setup() {
        const users = useLoadUsers();
        return {
            users
        }
    }
}
</script>

<style>

</style>