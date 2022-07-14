import { faComputer, faHome, faServer, faTableColumns, faTableList } from "@fortawesome/free-solid-svg-icons"
import type { TPNav } from "./schema"

// export const baseApi = 'http://localhost:8000/api'
export const baseApi = 'http://192.168.100.114:8000/api'
export const JSONContentTypeForm = "application/x-www-form-urlencoded"
export const app_title = "JST Padi"
export const city: Array<string> = [
    '',
    'Tanah Laut',
    'Kotabaru',
    'Banjar',
    'Barito Kuala',
    'Tapin',
    'Hulu Sungai Selatan',
    'Hulu Sungai Tengah',
    'Hulu Sungai Utara',
    'Tabalong',
    'Tanah Bumbu',
    'Balangan',
    'Kota Banjarmasin',
    'Kota Banjarbaru'
]
export const PageNav: Array<TPNav> = [
    { title: "Dashboard", path: "/", icon: faHome },
    { title: "Data Aktual", path: '', icon: faTableColumns, sublink: [{ title: "Data Padi", path: "/aktual/padi", icon: faTableList, }, { title: "Data Iklim", path: "/aktual/iklim", icon: faTableColumns, }] },
    { title: "Model Neural Network", path: '', icon: faTableColumns, sublink: [{ title: "Model Data", path: "/model/data", icon: faServer, }, { title: "Model Training", path: "/model/training", icon: faComputer, }] },

]