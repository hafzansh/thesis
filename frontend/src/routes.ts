import Layout from './views/public/Layout.svelte';
import loginSvelte from './views/accounts/login.svelte';
import userSvelte from './views/accounts/user.svelte';
import NotFound from './views/not_found.svelte';

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '404',
    path: '404',
    component: NotFound
  },
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