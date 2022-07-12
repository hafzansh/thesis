<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'
  
    export const load: Load = ({ session }) => {
      if (!session.user.authenticated) {
        return {
          status: 302,
          redirect: '/login',
        }
      }
  
      return {
        status: 200,
        props: {
          user: session.user,
        },
      }
    }
  </script>
  
  <script lang="ts">
    export let user: string
  </script>
  
  <h1>Protected</h1>
  
  <p class="break-all">{JSON.stringify(user)}!</p>