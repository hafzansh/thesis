<script lang="ts">
  import type { CustomError } from "src/lib/interfaces/error.interface";
  import { onMount } from "svelte";
  import { navigateTo } from "svelte-router-spa";
  import User from "../../models/User";
  import Auth_Service from "../../services/authservice";
  import TextInput from "../components/forms/text_input.svelte";
  import PasswordInput from "../components/forms/password_input.svelte";
  let username = "",
    password = "",
    errors: Array<CustomError>;
  const handleLogin = async (e) => {
    let user = new User(username, password);
    const response = Auth_Service.login(user);
    if (e.length > 0) {
      errors = e;
    } else if (response) {
      await navigateTo("user");
    }
  };
  onMount(() => {
    if (localStorage.getItem("user") != null) {
      navigateTo("user");
    }
  });
</script>

<div>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="
            flex flex-col
            bg-white
            shadow-md
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-8
            rounded-3xl
            w-50
            max-w-md
          "
    >
      <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Welcome Back
      </div>
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
        Enter your credentials to access your account
      </div>

      <div class="mt-10">
        <form action="/" on:submit|preventDefault={handleLogin}>
          <TextInput
            bind:value={username}
            icon="user"
            error={false}
            focused={true}
            placeholder="Input your username"
          />
          <PasswordInput
            bind:value={password}
            icon="lock-closed"
            error={false}
            placeholder="Input your password"
          />

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
        </form>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a
        href="/"
        target="_blank"
        class="
              inline-flex
              items-center
              text-gray-700
              font-medium
              text-xs text-center
            "
      >
        <span class="ml-2"
          >You don't have an account?
          <a href="/" class="text-xs ml-2 text-blue-500 font-semibold"
            >Register now</a
          ></span
        >
      </a>
    </div>
  </div>
</div>
