<script lang="ts">
    let val:any
</script>

<div>
    <input type="text" class="input input-bordered w-full" bind:value={val}/>
  <form method="post">
    <h3 class="py-3 text-lg font-bold font-inter">Add Padi Data</h3>
    <label class="input-group w-full mb-5">
        <span class="w-1/2">Model Path</span>
        <input
          type="text"
          bind:value={val}
          
          class="input input-bordered w-full text-right font-inter font-bold"
          name="tahun"
          id="tahun"
          disabled
        />
        <button class="btn btn-primary">Select</button>
      </label>
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
        <span class="w-1/2">Suhu (Min)</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="suhu_min"
          id="suhu_min"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Suhu (Max)</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="suhu_max"
          id="suhu_max"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Suhu (Avg)</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="suhu_avg"
          id="suhu_avg"
          required
        />
      </label>
      <label class="input-group w-full mb-5">
        <span class="w-1/2">Humidity (Avg)</span>
        <input
          type="number"
          step="0.01"
          class="input input-bordered w-full text-right font-inter font-bold"
          name="humidity_avg"
          id="humidity_avg"
          required
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
          required
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
          required
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
          required
        />
      </label>
    <p class="py-1 font-inter">This item will be added!</p>

    <button class="btn btn-success float-right" type="submit">Confirm</button>
    <label for="modal-add" class="btn float-right mr-5">Cancel </label>
  </form>
</div>
