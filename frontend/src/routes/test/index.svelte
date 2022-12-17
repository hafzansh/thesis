<script lang="ts">
import { goto } from "$app/navigation";
import LineChartComparison from "../../lib/components/charts/LineChartComparison.svelte";
import { city } from "../../lib/utils/constants";
import type { Model_Loss, Model_Result, Model_Type } from "../../lib/utils/schema";


  export let data: any;
  const pog: Model_Type = data;
  if (pog.error) {
    goto("/model/data");
  }
  const loss: Model_Loss[] = JSON.parse(pog.loss);
  const chart_loss_label = Array.from(
    { length: pog.epoch },
    (_, i) => `Epoch-${i + 1}`
  );
  const chart_data_loss1 = loss.map((c) => c.loss);
  const chart_data_loss2 = loss.map((c) => c.val_loss);
  const result: Model_Result[] = JSON.parse(pog.result);
  const chart_result_label = result.map(
    (c) => `${city[c.City - 1]} (${c.Year})`
  );
  const chart_data1 = result.map((c) => c["Test Data"]);
  const chart_data2 = result.map((c) => c.Prediction);  
</script>
<LineChartComparison data1={chart_data1} data2={chart_data2} position="center" display={false} legend={true} data_label={chart_result_label} label1="pog" label2="pog" />