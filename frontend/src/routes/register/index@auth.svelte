<script context="module" lang="ts">
  import { goto } from "$app/navigation";
  import { send } from "../../lib/shared/api";
  import { fade, fly } from "svelte/transition";
  import {
    faAt,
    faLock,
    faArrowRightToBracket as faLogin,
    faReceipt,
faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import Alert from "../../lib/components/others/alert.svelte";
  import { FormButton, PasswordInput, TextInput } from "@comp/forms";
  import { onMount } from "svelte";
  import type { Load } from "@sveltejs/kit";
  import Fa from "svelte-fa";
  export const load: Load = ({ session }) => {
    if (session.user.authenticated) {
      return {
        status: 302,
        redirect: "/",
      };
    }

    return {};
  };
</script>

<script lang="ts">
  const register = () => {
    goto("/login");
  };
  let error: string;
  let ready: boolean = false;
  async function login(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error) {
      return (error = response.error);
    }
    window.location.href = "/";
  }
  onMount(() => (ready = true));
</script>

{#if ready}
  <div
    class="flex flex-col min-h-screen bg-gray-200 justify-center items-center"
  >
    <div
      in:fly={{ y: 500, duration: 1000 }}
      out:fade
      
      class="flex flex-col
    bg-white
    shadow-md
    px-8
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-96
    max-w-lg"
    >
    <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
      <div class="flex w-full items-center justify-center mb-5 h-20">
        <img src="/images/logo.png" class="h-14 w-14" alt="logo" />
  
        <span class="text-[60px] font-bold align-middle ml-3 mb-2"
          >JST<span class="text-primary font-semibold">PADI</span></span
        >
      </div>
    </div>
      <div class="">
        <form on:submit|preventDefault={login} method="post">
          <div>
            <div class="label">
              <label class="label-text" for="username">Username</label>
            </div>
            <TextInput
              icon={faAt}
              error={false}
              focused={true}
              id="username"
              inputName="username"
              placeholder="username"
              required={true}
            />

            <div>
              <div class="label">
                <label class="label-text" for="full_name">Full Name</label>
              </div>
              <TextInput
                icon={faUser}
                error={false}
                focused={true}
                id="full_name"
                inputName="full_name"
                placeholder="full_name"
                required={true}
              />
  
              <div>
              <div class="label">
                <label class="label-text" for="password">Password</label>
              </div>
              <PasswordInput
                icon={faLock}
                error={false}
                focused={false}
                id="password"
                inputName="password"
                placeholder="password"
                required={true}
              />
            </div>

            {#if error}
              <Alert message={error} />
            {/if}
            <FormButton type="submit" icon={faReceipt} title="Register" />
            <div class="flex w-full">
              <button
                on:click={register}
                class="
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-primary
                hover:bg-primary-focus
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
              "
              >
                <span class="mr-2 uppercase">Sign in</span>
                <span>
                  <Fa icon={faLogin} class="h-6 w-6" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}
