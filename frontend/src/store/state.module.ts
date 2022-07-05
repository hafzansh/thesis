import { writable } from "svelte/store";
import { z } from "zod";
const AppState = z.object({
    isSuperUser: z.boolean(),
    username : z.string(),
    full_name : z.string(),
})

type AppStateType = z.infer<typeof AppState>


interface AuthState {
    loggedIn : boolean;
}

const initialAppState:AppStateType = {
    isSuperUser: false,
    username: 'username',
    full_name: 'full name'
}
let initialAuthState:AuthState = {
    loggedIn : false,
}



export let authState = writable(initialAuthState);
export const appState = writable(initialAppState);

export const resetAppState = (): void => appState.update(() => initialAppState);
export const resetAuthState = (): void => authState.update(() => initialAuthState);


