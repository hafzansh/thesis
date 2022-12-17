<script lang="ts">
  import { session } from "$app/stores";

  import { toast } from "@zerodevx/svelte-toast";
  import { padi_dummy } from "../../../../lib/utils/table_schema";
  import { put_data } from "../../../shared/api";
  import { baseApi, } from "../../../utils/constants";
  import type {  Padi } from "../../../utils/schema";
  export let edit_response: Padi = padi_dummy;
  export let values = false;
  async function submitForm() {
    const body = {
      kota: edit_response.kota,
      tahun: edit_response.tahun,
      luas_panen: edit_response.luas_panen,
      luas_lahan: edit_response.luas_lahan,
      produktivitas: edit_response.produktivitas,
      produksi: edit_response.produksi,
    };
    const res = await put_data(
      `${baseApi}/padi/id/${edit_response.id}`,
      $session.user.auth_token,
      body
    ).then(res=>res.json())
    if (res.detail){
      return toast.push("Error, "+JSON.stringify(res.detail))
    }
    toast.push('Success')
    window.location.href = '/aktual/padi'
  }
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-edit"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <form on:submit|preventDefault={submitForm}>
      <h3 class="py-3 text-lg font-bold font-inter">Edit Padi Data</h3>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Kota</span>
        <select
          class="input input-bordered w-full text-right font-inter font-bold"
          id="kota"
          name="kota"
          bind:value={edit_response.kota}
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
          min="2000"
          max="2900"
          bind:value={edit_response.tahun}
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
          bind:value={edit_response.luas_panen}
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
          bind:value={edit_response.luas_lahan}
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
          bind:value={edit_response.produktivitas}
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
          bind:value={edit_response.produksi}
          required
        />
      </label>
      <p class="py-1 font-inter">This item will be updated!</p>


      <button class="btn btn-success float-right" type="submit">Confirm</button>
      <label for="modal-edit" class="btn float-right mr-5">Cancel </label>
    </form>
  </div>
</div>
