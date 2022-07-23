<script lang="ts">
  import type { Load } from "@sveltejs/kit";
  import Grid from "gridjs-svelte";
  import EditModal from "../../lib/components/modals/users/edit_modal.svelte";
  import type { Users } from "../../lib/utils/schema";
import DeleteModal from "../../lib/components/modals/users/delete_modal.svelte";
  export const load: Load = ({ session }) => {
    if (!session.user.authenticated) {
      return {
        status: 302,
        redirect: "/login",
      };
    }

    return {
      status: 200,
      props: {
        user: session.user,
      },
    };
  };
  import { h, html } from "gridjs";
import { get_data } from "../../lib/shared/api";
import { baseApi } from "../../lib/utils/constants";
import { page, session } from "$app/stores";
import { downloadCSV } from "../../lib/components/others/blob_download";
import { faChartLine, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import Fa from "svelte-fa";
import { fly,fade } from "svelte/transition";

  export let data: [];
  let selected_data: Users = {
      username: "admin",
      is_active: "false",
      full_name: "admin",
      is_superuser: "true",
      id: 1,
  };
  const columns = [
    {
      name: "id",
      id: "id",
      hidden: true,
    },
    {
      name: "Username",
      id: "username",
      formatter: (cell: any) =>
        html(`<p class="badge badge-secondary font-bold">@${cell}</p>`),
    },
    {
      name: "Full Name",
      id: "full_name",
    },
    {
      name: "Super User",
      id: "is_superuser",
      formatter: (cell: any) =>
        cell == true
          ? html(`<p class="badge badge-info">Yes</p>`)
          : html(`<p class="badge badge-primary">No</p>`),
    },
    {
      name: "Action",

      formatter: (cell: any, row: any) => {
        return h(
          "div",
          {
            className: "p-0 flex flex-row btn-group justify-center font-inter",
          },
          h(
            "button",
            {
              className: "btn btn-primary btn-sm w-[80px]",
              onClick: () => {
                edit_user(row.cells[0].data)
              },
            },
            "Edit"
          ),
          null,
          h("div", {
            className: "divider h-1 p-0 m-0",
          }),
          null,
          h(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: () => {
                delete_user(row.cells[0].data)
              },
            },
            "Delete"
          )
        );
      },
    },
  ];
  let values = false;
  let del_val =false
  const edit_user=async (da:any)=>{
      const res = await get_data(`${baseApi}/users/${da}`,$session.user.auth_token).then(res=>res.json())      
      selected_data = {
          username: res.username,
          is_active: String(res.is_active),
          is_superuser: String(res.is_superuser),
          full_name: res.full_name,
          id: res.id
        }
        values=!values
  }
  const delete_user=async (da:any)=>{
      const res = await get_data(`${baseApi}/users/${da}`,$session.user.auth_token).then(res=>res.json())      
      selected_data = {
          username: res.username,
          is_active: String(res.is_active),
          is_superuser: String(res.is_superuser),
          full_name: res.full_name,
          id: res.id
        }
        del_val=!del_val
  }
  const path = `${$page.url.pathname}/print`
</script>
<DeleteModal bind:values={del_val} bind:selected_data bind:data/>
<EditModal bind:values bind:selected_data />
<div class="flex flex-col justify-center w-full">
    <div in:fly={{ y: 500, duration: 500 }} out:fade>
        <div class="relative capitalize">
          <div class="absolute top-0 right-0 z-10 ">
            <button class="btn bg-base-200 text-neutral" on:click={()=>downloadCSV(data)}>
              <Fa icon={faFileCsv} class="mr-3" />
              CSV
            </button>
            <button class="btn bg-base-200 text-neutral" on:click={()=>window.open(path)}>
              <Fa icon={faChartLine} class="mr-3" />
              Report
            </button>            
          </div>
  <Grid
    pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
    fixedHeader={true}
    sort={true}
    search={true}
    resizable={true}
    {columns}
    {data}
  />
  </div>
  </div>
</div>
