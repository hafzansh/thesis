<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from 'svelte-fa'
    export let type:string
    export let title:string
    export let icon:IconDefinition
</script>

<div class="flex w-full">
    <button
      type={type}
      class="
        flex
        mt-2
        items-center
        justify-center
        focus:outline-none
        text-white text-sm
        sm:text-base
        bg-primary
        hover:bg-primary-focus
        rounded-2xl
        py-2
        w-full
        transition
        duration-150
        ease-in
      "
    >
      <span class="mr-2 uppercase">{title}</span>
      <span>
        <Fa icon={icon} class="h-6 w-6"/>
      </span>
    </button>
  </div>