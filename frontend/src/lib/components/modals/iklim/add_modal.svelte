<script lang="ts">
  import { toast } from "@zerodevx/svelte-toast";
  import { send } from "../../../../lib/shared/api";
  import { iklim } from "../../../../lib/utils/table_schema";
  const form_data: Array<{
    name: string;
    id: string;
    hidden?: boolean;
    maxlength?: number;
  }> = iklim;
  export let values = false;
  async function submitForm(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error) {
      return toast.push(`Error, Already have data!`);
    }
    toast.push("Data has been Added");
    values = !values;
    window.location.href = "/aktual/iklim";
  }
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-add"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <form method="post" on:submit|preventDefault={submitForm}>
      <h3 class="py-3 text-lg font-bold font-inter">Add Iklim Data</h3>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Stasiun</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="stasiun"
          name="stasiun"
        >
          <option value="1">Stasiun Klimatologi Banjarbaru</option>
          <option value="2">Stasiun Meteorologi Syamsudin Noor</option>
          <option value="3">Stasiun Meteorologi Stagen Kotabaru</option>
        </select>
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Tahun</span>
        <input
          type="number"
          min="2000"
          max="2900"
          value="2010"
          step="1"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="tahun"
          id="tahun"
          required
        />
      </label>
      {#each form_data as fd}
        {#if !fd.hidden}
          <label class="input-group w-full mb-5">
            <span class="w-1/2">{fd.name}</span>
            <input
              type="number"
              value="00.00"
              step="0.01"
              class="input input-bordered w-full text-right font-inter font-bold"
              name={fd.id}
              id={fd.id}
              required
            />
          </label>
        {/if}
      {/each}

      <button class="btn btn-success float-right" type="submit">Confirm</button>
      <label for="modal-add" class="btn float-right mr-5"
        >Cancel
      </label>
    </form>
  </div>
</div>
