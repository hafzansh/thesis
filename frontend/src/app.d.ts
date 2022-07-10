/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {
	// 	// user: {
	// 	// 	username:string
	// 	// }
	// 	user:{
	// 		username:string,
	// 		full_name:string
	// 	}
	// }
	// interface Platform {}
	interface Session {
		user: string
	}
	// interface Stuff {}
}
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}
declare module 'svelte-yup'{
	export * from 'svelte-yup'
}
