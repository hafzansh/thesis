<script lang="ts">
    export let item:any
    console.log(item)
</script>
{#if item.detail}
<h1>{item.detail}</h1>
{:else}
<h1>{item.id}</h1>
<h1>{item.kota}</h1>
<h1>{item.tahun}</h1>
<h1>{item.luas_lahan}</h1>
<h1>{item.luas_panen}</h1>
{/if}