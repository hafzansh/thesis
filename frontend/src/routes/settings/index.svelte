<script lang="ts">
import { onMount } from 'svelte/internal';

  
  import  {themeChange} from 'theme-change'


onMount(() => {
  themeChange(false)
})
</script>
<div class="mockup-window border bg-base-300">
    <div class="flex justify-start px-4 py-16 bg-base-200">
        <div class="flex flex-col">
            <div class="stats bg-primary text-primary-content">
  
                <div class="stat">
                  <div class="stat-title">Themes</div>
                  <div class="stat-value">Change Theme</div>
                  <div class="stat-actions">
                    
                    <button data-set-theme="autumn" class="btn btn-accent btn-sm" data-act-class="ACTIVECLASS">Autumn</button>
                    <button data-set-theme="cupcake" class="btn btn-secondary btn-sm" data-act-class="ACTIVECLASS">Cupcake</button>
                    <button data-set-theme="pastel" class="btn btn-neutral btn-sm" data-act-class="ACTIVECLASS">Pastel</button>
                  </div>
                </div>
                
              </div>
            <div class="flex flex-row">
    
            </div>
        </div>

    </div>
  </div>
<button data-set-theme="" data-act-class="ACTIVECLASS"></button>