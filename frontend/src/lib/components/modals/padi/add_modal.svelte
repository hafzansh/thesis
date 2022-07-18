<script lang="ts">
  import { toast } from "@zerodevx/svelte-toast";
  import {  send } from "../../../shared/api";
  export let values = false;
  async function submitForm(event:SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error == "400") {
      return toast.push(`Error, user doesn't have enough privilages`);
    }else if (response.error) {
      return toast.push('Error, Already have data!')
    }
    toast.push("Data has been Added");
    values = !values;
    window.location.href = "/aktual/padi";
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
      <h3 class="py-3 text-lg font-bold font-inter">Add Padi Data</h3>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Kota</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="kota"
          name="kota"
        >        
          <option value="1">Tanah Laut</option>
          <option value="2">Kotabaru</option>
          <option value="3">Banjar</option>
          <option value="4">Bariot Kuala</option>
          <option value="5">Tapin</option>
          <option value="6">Hulu Sungai Selatan</option>
          <option value="7">Hulu Sungai Tengah</option>
          <option value="8">Hulu Sungai Utara</option>
          <option value="9">Tabalong</option>
          <option value="10">Tanah Bumbu</option>
          <option value="11">Balangan</option>
          <option value="12">Kota Banjarmasin</option>
          <option value="13">Kota Banjarbaru</option>
        </select>
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Tahun</span>
        <input
          type="number"
          value="2000"
          min="2000"
          max="2900"
          step="1"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="tahun"
          id="tahun"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Luas Panen</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="luas_panen"
          id="luas_panen"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Luas Lahan</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="luas_lahan"
          id="luas_lahan"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Produktivitas (%)</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="produktivitas"
          id="produktivitas"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Produksi</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="produksi"
          id="produksi"
          required
        />
      </label>
      <p class="py-1 font-inter">This item will be added!</p>


      <button class="btn btn-success float-right" type="submit">Confirm</button>
      <label for="modal-add" class="btn float-right mr-5">Cancel </label>
    </form>
  </div>
</div>
