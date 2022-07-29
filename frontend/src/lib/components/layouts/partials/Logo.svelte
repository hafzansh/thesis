<script lang="ts">
    export let title:any
</script>

<div class="flex flex-row w-full justify-between  mb-5 h-20">

    <div class="flex items-center justify-center">
        <img src="/images/logo.png" class="h-14 w-14" alt="logo" />
        
        <span class="text-[60px] font-bold align-middle ml-3 mb-2"
        >JST<span class="text-primary font-semibold">PADI</span></span
        >
    </div>
    <div class="flex items-center justify-center">

        <span class="text-[60px] font-bold align-middle ml-3 mb-2"
          >{title}</span>
    </div>
</div>