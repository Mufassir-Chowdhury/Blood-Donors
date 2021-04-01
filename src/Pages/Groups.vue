<template>
  <Header :Page="PageName"/>
<div class="min-w-screen flex items-center justify-center py-10 min-h-screen">
    <div class="lg:w-1/3 mx-4 w-full shadow-xl rounded-xl p-4 bg-red-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
        <div class="w-full h-full">
            <div class="w-full">
                <p class="text-gray-700 dark:text-white  text-2xl font-light mb-4">
                    Blood Groups
                </p>
                <div class="p-4 mb-2 rounded-md bg-white shadow-md" v-for="group in groups" :key="group.name">
                    <router-link :to="'/Blood-Donors/groups/'+group.link">
                        <div class="flex items-center justify-between text-gray-400 text-lg">
                            <p>
                                {{ group.name }}
                            </p>
                            <p>
                                {{ group.percentage }} <span class="text-sm">%</span>
                            </p>
                        </div>
                        <div class="w-full h-2 rounded-full mb-4" :class="group.bgcolor">
                            <div class="w-1/3 h-full text-center text-xs text-white rounded-full" :class="group.color + ' ' + group.width">
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="text-right text-sm"> 
                    *based on world population
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Header from '../components/Header'

export default {
    name: 'Groups',
    components: { Header },
    setup(){
        const PageName = "Groups";
        const groups = [
            { name: 'A+', link: 'APositive', bgcolor: 'bg-green-100', color: 'bg-green-400', percentage: '31', width: 'w-1/3' },
            { name: 'B+', link: 'BPositive', bgcolor: 'bg-indigo-100', color: 'bg-indigo-400', percentage: '15', width: 'w-1/6' },
            { name: 'AB+', link: 'ABPositive', bgcolor: 'bg-blue-100', color: 'bg-blue-400', percentage: '5', width: 'w-1/12' },
            { name: 'O+', link: 'OPositive', bgcolor: 'bg-pink-100', color: 'bg-pink-400', percentage: '42', width: 'w-5/12' },
            { name: 'A-', link: 'ANegative', bgcolor: 'bg-red-100', color: 'bg-red-400', percentage: '2.50', width: 'w-1/12' },
            { name: 'B-', link: 'BNegative', bgcolor: 'bg-yellow-100', color: 'bg-yellow-400', percentage: '1', width: 'w-1/12' },
            { name: 'AB-', link: 'ABNegative', bgcolor: 'bg-purple-100', color: 'bg-purple-400', percentage: '0.50', width: 'w-1/12' },
            { name: 'O-', link: 'ONegative', bgcolor: 'bg-gray-100', color: 'bg-gray-400', percentage: '3', width: 'w-1/12' }
        ]
        return{
            PageName,
            groups
        }
    }
}
</script>

<style>

</style>