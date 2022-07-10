<script lang="ts">
  import { send } from "../../lib/shared/api";
  import Alert from "@comp/notification/alert.svelte"
  export let error: string;
  async function login(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.error) {
      error = response.error;
    }
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form on:submit|preventDefault={login} method="post">
          <div>
            <div class="label">
              <label class="label-text" for="username">Username</label>
            </div>
            <input class="input input-bordered w-full max-w-xs" id="username" name="username" type="text" required />
          </div>

          <div>
            <div class="label">
                <label class="label-text" for="username">Username</label>
            </div>
            <input class="input input-bordered w-full max-w-xs" id="password" name="password" type="password" required />
          </div>

          {#if error}
            <Alert message={error}/>
          {/if}

          <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</div>
