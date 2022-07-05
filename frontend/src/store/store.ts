import { writable } from "svelte/store";

export const isAuthenticated = writable(false)
interface user{
    username:string,
    is_active:boolean,
    is_superuser:boolean,
    full_name:string,
    id:number
}
let init_user = localStorage.user
export const user_data = writable(init_user || {})