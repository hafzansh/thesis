<script lang="ts">
import Logo from "../../../lib/components/layouts/partials/Logo.svelte";


    export let data:any    
    setTimeout(window.print,1500)
</script>

<div class="flex flex-col w-full justify-end items-end">
    <div class="flex flex-row w-full">
        <Logo title="List Users" />
      </div>      
    <table class="table w-full">    
        <thead>
            <tr>
                <td class="w-1/12">No</td>
                <td class="w-2/12">Username</td>
                <td class="w-8/12">Full Name</td>
                <td class="w-1/12">Superuser</td>
            </tr>
        </thead>
        <tbody>
            {#each data as dat,i}
            <tr>
                <td>{i+1}</td>
                <td><span class="font-bold italic">@{data[i].username}</span></td>
                <td>{data[i].full_name}</td>
                <td><span class={data[i].is_superuser==true? 'badge badge-info' : 'badge'}>{data[i].is_superuser==true? 'Yes' : 'No'}</span></td>
            </tr>
            {/each}
        </tbody>
    
    </table>
</div>