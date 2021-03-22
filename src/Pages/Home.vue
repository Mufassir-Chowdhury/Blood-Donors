<template>
  <div class="bg-scroll min-w-full min-h-screen bg-gradient-to-br from-pink-700 to-red-300 ">
    <div class="static lg:flex h-screen lg:h-auto py-16">
        <img class="mx-16 w-40 h-40" alt="" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNSAwIDUxMiA1MTIuMDAwOTkiIHdpZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZjQ0NTQ1Ij48cGF0aCBkPSJtMzYzLjM3MTA5NCA0NTMuMzIwMzEyYy0yNC45NTcwMzIgMzYuNzg5MDYzLTY1Ljc0NjA5NCA1OS41NTA3ODItMTE0LjQ1NzAzMiA1OC42NTYyNS0xMDIuOTg4MjgxLTIuMzI0MjE4LTE2NC43Njk1MzEtMTE1Ljc2MTcxOC0xMTIuNjQ0NTMxLTIwNC42MTcxODdsMTAwLjA3ODEyNS0xNzAuNTgyMDMxYzQuODMyMDMyLTguMjUzOTA2IDE0LjQ3MjY1Ni0xMC45MjE4NzUgMjIuNDE0MDYzLTguMDE1NjI1IDMuODEyNSAxLjM4NjcxOSA3LjIzMDQ2OSA0LjA1NDY4NyA5LjU1NDY4NyA4LjAxNTYyNWwxMDAuMDc4MTI1IDE3MC41ODIwMzFjMjguNTgyMDMxIDQ4LjcxNDg0NCAyMi45MTQwNjMgMTA0LjgyODEyNS01LjAyMzQzNyAxNDUuOTYwOTM3em0wIDAiLz48cGF0aCBkPSJtNDk2LjMyODEyNSAxNTQuNjY3OTY5Yy0xMS40MzM1OTQgMjYuMjg1MTU2LTM2Ljc5Mjk2OSA0NC40MjE4NzUtNjguOTQxNDA2IDQzLjYyODkwNi01NS4wNjI1LTEuNzE4NzUtODcuNzQyMTg4LTYyLjUtNTkuODY3MTg4LTExMC4wMTk1MzFsNDYuNDIxODc1LTc5LjEzMjgxM2M0LjgzNTkzOC04LjI0MjE4NyAxNC40NzY1NjMtMTAuOTIxODc1IDIyLjQxNDA2My04LjAwMzkwNiAzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTguOTc2NTYzIDI0LjEzMjgxMy0zMS40ODgyODIgNDIuMDAzOTA3LTYwLjE0ODQzOCA0Mi4wMDM5MDctNTAuMzY3MTg4IDAtODAuMjM0Mzc1LTU0Ljg5ODQzOC01NS4yNjk1MzEtOTcuNDUzMTI2bDQxLjEwOTM3NS03MC4wNzgxMjRjNC42Mjg5MDYtNy44ODY3MTkgMTQuMTgzNTk0LTEwLjAyMzQzOCAyMS40NzY1NjItNi40MDYyNSAyLjcxODc1IDEuMzMyMDMxIDUuMTE3MTg4IDMuNDgwNDY4IDYuODM1OTM4IDYuNDA2MjVsNDEuMTA5Mzc1IDcwLjA3ODEyNGMxMC41NjY0MDYgMTguMDA3ODEzIDExLjMwNDY4NyAzOC4xNjAxNTcgNC44ODY3MTkgNTUuNDQ5MjE5em0wIDAiLz48L2c+PHBhdGggZD0ibTM2My4zNzEwOTQgNDUzLjMyMDMxMmMtMTkuMTY0MDYzIDExLjgyNDIxOS00MS44NDc2NTYgMTkuMDAzOTA3LTY2Ljk4MDQ2OSAxOS41NzgxMjYtMTA2LjM3ODkwNiAyLjkyOTY4Ny0xNzMtMTEzLjM4NjcxOS0xMTkuNDg0Mzc1LTIwNC42MTcxODhsODEuODU1NDY5LTEzOS41MTk1MzFjMy44MTI1IDEuMzg2NzE5IDcuMjMwNDY5IDQuMDU0Njg3IDkuNTU0Njg3IDguMDE1NjI1bDEwMC4wNzgxMjUgMTcwLjU4MjAzMWMyOC41ODIwMzEgNDguNzE0ODQ0IDIyLjkxNDA2MyAxMDQuODI4MTI1LTUuMDIzNDM3IDE0NS45NjA5Mzd6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im00OTYuMzI4MTI1IDE1NC42Njc5NjljLTcuMTQ4NDM3IDIuNjk5MjE5LTE0LjkzMzU5NCA0LjI5Mjk2OS0yMy4yMzA0NjkgNC41NTA3ODEtLjgzMjAzMS4wMjM0MzgtMS42ODc1LjA0Mjk2OS0yLjUzMTI1LjA0Mjk2OS0uODU1NDY4IDAtMS42OTkyMTgtLjAxOTUzMS0yLjU0Mjk2OC0uMDQyOTY5LTU1LjA1ODU5NC0xLjcxODc1LTg3Ljc1LTYyLjUtNTkuODYzMjgyLTExMC4wMDc4MTJsMjguMTk1MzEzLTQ4LjA3MDMxM2MzLjgxNjQwNiAxLjM3NSA3LjI0MjE4NyA0LjA0Mjk2OSA5LjU1ODU5MyA4LjAwMzkwNmw0Ni40MjE4NzYgNzkuMTMyODEzYzEyLjcwMzEyNCAyMS42NTIzNDQgMTIuODI4MTI0IDQ2LjA3MDMxMiAzLjk5MjE4NyA2Ni4zOTA2MjV6bTAgMCIgZmlsbD0iI2ZiNTg1OCIvPjxwYXRoIGQ9Im0xMjQuMzk4NDM4IDIzMi44MDA3ODFjLTUuMzk4NDM4IDEuNjk5MjE5LTExLjE3OTY4OCAyLjcwNzAzMS0xNy4yNjU2MjYgMi44OTQ1MzEtLjc0MjE4Ny4wMjM0MzgtMS40OTIxODcuMDM1MTU3LTIuMjUuMDM1MTU3LS43NSAwLTEuNTAzOTA2LS4wMTE3MTktMi4yNDIxODctLjAzNTE1Ny00OC43NTc4MTMtMS41MTk1MzEtNzcuNzA3MDMxLTU1LjMzOTg0My01My4wMTk1MzEtOTcuNDE3OTY4bDIxLjk0NTMxMi0zNy40MTAxNTZjMi43MTg3NSAxLjMzMjAzMSA1LjExNzE4OCAzLjQ4MDQ2OCA2LjgzNTkzOCA2LjQwNjI1bDQxLjEwOTM3NSA3MC4wNzgxMjRjMTAuNTY2NDA2IDE4LjAwNzgxMyAxMS4zMDQ2ODcgMzguMTYwMTU3IDQuODg2NzE5IDU1LjQ0OTIxOXptMCAwIiBmaWxsPSIjZmI1ODU4Ii8+PC9zdmc+" />
        <div class="mx-10 my-5 lg:my-0 lg:mx-6 font-semibold text-7xl text-gray-50">
            BLOOD DONORS<br>
            Sylhet
        </div>
        <div class=" text-opacity-60 absolute bottom-6 text-white flex center visible lg:hidden w-screen justify-items-center justify-center">
            <div class="text-lg">Swipe up</div>
            <svg class="mx-3 animate-bounce ease-in-out w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
    <div class="h-screen lg:h-auto min-w-full items-center flex justify-center text-center py-12">
        <ul>
            <router-link to="/Blood-Donors/list">
                <li @click="topFunction" class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-red-600 w-64 my-10">
                    Search for blood 
                </li>
            </router-link>
            <router-link to="/Blood-Donors/join">
                <li @click="topFunction" class="cursor-pointer rounded-lg shadow-lg py-4 text-white text-xl font-bold h-16 bg-red-600 w-64 my-10">
                    Get yourself on the list 
                </li>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    
    setup(){
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        return {
            topFunction,
        } 
    }
}
</script>

<style>

</style>