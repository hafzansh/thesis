<script lang="ts">
 import { session } from "$app/stores";
import { goto } from "$app/navigation";
  if (!$session.user.is_superuser){
    alert('protected')
    goto('/')
  }
</script>
{$session.user.is_superuser}
poggers
