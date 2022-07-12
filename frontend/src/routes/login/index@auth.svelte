<script context="module" lang="ts">
  import { send } from "../../lib/shared/api";
  import { fade, fly } from "svelte/transition";
  import { faAt, faLock,faArrowRightToBracket as faLogin } from "@fortawesome/free-solid-svg-icons";
  import Alert from "@comp/notification/alert.svelte";
  import { FormButton, PasswordInput, TextInput } from "@comp/forms";
  import {onMount} from 'svelte'
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ session }) => {
    if (session.user.authenticated) {
      return {
        status: 302,
        redirect: "/",
      };
    }

    return {}
    
  };
</script>

<script lang="ts">
  let error: string;
  let ready:boolean = false;
  async function login(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error) {
      return (error = response.error);
    }
    window.location.href = '/'  
  }
  onMount(() => ready = true)
</script>
{#if ready}
<div class="flex flex-col min-h-screen bg-gray-200 justify-center items-center">
  <div in:fly={{ y: -500, duration: 1000 }} out:fade
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
      Welcome Back
    </div>
    <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
      Enter your credentials to access your account
    </div>
    <div class="mt-10">
      <form on:submit|preventDefault={login} method="post">
        <div >
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
          <FormButton type="submit" icon={faLogin} title="Sign In" />
        </div>
      </form>
    </div>
  </div>
</div>
{/if}