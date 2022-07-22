import type { GetSession, Handle } from "@sveltejs/kit"
import cookie from 'cookie'
import { getUserData } from "./lib/auth/login"

export const handle: Handle = async ({ event, resolve }) => {
    const cookieHeader = event.request.headers.get('cookie')
    const cookies = cookie.parse(cookieHeader ?? '')
    if (!cookies.auth_token) {
        return resolve(event)
    }
    const session = await getUserData(cookies.auth_token).then(res => {
        return res.json()
    })
    if (session) {
        event.locals.user = session
        event.locals.token = cookies.auth_token
    }
    // console.log(event.params)
    return await resolve(event,{ ssr: false })
}

export const getSession: GetSession = async ({ locals, request }) => {
    if (!locals.user)
        return {
            
            user: {
                id: 0,
                username: '',
                full_name: '',
                is_superuser: false,
                auth_token: '',
                authenticated: false

            }
        }
    return {
        user: {
            id: locals.user.id ?? 0,
            username: locals.user.username,
            full_name: locals.user.full_name,
            is_superuser: locals.user.is_superuser,
            auth_token: locals.token,
            authenticated: true
        }
    }
}