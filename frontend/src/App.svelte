<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import Tailwind from "./Tailwind.svelte";
</script>

<Router {routes} />
