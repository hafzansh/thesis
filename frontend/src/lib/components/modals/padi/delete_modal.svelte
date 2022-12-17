<script lang="ts">
  import { session } from "$app/stores";

  import { toast } from "@zerodevx/svelte-toast";
  import { padi_dummy } from "../../../../lib/utils/table_schema";
  import { delete_data } from "../../../shared/api";
  import { baseApi, } from "../../../utils/constants";
  import type {  Padi } from "../../../utils/schema";
  export let edit_response: Padi = padi_dummy;
  export let values = false;
  export let data:Padi[]
  async function submitForm() {
    const res = await delete_data(
      `${baseApi}/padi/id/${edit_response.id}`,
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
      <h3 class="py-3 text-lg font-bold font-inter">Delete Padi Data</h3>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Kota</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="kota"
          name="kota"
          bind:value={edit_response.kota}
          disabled
        >        
          <option value="1">Tanah Laut</option>
          <option value="2">Kotabaru</option>
          <option value="3">Banjar</option>
          <option value="4">Barito Kuala</option>
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
          min="2000"
          max="2900"
          bind:value={edit_response.tahun}
          step="1"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="tahun"
          id="tahun"
          disabled
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
          bind:value={edit_response.luas_panen}
          disabled
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
          bind:value={edit_response.luas_lahan}
          disabled
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
          bind:value={edit_response.produktivitas}
          disabled
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
          bind:value={edit_response.produksi}
          disabled
        />
      </label>
      <p class="py-1 font-inter">This item will be <b class="text-primary">deleted</b>!</p>


      <button class="btn btn-success float-right" on:click={submitForm}>Confirm</button>
      <label for="modal-delete" class="btn float-right mr-5">Cancel </label>

  </div>
</div>
