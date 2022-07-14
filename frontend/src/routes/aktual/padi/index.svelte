<script lang="ts">
    import { session } from "$app/stores";
    import Grid from "gridjs-svelte";
    import { onMount } from "svelte";
    import { city } from "@lib/utils/constants";
    import type { Padi, TProps } from "@lib/utils/schema";
    import { fetchThisData } from "../../test/makeData";
    import { h, } from "gridjs";	
    import {fly,fade} from 'svelte/transition'
    const tableProps: TProps = {
      fixedHeader: true,
      columns: [
        {
          name: "id",
          hidden: true,
        },
        "Tahun",
        "Kota",
        { id: "luas_lahan", name: "Luas Lahan" },
        { id: "luas_panen", name: "Luas Panen" },
        "Produktivitas",
        { id: "produksi", name: "Hasil Produksi" },
        {
              name: 'Action',
              formatter: (cell:any, row:any) => {
                  return h('button', {
                      onClick: () => {
                          alert(`Editing "${row.cells[1].data}" "${row.cells[2].data}"`)
                      }
                  }, 'Edit');
              }
          }
      ],
    };
    const fetchDefault = async () => {
      const response: Padi[] = await fetchThisData($session.user.auth_token).then(
        (res) => res.json()
      );
      return response;
    };
    let data: Padi[] = [];
    onMount(async () => {
      const post = await fetchDefault().then();
      post.map((p) => {
        p.kota = city[parseInt(p.kota)];
      });
      data = post;
    });
  </script>
  <div class="p-10" in:fly={{y: 500,duration:1000}} out:fade>
  <Grid
    pagination={{ enabled: true, limit: 10, summary: true, buttonsCount:5 }}
    {...tableProps}
    search={true}
    className={{
      table:"w-full",
      search:"",
    }}
    {data}
  />
  </div>
  
  