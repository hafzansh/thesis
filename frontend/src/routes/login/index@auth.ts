import type { RequestHandler } from '@sveltejs/kit'

import cookie from 'cookie'
import { getAccessToken } from '../../lib/auth/login'

export const post: RequestHandler = async ({ request }) => {
    const form = await request.formData()
    const username = form.get('username')
    const password = form.get('password')
    if (
        typeof username !== 'string' ||
        typeof password !== 'string'
    ) {
        return {
            status: 400,
            body: {
                error: 'Enter a valid username and password.',
            },
        }
    }

    if (!username || !password) {
        return {
            status: 400,
            body: {
                error: 'Username and password are required.',
            },
        }
    }
    const user = {
        username: username,
        password: password
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
        body: {
            user: { username },
            success: 'Success.',
        },
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