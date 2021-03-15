<template>
  <div class="justify-center min-w-full bg-red-100 mx-2">
    <table class="justify-between min-w-full">
      <caption class=" table-caption">
        List of all donors
      </caption>
      <tr>
          <th class="px-2">S/L</th>
          <th class="px-2">Name</th>
          <th class="px-2">Blood Group</th>
          <th class="px-2">Mobile</th>
          <th class="px-2">Location</th>
      </tr>
      <tr v-for="(donor, index) in Donors" :key="index"  class="bg-gray-50 text-center border-b-2 border-gray-200">
          <td>{{ index }}</td>
          <td>{{ donor.Name }}</td>
          <td>{{ donor.Blood }}</td>
          <td>{{ donor.Mobile }}</td>
          <td>{{ donor.Location }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { donors } from '../assets/donors';
export default {
  name: 'List',
  setup() {
    let Donors = donors;
    return {
      Donors
    }
  }
}
</script>

<style>

</style>