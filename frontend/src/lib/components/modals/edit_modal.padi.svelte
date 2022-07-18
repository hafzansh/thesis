<script lang="ts">

  export const city: Array<string> = [
    "Tanah Laut",
    "Kotabaru",
    "Banjar",
    "Barito Kuala",
    "Tapin",
    "Hulu Sungai Selatan",
    "Hulu Sungai Tengah",
    "Hulu Sungai Utara",
    "Tabalong",
    "Tanah Bumbu",
    "Balangan",
    "Kota Banjarmasin",
    "Kota Banjarbaru",
  ];
  import { toast } from '@zerodevx/svelte-toast'
  import type { Padi } from "../../utils/schema";
  export let data: Padi[];
  export let selected: any;
  export let values = false;
  export let edit_response: Padi = {
    kota: "string",
    tahun: "string",
    luas_panen: 0,
    luas_lahan: 0,
    produktivitas: 0,
    produksi: 0,
    id: 0,
  };
  let select: any = parseInt(selected);
  const submit = async () => {
    data = data.map((obj) => {
      let a;
      let a_val
      if (isNaN(select)) {
        a = parseInt(edit_response.kota);
        a_val = city[parseInt(edit_response.kota)-1]
      } else {
        a = city[select - 1];
        a_val = a
      }
      if (obj.id === edit_response.id) {
        try {
          
        } catch (error) {
          
        }
        let as = { ...obj, tahun: edit_response.tahun, kota: a_val.toString(),luas_lahan:edit_response.luas_lahan };
        toast.push('Data has been updated!')
        return as
      }
      return obj;
    });
    values = !values;        
  };
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-edit"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box relative">
    <h3 class="py-3 text-lg font-bold font-inter">Edit Data</h3>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Tahun</span>
      <input
        type="text"
        pattern="\d*"
        maxlength="4"
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={edit_response.tahun}
        disabled
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Kota</span>
      <select disabled
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={select}
      >
        <option disabled selected value={parseInt(selected) + 1}
          >{city[parseInt(selected) - 1]}</option
        >
        {#each city as value, i}
          <option
            selected={(i + 1).toString() == edit_response.kota}
            value={i + 1}>{value}</option
          >
        {/each}
      </select>
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Luas Lahan</span>
      <input
        type="text"
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={edit_response.luas_lahan}
        required
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Luas Panen</span>
      <input
        type="text"
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={edit_response.luas_panen}
        required
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Produktivitas</span>
      <input
        type="text"
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={edit_response.produktivitas}
        required
      />
    </label>
    <label class="input-group w-full mb-5">
      <span class="w-1/2">Produksi</span>
      <input
        type="text"
        class="input input-bordered w-full text-right font-inter font-bold"
        bind:value={edit_response.produksi}
        required
      />
    </label>
    <p class="py-1 font-inter">This item will be updated!</p>

    <button class="btn btn-success float-right" on:click={submit}
      >Confirm</button
    >
    <label for="modal-edit" class="btn float-right mr-5"
      >Cancel

      <!-- <button class="btn float-right mr-5">Cancel</button> -->
    </label>
  </div>
</div>
