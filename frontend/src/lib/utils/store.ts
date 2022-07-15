import { writable } from "svelte/store";

export const toasts = writable<any>([]);

export const addToast = (toast:{message:string,type:string,dissmissible:boolean,timeout:number}) => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);

  // Setup some sensible defaults for a toast.
  const defaults:object = {
    id,
    type: "info",
    dismissible: true,
    timeout: 3000,
  }

  // Push the toast to the top of the list of toasts
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const dismissToast = (id:any) => {
  toasts.update((all) => all.filter((t:any) => t.id !== id));
};
