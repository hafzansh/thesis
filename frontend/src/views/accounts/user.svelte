<script lang="ts">
    import authService from "../../services/auth.service";
    import { navigateTo } from "svelte-router-spa";
    import {user_data} from "../../store/store";
    let stored;
    user_data.subscribe((res) => stored = res)    

    const logout = async () => {
        
        authService.logout()
        navigateTo('login')
    }
    export let params;
  export let currentRoute;
</script>

<div>    
    {stored}           
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