<script lang="ts">
  import Grid from "gridjs-svelte";
  import { session } from "$app/stores";
  import { h, html } from "gridjs";
  import { goto } from "$app/navigation";
  import DeleteModal from "../../../lib/components/modals/predict/delete_modal.svelte";
  import { delete_data, get_data } from "../../../lib/shared/api";
  import { baseApi } from "../../../lib/utils/constants";
  import { toast } from "@zerodevx/svelte-toast";

  type predictions_type = {
    created_on: string;
    path: string;
    data: any;
    id: number;
  };
  export let data: predictions_type[];

  console.log(data);
  data.map((e) => {
    const len = JSON.parse(e.data);
    e.data = len.length;
  });
  const columns = [
    {
      id: "id",
      hidden: true,
    },
    {
      id: "path",
      name: "Model Path",
      formatter: (cell: any) =>
        html(`<p class="badge badge-secondary ">${cell}</p>`),
    },
    {
      id: "data",
      name: "Total Prediction",
    },
    {
      id: "created_on",
      name: "Created on",
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
                goto(`/model/prediction/id/${row.cells[0].data}`);
              },
            },
            "Detail"
          ),
          null,
          h(
            "button",
            {
              className: "btn btn-primary btn-sm w-[80px]",
              onClick: async () => {
                const res = await delete_data(
                  `${baseApi}/model/prediction/id/${row.cells[0].data}`,
                  $session.user.auth_token
                ).then((res) => res.json());
                if (!res.id) {
                  return toast.push("Error, " + res.detail);
                }
                return window.location.href = "/model/prediction"                
              },
            },
            "Delete"
          )
        );
      },
    },
  ];
</script>

<Grid
  pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
  {columns}
  fixedHeader={true}
  sort={true}
  search={true}
  className={{
    table: "w-full h-11/12",
    search: "",
  }}
  {data}
/>
