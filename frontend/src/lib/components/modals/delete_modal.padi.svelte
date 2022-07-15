<script lang="ts">
import type { Padi } from "../../utils/schema";
  export let open:boolean = false
  export let selected:any
  export let data: Padi[]
  export let edit_response: Padi = {
    kota: "string",
    tahun: "string",
    luas_panen: 0,
    luas_lahan: 0,
    produktivitas: 0,
    produksi: 0,
    id: 0,
  };
  const delete_item = () => {
    data = data.filter(function (el: any) {
      return el.id != selected;
    });
    open = !open;
  };
</script>
<input
bind:value={open}
bind:checked={open}
type="checkbox"
id="modal-delete"
class="modal-toggle"
/>

<label for="modal-delete" class="modal">
<div class="modal-box relative">
  <h3 class="py-3 text-lg font-bold font-inter">Delete data?</h3>
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
    <input
      type="text"
      class="input input-bordered w-full text-right font-inter font-bold"
      bind:value={edit_response.kota}
      disabled
    />
  </label>
  <label class="input-group w-full mb-5">
    <span class="w-1/2">Luas Lahan</span>
    <input
      type="text"
      class="input input-bordered w-full text-right font-inter font-bold"
      bind:value={edit_response.luas_lahan}
      disabled
    />
  </label>
  <label class="input-group w-full mb-5">
    <span class="w-1/2">Luas Panen</span>
    <input
      type="text"
      class="input input-bordered w-full text-right font-inter font-bold"
      bind:value={edit_response.luas_panen}
      disabled
    />
  </label>
  <label class="input-group w-full mb-5">
    <span class="w-1/2">Produktivitas</span>
    <input
      type="text"
      class="input input-bordered w-full text-right font-inter font-bold"
      bind:value={edit_response.produktivitas}
      disabled
    />
  </label>
  <label class="input-group w-full mb-5">
    <span class="w-1/2">Produksi</span>
    <input
      type="text"
      class="input input-bordered w-full text-right font-inter font-bold"
      bind:value={edit_response.produksi}
      disabled
    />
  </label>
  <p class="py-1 font-inter">This item will be deleted!</p>
  <button class="btn btn-primary float-right font-inter" on:click={delete_item}
    >Confirm</button
  >
  <button class="btn float-right mr-5 font-inter" on:click={() => open = !open}
    >Cancel</button
  >
</div>
</label>