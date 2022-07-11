<script lang="ts">
  import { send } from "../../lib/shared/api";
  import Fa from "svelte-fa";
  import { faAt,faLock } from "@fortawesome/free-solid-svg-icons";
  import TextInput from "@lib/components/forms/text_input.svelte"
  import Alert from "@comp/notification/alert.svelte";
  export let error: string;
  async function login(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error) {
      error = response.error;
    }
  }
</script>

<div class="flex flex-col min-h-screen bg-gray-200 justify-center items-center">
  <div
    class="flex flex-col
    bg-white
    shadow-md
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-50
    max-w-md"
  >
  <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
    Welcome Back
  </div>
  <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
    Enter your credentials to access your account
  </div>
  <div class="mt-10">
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
            <label class="label-text" for="username">Username</label>
          </div>
          <div class="relative">
            <div
              class="
                inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gray-400
              "
            >
              <Fa icon={faLock} />
            </div>
          <input
            class="input input-bordered pl-10 w-full max-w-xs rounded-2xl focus:outline-none focus:border-blue-400"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>

        {#if error}
          <Alert message={error} />
        {/if}

        <div class="flex w-full">
            <button
              type="submit"
              class="
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-blue-500
                hover:bg-blue-600
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
              "
            >
              <span class="mr-2 uppercase">Sign In</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
      </div>
    </form>
</div>
  </div>
</div>
