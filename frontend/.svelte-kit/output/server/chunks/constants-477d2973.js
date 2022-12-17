import "@fortawesome/free-solid-svg-icons";
const baseApi = "http://localhost:8081/api";
const JSONContentTypeForm = "application/x-www-form-urlencoded";
const city = [
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
  "Kota Banjarbaru"
];
const stasiun = [
  "",
  "Stasiun Klimatologi Banjarbaru",
  "Stasiun Meteorologi Syamsudin Noor",
  "Stasiun Meteorologi Stagen Kotabaru"
];
export { JSONContentTypeForm as J, baseApi as b, city as c, stasiun as s };
