<script lang="ts">
    import authService from "../../services/auth.service";
    import { navigateTo } from "svelte-router-spa";
    let token = localStorage.getItem('user')
    token = JSON.stringify(token);
    const logout = async () => {
        authService.logout()
        navigateTo('login')
    }
</script>

<div>
    {token}
    <button on:click={logout} class="flex
    mt-2
    items-center
    justify-center
    focus:outline-none
    text-white text-sm
    sm:text-base
    bg-blue-500
    hover:bg-blue-600
    rounded-2xl
    py-2
    w-full
    transition
    duration-150
    ease-in">Logout</button>
</div>