<script lang="ts">
import { session } from "$app/stores";


  var today = new Date();
  var curHr = today.getHours();
  let greetings:string;
  if (curHr < 12) {
    greetings="Good morning"
  } else if (curHr < 18) {
    greetings="Good afternoon"
  } else {
    greetings= "Good evening"
  }
</script>

<div class="relative bg-primary  p-4 sm:p-6 rounded-lg overflow-hidden mb-8 text-primary-content">
  <div class="relative">
    <h1 class="text-2xl md:text-3xl  font-bold mb-1">
      {greetings}, {$session.user.full_name} 👋
    </h1>
    <p>Here is a data summary on the server</p>
  </div>
</div>
