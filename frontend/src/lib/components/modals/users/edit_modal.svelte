<script lang="ts">
import { toast } from "@zerodevx/svelte-toast";

import { send } from "../../../shared/api";

import type { Users } from "../../../utils/schema";


  async function submitForm(event:SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error == "400") {
      return toast.push(`Error, user doesn't have enough privilages`);
    }else if (response.error) {
      return toast.push('Error, Already have data!')
    }
    toast.push("Data has been updated");
    values = !values;
    window.location.href = "/users/";
  }
  export let selected_data: Users;
  export let values = false;

</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-edit"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-2xl">
    <form method="post" on:submit|preventDefault={submitForm}>
      <h3 class="py-3 text-lg font-bold font-inter">Edit User Data</h3>
      <label class="input-group w-full mb-5 hidden">
        <span class="w-1/2">id</span>
        <input
          type="text"
          bind:value={selected_data.id}
          class="input input-bordered w-full text-right font-inter font-bold"
          name="id"
          id="id"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Username</span>
        <input
          type="text"
          bind:value={selected_data.username}
          class="input input-bordered w-full text-right font-inter font-bold"
          name="username"
          id="username"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Full Name</span>
        <input
          type="text"
          bind:value={selected_data.full_name}
          class="input input-bordered w-full text-right font-inter font-bold"
          name="full_name"
          id="full_name"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Superuser</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="is_superuser"
          name="is_superuser"
          bind:value={selected_data.is_superuser}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <label class="input-group w-full mb-5 hidden">
        <span class="w-1/2">Is Active</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="is_active"
          name="is_active"
          bind:value={selected_data.is_active}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <p class="py-1 font-inter">This user data be updated!</p>

      <button class="btn btn-success float-right" type="submit">Confirm</button>
      <label for="modal-edit" class="btn float-right mr-5">Cancel </label>
    </form>
  </div>
</div>
