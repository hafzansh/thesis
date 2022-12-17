<script lang="ts">
    import { session } from "$app/stores";
  
    import { toast } from "@zerodevx/svelte-toast";
    import { delete_data } from "../../../shared/api";
    import { baseApi } from "../../../utils/constants";
    import type { Model_Type } from "../../../utils/schema";
    export let edit_response: Model_Type;
    export let data: Model_Type[];
    export let values = false;
    async function submitForm() {
      const res = await delete_data(
        `${baseApi}/model/id/${edit_response.id}`,
        $session.user.auth_token
      ).then((res) => res.json());
      if (res.detail) {
        return toast.push("Error, " + res.detail);
      }
      data = data.filter(function (el: any) {
        return el.id != edit_response.id;
      });
      toast.push("Data has been deleted!");
      values = !values;
    }
  </script>
  
  <input
    bind:value={values}
    bind:checked={values}
    type="checkbox"
    id="modal-delete"
    class="modal-toggle"
  />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="py-3 text-lg font-bold font-inter">Delete Training Model</h3>      
      <p class="py-1 font-inter">This model will be <b class="text-primary">deleted</b>!</p>
      <button class="btn btn-success float-right" on:click={submitForm}
        >Confirm</button
      >
      <label for="modal-delete" class="btn float-right mr-5">Cancel </label>
    </div>
  </div>
  