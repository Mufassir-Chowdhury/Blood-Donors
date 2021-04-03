<template>
<!-- <nav class="bg-gradient-to-br from-pink-700 to-red-500">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
            <img class="mx-4 h-8 w-auto" alt="" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNSAwIDUxMiA1MTIuMDAwOTkiIHdpZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZjQ0NTQ1Ij48cGF0aCBkPSJtMzYzLjM3MTA5NCA0NTMuMzIwMzEyYy0yNC45NTcwMzIgMzYuNzg5MDYzLTY1Ljc0NjA5NCA1OS41NTA3ODItMTE0LjQ1NzAzMiA1OC42NTYyNS0xMDIuOTg4MjgxLTIuMzI0MjE4LTE2NC43Njk1MzEtMTE1Ljc2MTcxOC0xMTIuNjQ0NTMxLTIwNC42MTcxODdsMTAwLjA3ODEyNS0xNzAuNTgyMDMxYzQuODMyMDMyLTguMjUzOTA2IDE0LjQ3MjY1Ni0xMC45MjE4NzUgMjIuNDE0MDYzLTguMDE1NjI1IDMuODEyNSAxLjM4NjcxOSA3LjIzMDQ2OSA0LjA1NDY4NyA5LjU1NDY4NyA4LjAxNTYyNWwxMDAuMDc4MTI1IDE3MC41ODIwMzFjMjguNTgyMDMxIDQ4LjcxNDg0NCAyMi45MTQwNjMgMTA0LjgyODEyNS01LjAyMzQzNyAxNDUuOTYwOTM3em0wIDAiLz48cGF0aCBkPSJtNDk2LjMyODEyNSAxNTQuNjY3OTY5Yy0xMS40MzM1OTQgMjYuMjg1MTU2LTM2Ljc5Mjk2OSA0NC40MjE4NzUtNjguOTQxNDA2IDQzLjYyODkwNi01NS4wNjI1LTEuNzE4NzUtODcuNzQyMTg4LTYyLjUtNTkuODY3MTg4LTExMC4wMTk1MzFsNDYuNDIxODc1LTc5LjEzMjgxM2M0LjgzNTkzOC04LjI0MjE4NyAxNC40NzY1NjMtMTAuOTIxODc1IDIyLjQxNDA2My04LjAwMzkwNiAzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTguOTc2NTYzIDI0LjEzMjgxMy0zMS40ODgyODIgNDIuMDAzOTA3LTYwLjE0ODQzOCA0Mi4wMDM5MDctNTAuMzY3MTg4IDAtODAuMjM0Mzc1LTU0Ljg5ODQzOC01NS4yNjk1MzEtOTcuNDUzMTI2bDQxLjEwOTM3NS03MC4wNzgxMjRjNC42Mjg5MDYtNy44ODY3MTkgMTQuMTgzNTk0LTEwLjAyMzQzOCAyMS40NzY1NjItNi40MDYyNSAyLjcxODc1IDEuMzMyMDMxIDUuMTE3MTg4IDMuNDgwNDY4IDYuODM1OTM4IDYuNDA2MjVsNDEuMTA5Mzc1IDcwLjA3ODEyNGMxMC41NjY0MDYgMTguMDA3ODEzIDExLjMwNDY4NyAzOC4xNjAxNTcgNC44ODY3MTkgNTUuNDQ5MjE5em0wIDAiLz48L2c+PHBhdGggZD0ibTM2My4zNzEwOTQgNDUzLjMyMDMxMmMtMTkuMTY0MDYzIDExLjgyNDIxOS00MS44NDc2NTYgMTkuMDAzOTA3LTY2Ljk4MDQ2OSAxOS41NzgxMjYtMTA2LjM3ODkwNiAyLjkyOTY4Ny0xNzMtMTEzLjM4NjcxOS0xMTkuNDg0Mzc1LTIwNC42MTcxODhsODEuODU1NDY5LTEzOS41MTk1MzFjMy44MTI1IDEuMzg2NzE5IDcuMjMwNDY5IDQuMDU0Njg3IDkuNTU0Njg3IDguMDE1NjI1bDEwMC4wNzgxMjUgMTcwLjU4MjAzMWMyOC41ODIwMzEgNDguNzE0ODQ0IDIyLjkxNDA2MyAxMDQuODI4MTI1LTUuMDIzNDM3IDE0NS45NjA5Mzd6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im00OTYuMzI4MTI1IDE1NC42Njc5NjljLTcuMTQ4NDM3IDIuNjk5MjE5LTE0LjkzMzU5NCA0LjI5Mjk2OS0yMy4yMzA0NjkgNC41NTA3ODEtLjgzMjAzMS4wMjM0MzgtMS42ODc1LjA0Mjk2OS0yLjUzMTI1LjA0Mjk2OS0uODU1NDY4IDAtMS42OTkyMTgtLjAxOTUzMS0yLjU0Mjk2OC0uMDQyOTY5LTU1LjA1ODU5NC0xLjcxODc1LTg3Ljc1LTYyLjUtNTkuODYzMjgyLTExMC4wMDc4MTJsMjguMTk1MzEzLTQ4LjA3MDMxM2MzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTUuMzk4NDM4IDEuNjk5MjE5LTExLjE3OTY4OCAyLjcwNzAzMS0xNy4yNjU2MjYgMi44OTQ1MzEtLjc0MjE4Ny4wMjM0MzgtMS40OTIxODcuMDM1MTU3LTIuMjUuMDM1MTU3LS43NSAwLTEuNTAzOTA2LS4wMTE3MTktMi4yNDIxODctLjAzNTE1Ny00OC43NTc4MTMtMS41MTk1MzEtNzcuNzA3MDMxLTU1LjMzOTg0My01My4wMTk1MzEtOTcuNDE3OTY4bDIxLjk0NTMxMi0zNy40MTAxNTZjMi43MTg3NSAxLjMzMjAzMSA1LjExNzE4OCAzLjQ4MDQ2OCA2LjgzNTkzOCA2LjQwNjI1bDQxLjEwOTM3NSA3MC4wNzgxMjRjMTAuNTY2NDA2IDE4LjAwNzgxMyAxMS4zMDQ2ODcgMzguMTYwMTU3IDQuODg2NzE5IDU1LjQ0OTIxOXptMCAwIiBmaWxsPSIjZmI1ODU4Ii8+PC9zdmc+" />
            <router-link class="text-2xl font-black text-white" to="/Blood-Donors">Blood Donors</router-link>
        </div>
      </div>
    </div>
  </div>
</nav> -->

<div>
    <nav class="bg-white dark:bg-gray-800 shadow-xl">
        <div class="max-w-screen mx-auto md:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="mx-4 h-8 w-auto" alt="" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNSAwIDUxMiA1MTIuMDAwOTkiIHdpZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZjQ0NTQ1Ij48cGF0aCBkPSJtMzYzLjM3MTA5NCA0NTMuMzIwMzEyYy0yNC45NTcwMzIgMzYuNzg5MDYzLTY1Ljc0NjA5NCA1OS41NTA3ODItMTE0LjQ1NzAzMiA1OC42NTYyNS0xMDIuOTg4MjgxLTIuMzI0MjE4LTE2NC43Njk1MzEtMTE1Ljc2MTcxOC0xMTIuNjQ0NTMxLTIwNC42MTcxODdsMTAwLjA3ODEyNS0xNzAuNTgyMDMxYzQuODMyMDMyLTguMjUzOTA2IDE0LjQ3MjY1Ni0xMC45MjE4NzUgMjIuNDE0MDYzLTguMDE1NjI1IDMuODEyNSAxLjM4NjcxOSA3LjIzMDQ2OSA0LjA1NDY4NyA5LjU1NDY4NyA4LjAxNTYyNWwxMDAuMDc4MTI1IDE3MC41ODIwMzFjMjguNTgyMDMxIDQ4LjcxNDg0NCAyMi45MTQwNjMgMTA0LjgyODEyNS01LjAyMzQzNyAxNDUuOTYwOTM3em0wIDAiLz48cGF0aCBkPSJtNDk2LjMyODEyNSAxNTQuNjY3OTY5Yy0xMS40MzM1OTQgMjYuMjg1MTU2LTM2Ljc5Mjk2OSA0NC40MjE4NzUtNjguOTQxNDA2IDQzLjYyODkwNi01NS4wNjI1LTEuNzE4NzUtODcuNzQyMTg4LTYyLjUtNTkuODY3MTg4LTExMC4wMTk1MzFsNDYuNDIxODc1LTc5LjEzMjgxM2M0LjgzNTkzOC04LjI0MjE4NyAxNC40NzY1NjMtMTAuOTIxODc1IDIyLjQxNDA2My04LjAwMzkwNiAzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTguOTc2NTYzIDI0LjEzMjgxMy0zMS40ODgyODIgNDIuMDAzOTA3LTYwLjE0ODQzOCA0Mi4wMDM5MDctNTAuMzY3MTg4IDAtODAuMjM0Mzc1LTU0Ljg5ODQzOC01NS4yNjk1MzEtOTcuNDUzMTI2bDQxLjEwOTM3NS03MC4wNzgxMjRjNC42Mjg5MDYtNy44ODY3MTkgMTQuMTgzNTk0LTEwLjAyMzQzOCAyMS40NzY1NjItNi40MDYyNSAyLjcxODc1IDEuMzMyMDMxIDUuMTE3MTg4IDMuNDgwNDY4IDYuODM1OTM4IDYuNDA2MjVsNDEuMTA5Mzc1IDcwLjA3ODEyNGMxMC41NjY0MDYgMTguMDA3ODEzIDExLjMwNDY4NyAzOC4xNjAxNTcgNC44ODY3MTkgNTUuNDQ5MjE5em0wIDAiLz48L2c+PHBhdGggZD0ibTM2My4zNzEwOTQgNDUzLjMyMDMxMmMtMTkuMTY0MDYzIDExLjgyNDIxOS00MS44NDc2NTYgMTkuMDAzOTA3LTY2Ljk4MDQ2OSAxOS41NzgxMjYtMTA2LjM3ODkwNiAyLjkyOTY4Ny0xNzMtMTEzLjM4NjcxOS0xMTkuNDg0Mzc1LTIwNC42MTcxODhsODEuODU1NDY5LTEzOS41MTk1MzFjMy44MTI1IDEuMzg2NzE5IDcuMjMwNDY5IDQuMDU0Njg3IDkuNTU0Njg3IDguMDE1NjI1bDEwMC4wNzgxMjUgMTcwLjU4MjAzMWMyOC41ODIwMzEgNDguNzE0ODQ0IDIyLjkxNDA2MyAxMDQuODI4MTI1LTUuMDIzNDM3IDE0NS45NjA5Mzd6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im00OTYuMzI4MTI1IDE1NC42Njc5NjljLTcuMTQ4NDM3IDIuNjk5MjE5LTE0LjkzMzU5NCA0LjI5Mjk2OS0yMy4yMzA0NjkgNC41NTA3ODEtLjgzMjAzMS4wMjM0MzgtMS42ODc1LjA0Mjk2OS0yLjUzMTI1LjA0Mjk2OS0uODU1NDY4IDAtMS42OTkyMTgtLjAxOTUzMS0yLjU0Mjk2OC0uMDQyOTY5LTU1LjA1ODU5NC0xLjcxODc1LTg3Ljc1LTYyLjUtNTkuODYzMjgyLTExMC4wMDc4MTJsMjguMTk1MzEzLTQ4LjA3MDMxM2MzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTUuMzk4NDM4IDEuNjk5MjE5LTExLjE3OTY4OCAyLjcwNzAzMS0xNy4yNjU2MjYgMi44OTQ1MzEtLjc0MjE4Ny4wMjM0MzgtMS40OTIxODcuMDM1MTU3LTIuMjUuMDM1MTU3LS43NSAwLTEuNTAzOTA2LS4wMTE3MTktMi4yNDIxODctLjAzNTE1Ny00OC43NTc4MTMtMS41MTk1MzEtNzcuNzA3MDMxLTU1LjMzOTg0My01My4wMTk1MzEtOTcuNDE3OTY4bDIxLjk0NTMxMi0zNy40MTAxNTZjMi43MTg3NSAxLjMzMjAzMSA1LjExNzE4OCAzLjQ4MDQ2OCA2LjgzNTkzOCA2LjQwNjI1bDQxLjEwOTM3NSA3MC4wNzgxMjRjMTAuNTY2NDA2IDE4LjAwNzgxMyAxMS4zMDQ2ODcgMzguMTYwMTU3IDQuODg2NzE5IDU1LjQ0OTIxOXptMCAwIiBmaWxsPSIjZmI1ODU4Ii8+PC9zdmc+" />
                        <router-link class="md:text-2xl text-lg font-black text-black" to="/Blood-Donors">Rhythm Blood Donation Club</router-link>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-link to="/Blood-Donors" class="text-gray-300 hover:text-gray-800 px-3 py-2 text-sm font-medium">
                                Home
                            </router-link>
                            <router-link to="/Blood-Donors/list" :class="Page == 'List' ? 'text-gray-800 border-b-2 border-red-300' : 'text-gray-300 hover:text-gray-800'" class="px-3 py-2 text-sm font-medium">
                                List
                            </router-link>
                            <router-link to="/Blood-Donors/groups" :class="Page == 'Groups' ? 'text-gray-800 border-b-2 border-red-300' : 'text-gray-300 hover:text-gray-800'" class="px-3 py-2 text-sm font-medium">
                                Groups
                            </router-link>
                            <router-link to="/Blood-Donors/join" :class="Page == 'Join' ? 'text-gray-800 border-b-2 border-red-300' : 'text-gray-300 hover:text-gray-800'" class="px-3 py-2 text-sm font-medium">
                                Join
                            </router-link>
                            <router-link to="/Blood-Donors/contact" :class="Page == 'Contact' ? 'text-gray-800 border-b-2 border-red-300' : 'text-gray-300 hover:text-gray-800'" class="px-3 py-2 text-sm font-medium">
                                Contact
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>

</template>

<script>
export default {
    name: 'Header',
    props: {
        Page: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>