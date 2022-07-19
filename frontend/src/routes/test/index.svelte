<script lang="ts">
import { goto } from "$app/navigation";
import { toast } from "@zerodevx/svelte-toast";

import { send } from "../../lib/shared/api";

import { iklim } from "../../lib/utils/table_schema";
  let form_data:Array<{name:string,id:string}> = iklim
  export let data_status:boolean
  export let data
  form_data.pop()
  export let values = false
  async function submitForm(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error){
      return toast.push('Error, Status Code:'+response.error)
    }
    toast.push('Data has been Added')
    goto('/aktual/iklim')
  }
  console.log(data_status)
  console.log(data)
</script>
<div class="">
<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-edit"
  class="modal-toggle"
/>
<div class="grid grid-flow-row auto-rows-max justify-center">
  <button class="btn btn-primary">asas</button>
  <button class="btn btn-primary">asas</button>
</div>
<form method="post" on:submit|preventDefault={submitForm}>
  <div class="">
    <h3 class="py-3 text-lg font-bold font-inter">Edit Data</h3>
    {#each form_data as fd}
    <label class="input-group w-full mb-5">
      <span class="w-1/2">{fd.name}</span>
      <input
        type="text"
        pattern="\d*"
        maxlength="6"
        class="input input-bordered w-full text-right font-inter font-bold"
        name={fd.id}
        id={fd.id}
        required
      />
    </label>
    {/each}
    <p class="py-1 font-inter">This item will be updated!</p>

    <button class="btn btn-success float-right" type="submit">Confirm</button>
    <label for="modal-edit" class="btn float-right mr-5"
      >Cancel

      <!-- <button class="btn float-right mr-5">Cancel</button> -->
    </label>
  </div>
</form>
</div>