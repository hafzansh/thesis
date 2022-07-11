<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    export let icon: IconDefinition;
    export let id:string;  
    export let inputName = "text";
    export let label = "";
    export let placeholder = "";
    export let value = "";
    export let error = false;
    export let focused = false;
  </script>
  
  <div class="flex flex-col mb-5">
    <label for="text" class="mb-1 text-xs tracking-wide text-gray-600"
      >{label}</label
    >
    <div class="relative">
      <div
        class="
                inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gray-400
              "
      >
        <Fa icon={icon} class="h-4 w-4 text-blue-500" />
      </div>
  
      <!-- svelte-ignore a11y-autofocus -->
      <input
        type="password"
        id={id}
        bind:value
        autofocus={focused}
        name={inputName}
        on:input={() => (error = false)}
        class="
                text-sm
                placeholder-gray-500
                pl-10
                pr-4
                rounded-2xl
                border border-gray-400
                w-full
                py-2
                focus:outline-none focus:border-blue-400
              "
        class:invalidInput={error}
        {placeholder}
      />
    </div>
  </div>
  