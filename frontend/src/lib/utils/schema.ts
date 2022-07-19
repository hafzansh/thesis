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
export type Model_Type = {
  epoch: number,
  id: number,
  loss: any,
  mae: number,
  size:string,
  rate:number,
  node: number,
  path: number,
  result: any,
  error?:string
}
export type Model_Result = {
  City: number,
  Year: number,
  Prediction: number,
  'Test Data': number,
  MAE:number
}
export type Model_Loss = {
  loss: number,
  val_loss: number,
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
export type model = {
  id:number,
  path:string,
  node:number,
  epoch:number,
  mae:number,
  loss:Array<{loss:number,val_loss:number}>,
  result:Array<{city:number,year:number,"Test Data":number}>
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