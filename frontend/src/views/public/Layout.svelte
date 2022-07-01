<script lang="ts">
  import Icon from '@krowten/svelte-heroicons/Icon.svelte';
  import User from '../../models/User';
  import AuthService from '../../services/auth.service';
  
  function onSubmit(e) {
    const formData = new FormData(e.target);
    
    
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }    
    let user =  new User(data['email'],data['password']);
    AuthService.login(user)
    
  }
  function handleDelete(){
    AuthService.logout()
    console.log('Logout')
  }
  function test(){    
    const a = localStorage.getItem('user.access_token');    
    console.log(a);
  }
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
        <form action="/" on:submit|preventDefault={onSubmit}>
          <div class="flex flex-col mb-5">
            <label for="text" class="mb-1 text-xs tracking-wide text-gray-600"
              >E-Mail Address:</label
            >
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
              
                <Icon name="at-symbol" class="h-4 w-4 text-blue-500" />            
              </div>

              <input                
                id="email"
                type="text"
                name="email"
                class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Password:</label
            >
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
                
                  <Icon name="lock-closed" class="h-4 w-4 text-blue-500" />
                
              </div>

              <input
                id="password"
                type="password"
                name="password"
                class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                placeholder="Enter your password"
              />
            </div>
          </div>

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
        <div class="flex w-full">
          <button
            on:click={handleDelete}
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
            <span class="mr-2 uppercase">Log out</span>
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
        <div class="flex w-full">
          <button
            on:click={test}
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
            <span class="mr-2 uppercase">Test</span>
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
