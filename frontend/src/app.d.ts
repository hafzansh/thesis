/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
		user: any;
		session: string;
		token:string
	}
	// interface Platform {}
	interface Session {
		user: {
			id:number,
			username:string,
			full_name:string,
			is_superuser:boolean,
			auth_token:string,
			authenticated:boolean
		}
	}
	// interface Stuff {}
}
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}
declare module 'svelte-yup'{
	export * from 'svelte-yup'
}
declare module 'svelte-table'{
    export {SvelteTable} from 'svelte-table'
}
declare module 'theme-change'{
	export {themeChange} from 'theme-change'
}