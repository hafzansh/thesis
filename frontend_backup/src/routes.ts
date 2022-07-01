import Layout from './views/public/Layout.svelte';


function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '/',
    component: Layout,
  }
]

export { routes }