import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

export const sign_in_schema = yup.object().shape({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

export default class User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export type Padi = {
  kota: string,
  tahun: string,
  luas_panen: number,
  luas_lahan: number,
  produktivitas: number,
  produksi: number,
  id: number,
}
export type Iklim = {
  stasiun: string,
  tahun: string,
  suhu_min: number,
  suhu_max: number,
  suhu_avg: number,
  humidity_avg:number,
  curah_hujan: number,
  hari_hujan: number,
  penyinaran: number,
  id: number,
}
export interface iPadi {
  kota: string,
  tahun: string,
  luas_panen: number,
  luas_lahan: number,
  produktivitas: number,
  produksi: number,
  id: number,
}

export type TProps = {
  fixedHeader: boolean,
  columns: Array<any>
}

export type TPNav = { title: string, path: string, icon: IconDefinition, sublink?: Array<TPNav> }