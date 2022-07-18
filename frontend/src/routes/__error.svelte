<main class="h-screen w-full flex flex-col justify-center items-center mt-[-100px]">
	<h1 class="text-[350px] font-extrabold text-primary tracking-widest">404</h1>
	<div class="bg-neutral px-2 text-[50px] rounded text-white rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
      <a href="/"
        class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-neutral group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-primary border border-current">
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
</main>