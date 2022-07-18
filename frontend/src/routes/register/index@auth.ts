import type { RequestHandler } from "@sveltejs/kit";
import { getAccessToken } from "../../lib/auth/login";
import { baseApi } from "../../lib/utils/constants";
import cookie from 'cookie'
export const post: RequestHandler = async (event) => {
    const form = await event.request.formData() 
    const body = {
        password: form.get('password'),
        username: form.get('username'),
        full_name: form.get('full_name')
    }
    const response = await fetch(`${baseApi}/users/open/`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
    if (response.detail) {
        return {
            body: { error: "username exist!" }
        }
    }
    const user = {
        username : form.get('username'),
        password: form.get('password')
    }
    const r = await getAccessToken(user).then(res => {return res?.json()})
    if (!r.access_token) {        
        return {
            status: 400,
            body: {
                error: r.detail
            }
        }
    }
    return {
        status: 200,
        headers: {
            'Set-Cookie': cookie.serialize(
                "auth_token",
                r.access_token,
                {
                    // send cookie for every page
                    path: '/',
                    // server side only cookie so you can't use `document.cookie`
                    httpOnly: true,
                    // only requests from same site can send cookies
                    // and serves to protect from CSRF
                    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                    sameSite: 'strict',
                    // only sent over HTTPS
                    secure: process.env.NODE_ENV === 'production',
                    // set cookie to expire after a month
                    maxAge: 60 * 60 * 24 * 30,
                }
            ),
        },
    }
}