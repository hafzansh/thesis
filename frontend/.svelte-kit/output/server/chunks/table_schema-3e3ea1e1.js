const iklim = [
  {
    name: "Tahun",
    id: "tahun",
    maxlength: 4,
    hidden: true
  },
  {
    name: "Stasiun",
    id: "stasiun",
    hidden: true
  },
  {
    name: "Suhu (Min)",
    id: "suhu_min"
  },
  {
    name: "Suhu (Max)",
    id: "suhu_max"
  },
  {
    name: "Suhu (Avg)",
    id: "suhu_avg"
  },
  {
    name: "Humidity (Avg)",
    id: "humidity_avg"
  },
  {
    name: "Curah Hujan",
    id: "curah_hujan"
  },
  {
    name: "Hari Hujan",
    id: "hari_hujan"
  },
  {
    name: "Penyinaran (Hari)",
    id: "penyinaran"
  },
  {
    name: "ID",
    id: "id",
    hidden: true
  }
];
const iklim_dummy = {
  stasiun: "1",
  tahun: "2000",
  suhu_min: 0,
  suhu_max: 0,
  suhu_avg: 0,
  humidity_avg: 0,
  curah_hujan: 0,
  hari_hujan: 0,
  penyinaran: 0,
  id: 0
};
const padi_dummy = {
  kota: "string",
  tahun: "string",
  luas_panen: 0,
  luas_lahan: 0,
  produktivitas: 0,
  produksi: 0,
  id: 0
};
export { iklim_dummy as a, iklim as i, padi_dummy as p };
