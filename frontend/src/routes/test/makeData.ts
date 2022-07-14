import { object } from "yup"
import { get } from "../../lib/shared/api"
import { baseApi } from "../../lib/utils/constants"
import type { iPadi, Padi } from "../../lib/utils/schema"

let data_length:number
const range = (len: number) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}
export const fetchThisData = async (token:string) => {
    let res = await get(`${baseApi}/padi/`,token)
    return res
}

export const newPadi = async (token: string): Promise<Padi> => {
    const data = await fetchThisData(token).then(data => { return data.json()})
    data_length = data.length
    const r = data
    return {
        kota: r.kota,
        tahun: r.tahun,
        luas_panen: r.luas_panen,
        luas_lahan: r.lahan,
        produktivitas: r.produktivitas,
        produksi: r.produksi,
        id: r.id,
    }
}
interface IKeys { key1: string; key2: string }
export const newPads = async (token: string) => {
    const data = await fetchThisData(token).then(data => { return data.json()})    
    const res = data.map((val: any): iPadi => ({
        kota: val.kota,
        tahun: val.tahun,
        luas_panen: val.luas_panen,
        luas_lahan: val.luas_lahan,
        produktivitas: val.produktivitas,
        produksi: val.produksi,
        id: val.id,

    }));
    return res[0]
}
// export function makeData(token:string) {
//     const makeDataLevel = (depth = 0): Padi[] => {
//       const len = data_length
//       return range(len).map((d): Padi => {
//         return {
//           ...newPadi(token),
//           subRows: data_length ? makeDataLevel(depth + 1) : undefined,
//         }
//       })
//     }
  
//     return makeDataLevel()
//   }