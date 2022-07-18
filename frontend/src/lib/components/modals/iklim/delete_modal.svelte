<script lang="ts">
  import { session } from "$app/stores";

  import { toast } from "@zerodevx/svelte-toast";
  import { iklim_dummy } from "../../../../lib/utils/table_schema";
  import { delete_data } from "../../../shared/api";
  import { baseApi } from "../../../utils/constants";
  import type { Iklim } from "../../../utils/schema";
  export let edit_response: Iklim = iklim_dummy;
  export let data: Iklim[];
  export let values = false;
  async function submitForm() {
    const res = await delete_data(
      `${baseApi}/iklim/id/${edit_response.id}`,
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
    <h3 class="py-3 text-lg font-bold font-inter">Delete Iklim Data</h3>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Stasiun</span>
      <select
        class="input input-bordered w-full text-right font-inter font-bold"
        id="stasiun"
        name="stasiun"
        bind:value={edit_response.stasiun}
        disabled
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
        bind:value={edit_response.tahun}
        step="1"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="tahun"
        id="tahun"
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Suhu Min</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="suhu_min"
        id="suhu_min"
        bind:value={edit_response.suhu_min}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Suhu Max</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="suhu_max"
        id="suhu_max"
        bind:value={edit_response.suhu_max}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Suhu Avg</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="suhu_avg"
        id="suhu_avg"
        bind:value={edit_response.suhu_avg}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Humidity Avg</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="humidity_avg"
        id="humidity_avg"
        bind:value={edit_response.humidity_avg}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Curah Hujan</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="curah_hujan"
        id="curah_hujan"
        bind:value={edit_response.curah_hujan}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Hari Hujan</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="hari_hujan"
        id="hari_hujan"
        bind:value={edit_response.hari_hujan}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Penyinaran</span>
      <input
        type="number"
        step="0.01"
        class="input input-bordered w-full text-right font-inter font-bold"
        name="penyinaran"
        id="penyinaran"
        bind:value={edit_response.penyinaran}
        disabled
      />
    </label>
    <p class="py-1 font-inter">This item will be <b class="text-primary">deleted</b>!</p>
    

    <button class="btn btn-success float-right" on:click={submitForm}
      >Confirm</button
    >
    <label for="modal-delete" class="btn float-right mr-5">Cancel </label>
  </div>
</div>
