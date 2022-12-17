import type { RequestHandler } from "@sveltejs/kit";
import { get_data, put_data } from "../../lib/shared/api";
import { baseApi } from "../../lib/utils/constants";

export const get:RequestHandler = async(event)=> {
    const response = await get_data(`${baseApi}/users/`,event.locals.token)
    const data = await response.json()
    return {
        status:200,
        body: {data:data}
    }
}
export const post:RequestHandler = async(event)=> {
    const form = await event.request.formData()
    const body = {
        "username": form.get('username'),
        "is_active": form.get('is_active'),
        "is_superuser": form.get('is_superuser'),
        "full_name": form.get('full_name'),
        "password": form.get('password'),
    }
    const res = await put_data(`${baseApi}/users/${form.get('id')}`,event.locals.token,body)
    const data = await res.json()
    return{
        status:200,
        body: {success:data}
    }
}