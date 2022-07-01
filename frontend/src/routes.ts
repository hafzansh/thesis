import Layout from './views/public/Layout.svelte';
import loginSvelte from './views/accounts/login.svelte';
import userSvelte from './views/accounts/user.svelte';

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '/login',
    component: loginSvelte,
  },
  {
    name: '/user',
    component: userSvelte
  },
]

export { routes }